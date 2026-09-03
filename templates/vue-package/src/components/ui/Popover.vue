<script setup lang="ts">
/**
 * Floating panel — the shared `.fm-float` surface (opaque pane, faint hairline, soft shadow), fm-pop-in entrance,
 * outside-click + Escape close. Base layer for menus, filter panels, date editors.
 * Trigger goes in the `anchor` slot; clicking it toggles. `v-model:open` for controlled use.
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
    width?: number
    padding?: number
    /** Render the anchor as a block so a `.fm-control` trigger fills its Field */
    block?: boolean
  }>(),
  { placement: 'bottom-start', width: 320, padding: 16, block: false },
)

const open = defineModel<boolean>('open', { default: false })
const rootEl = ref<HTMLElement | null>(null)

const VERTICAL = {
  bottom: { top: 'calc(100% + 8px)' },
  top: { bottom: 'calc(100% + 8px)' },
} as const

const side = computed(() => (props.placement.startsWith('top') ? 'top' : 'bottom'))

/**
 * Horizontal offset in px from the anchor's left edge, resolved once per open.
 *
 * Deliberately NOT `right: 0` for `-end` placements: that anchors the panel to the
 * trigger's right edge, so anything that changes the trigger's width while the panel
 * is open (a filter-count badge appearing, a value label getting longer) drags the
 * panel sideways. The anchor's left edge is the stable reference, so we freeze a
 * numeric offset against it and content changes can no longer move the panel.
 */
const offsetLeft = ref(0)
function resolvePosition() {
  const el = rootEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  // Flip a `-start` panel that would overflow the viewport's right edge
  const flip = props.placement.endsWith('-start') && rect.left + props.width > window.innerWidth - 16
  const alignEnd = props.placement.endsWith('-end') || flip
  const raw = alignEnd ? rect.width - props.width : 0
  // Never let the flip push the panel off the left edge
  offsetLeft.value = Math.max(raw, 16 - rect.left)
}

const panelStyle = computed(() => ({
  position: 'absolute' as const,
  zIndex: 60,
  width: `${props.width}px`,
  padding: `${props.padding}px`,
  left: `${offsetLeft.value}px`,
  ...VERTICAL[side.value],
}))

function onDocDown(e: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(e.target as Node)) open.value = false
}
function onDocKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
watch(
  open,
  (v) => {
    if (v) {
      resolvePosition()
      document.addEventListener('mousedown', onDocDown)
      document.addEventListener('keydown', onDocKey)
      // A resize genuinely invalidates the frozen offset, unlike a content change
      window.addEventListener('resize', resolvePosition)
    } else {
      document.removeEventListener('mousedown', onDocDown)
      document.removeEventListener('keydown', onDocKey)
      window.removeEventListener('resize', resolvePosition)
    }
  },
  { immediate: true },
)
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocDown)
  document.removeEventListener('keydown', onDocKey)
  window.removeEventListener('resize', resolvePosition)
})
</script>

<template>
  <span ref="rootEl" :style="{ position: 'relative', display: block ? 'block' : 'inline-block' }">
    <span :style="{ display: block ? 'block' : 'inline-block' }" @click="open = !open"><slot name="anchor" /></span>
    <!-- `.stop` isolates the floating layer from ancestor click listeners. Note it does NOT
         stop a wrapping `Field` (<label>) from re-dispatching the click to the trigger:
         label activation is the click's default action, so panel content that closes the
         popover must also `preventDefault` (see DatePicker). -->
    <div v-if="open" class="fm-float fm-pop-in" role="dialog" :style="panelStyle" @click.stop>
      <slot />
    </div>
  </span>
</template>
