<script setup lang="ts">
import { useReducedMotion } from 'motion-v'
import { Motion } from '../../lib/motion'

/**
 * Scroll-triggered reveal. Calm layered fade + upward float.
 * Honours prefers-reduced-motion by jumping straight to the final state.
 */
withDefaults(
  defineProps<{
    as?: string
    y?: number
    x?: number
    delay?: number
    duration?: number
    amount?: number
    once?: boolean
  }>(),
  {
    as: 'div',
    y: 26,
    x: 0,
    delay: 0,
    duration: 0.75,
    amount: 0.25,
    once: true,
  },
)

const reduced = useReducedMotion()
</script>

<template>
  <Motion
    :as="as"
    :initial="reduced ? false : { opacity: 0, y, x }"
    :while-in-view="{ opacity: 1, y: 0, x: 0 }"
    :in-view-options="{ once, amount }"
    :transition="{ duration, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </Motion>
</template>
