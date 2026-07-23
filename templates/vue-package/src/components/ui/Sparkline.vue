<script setup lang="ts">
/** Thin-stroke micro chart — 1.6px trend line from the dashboard/chat mocks. */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    data?: number[]
    width?: number
    height?: number
    tone?: 'azure' | 'champagne' | 'mist' | 'rouge'
    fill?: boolean
    dot?: boolean
    strokeWidth?: number
  }>(),
  { data: () => [], width: 140, height: 44, tone: 'azure', fill: false, dot: false, strokeWidth: 1.6 },
)

const STROKES = {
  azure: 'var(--color-azure)',
  champagne: 'var(--color-champagne)',
  mist: 'var(--color-mist)',
  rouge: 'var(--color-rouge)',
} as const

const pad = 3
const pts = computed(() => {
  if (props.data.length < 2) return []
  const min = Math.min(...props.data)
  const span = Math.max(...props.data) - min || 1
  return props.data.map((v, i) => [
    pad + (i / (props.data.length - 1)) * (props.width - pad * 2),
    pad + (1 - (v - min) / span) * (props.height - pad * 2),
  ])
})
const line = computed(() => pts.value.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' '))
const stroke = computed(() => STROKES[props.tone] ?? STROKES.azure)
const last = computed(() => pts.value[pts.value.length - 1])
const area = computed(
  () => `${pad},${props.height - pad} ${line.value} ${(props.width - pad).toFixed(1)},${props.height - pad}`,
)
</script>

<template>
  <svg
    v-if="pts.length"
    :viewBox="`0 0 ${width} ${height}`"
    :style="{ width: `${width}px`, height: `${height}px`, display: 'block' }"
    aria-hidden="true"
  >
    <polygon v-if="fill" :points="area" :fill="stroke" fill-opacity="0.18" stroke="none" />
    <polyline :points="line" fill="none" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" />
    <circle
      v-if="dot && last"
      :cx="last[0].toFixed(1)"
      :cy="last[1].toFixed(1)"
      r="2.2"
      :fill="tone === 'azure' ? 'var(--color-azure-bright)' : stroke"
    />
  </svg>
</template>
