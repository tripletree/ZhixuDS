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

const PLACE = {
  'bottom-start': { top: 'calc(100% + 8px)', left: '0' },
  'bottom-end': { top: 'calc(100% + 8px)', right: '0' },
  'top-start': { bottom: 'calc(100% + 8px)', left: '0' },
  'top-end': { bottom: 'calc(100% + 8px)', right: '0' },
} as const

// Resolved on open: if a `*-start` panel would overflow the viewport's right edge,
// flip it to `*-end` so filter panels near the toolbar's right side stay on screen.
const resolvedPlacement = ref(props.placement)
function resolvePlacement() {
  resolvedPlacement.value = props.placement
  const el = rootEl.value
  if (!el || !props.placement.endsWith('-start')) return
  const { left } = el.getBoundingClientRect()
  if (left + props.width > window.innerWidth - 16) {
    resolvedPlacement.value = props.placement.replace('-start', '-end') as typeof props.placement
  }
}

const panelStyle = computed(() => ({
  position: 'absolute' as const,
  zIndex: 60,
  width: `${props.width}px`,
  padding: `${props.padding}px`,
  ...(PLACE[resolvedPlacement.value] ?? PLACE['bottom-start']),
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
      resolvePlacement()
      document.addEventListener('mousedown', onDocDown)
      document.addEventListener('keydown', onDocKey)
    } else {
      document.removeEventListener('mousedown', onDocDown)
      document.removeEventListener('keydown', onDocKey)
    }
  },
  { immediate: true },
)
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocDown)
  document.removeEventListener('keydown', onDocKey)
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
