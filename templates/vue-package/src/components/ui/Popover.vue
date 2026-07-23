<script setup lang="ts">
/**
 * Floating panel — frosted ink surface (same recipe as the Listbox panel), fm-pop-in entrance,
 * outside-click + Escape close. Base layer for menus, filter panels, date editors.
 * Trigger goes in the `anchor` slot; clicking it toggles. `v-model:open` for controlled use.
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
    width?: number
    padding?: number
  }>(),
  { placement: 'bottom-start', width: 320, padding: 16 },
)

const open = defineModel<boolean>('open', { default: false })
const rootEl = ref<HTMLElement | null>(null)

const PLACE = {
  'bottom-start': { top: 'calc(100% + 8px)', left: '0' },
  'bottom-end': { top: 'calc(100% + 8px)', right: '0' },
  'top-start': { bottom: 'calc(100% + 8px)', left: '0' },
  'top-end': { bottom: 'calc(100% + 8px)', right: '0' },
} as const

const panelStyle = computed(() => ({
  position: 'absolute' as const,
  zIndex: 60,
  width: `${props.width}px`,
  padding: `${props.padding}px`,
  borderRadius: 'var(--radius-panel)',
  border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
  background: 'var(--surface-float)',
  backdropFilter: 'blur(12px)',
  boxShadow: 'var(--shadow-float)',
  ...(PLACE[props.placement] ?? PLACE['bottom-start']),
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
  <span ref="rootEl" style="position: relative; display: inline-block">
    <span style="display: inline-block" @click="open = !open"><slot name="anchor" /></span>
    <div v-if="open" class="fm-pop-in" role="dialog" :style="panelStyle">
      <slot />
    </div>
  </span>
</template>
