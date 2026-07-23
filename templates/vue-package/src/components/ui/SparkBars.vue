<script setup lang="ts">
/** Mini bar chart — rounded 2px bars, opacity scales with value (from the AI-chat answer chart). */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    data?: number[]
    width?: number
    height?: number
    tone?: 'azure' | 'champagne' | 'mist' | 'rouge'
    gap?: number
    radius?: number
  }>(),
  { data: () => [], width: 140, height: 44, tone: 'azure', gap: 8, radius: 2 },
)

const STROKES = {
  azure: 'var(--color-azure)',
  champagne: 'var(--color-champagne)',
  mist: 'var(--color-mist)',
  rouge: 'var(--color-rouge)',
} as const

const maxV = computed(() => Math.max(...props.data) || 1)
const bw = computed(() => (props.width - props.gap * (props.data.length - 1)) / props.data.length)
const fill = computed(() => STROKES[props.tone] ?? STROKES.azure)

const bars = computed(() =>
  props.data.map((v, i) => {
    const h = (v / maxV.value) * (props.height - 4)
    return {
      x: (i * (bw.value + props.gap)).toFixed(1),
      y: (props.height - h).toFixed(1),
      w: bw.value.toFixed(1),
      h: h.toFixed(1),
      opacity: 0.35 + (v / maxV.value) * 0.5,
    }
  }),
)
</script>

<template>
  <svg
    v-if="data.length"
    :viewBox="`0 0 ${width} ${height}`"
    :style="{ width: `${width}px`, height: `${height}px`, display: 'block' }"
    aria-hidden="true"
  >
    <rect
      v-for="(b, i) in bars"
      :key="i"
      :x="b.x"
      :y="b.y"
      :width="b.w"
      :height="b.h"
      :rx="radius"
      :fill="fill"
      :fill-opacity="b.opacity"
    />
  </svg>
</template>
