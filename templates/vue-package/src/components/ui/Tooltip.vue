<script setup lang="ts">
/** Micro floating hint — frosted float surface at caption scale, shown on hover/focus after a short delay. */
import { computed, onBeforeUnmount, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Hint text — keep to one caption-scale line or two */
    content?: string
    placement?: 'top' | 'bottom' | 'left' | 'right'
    /** Hover intent delay in ms */
    delay?: number
    maxWidth?: number
    /** Controlled visibility (for demos); omit for hover/focus behaviour */
    open?: boolean
  }>(),
  { placement: 'top', delay: 150, maxWidth: 240, open: undefined },
)

const innerOpen = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

function show() {
  clearTimeout(timer)
  timer = setTimeout(() => (innerOpen.value = true), props.delay)
}
function hide() {
  clearTimeout(timer)
  innerOpen.value = false
}
onBeforeUnmount(() => clearTimeout(timer))

const PLACE = {
  top: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  bottom: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  left: { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  right: { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
} as const

const panelStyle = computed(() => ({
  position: 'absolute' as const,
  zIndex: 70,
  width: 'max-content',
  maxWidth: `${props.maxWidth}px`,
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
  background: 'var(--surface-float)',
  backdropFilter: 'blur(12px)',
  boxShadow: 'var(--shadow-float)',
  fontSize: '12px',
  lineHeight: 1.6,
  letterSpacing: '0.02em',
  color: 'var(--color-bone-soft)',
  pointerEvents: 'none' as const,
  ...(PLACE[props.placement] ?? PLACE.top),
}))
</script>

<template>
  <span
    style="position: relative; display: inline-block"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />
    <span v-if="isOpen && content" role="tooltip" class="fm-pop-in" :style="panelStyle">
      {{ content }}
    </span>
  </span>
</template>
