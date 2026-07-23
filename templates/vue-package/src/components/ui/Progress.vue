<script setup lang="ts">
/** Gradient meter row — the dashboard's 材料机会 TOP 5 bars (6px pill track, azure-deep→azure fill). */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    value: number
    max?: number
    tone?: 'azure' | 'champagne' | 'rouge' | 'bone'
    showValue?: boolean
    labelWidth?: number
  }>(),
  { max: 100, tone: 'azure', showValue: true, labelWidth: 96 },
)

const FILL = {
  azure: 'linear-gradient(to right, var(--color-azure-deep), var(--color-azure))',
  champagne:
    'linear-gradient(to right, color-mix(in srgb, var(--color-champagne) 65%, var(--color-ink-700)), var(--color-champagne))',
  rouge:
    'linear-gradient(to right, color-mix(in srgb, var(--color-rouge) 65%, var(--color-ink-700)), var(--color-rouge))',
  bone: 'color-mix(in srgb, var(--color-bone) 45%, transparent)',
} as const

const pct = computed(() => Math.max(0, Math.min(100, (props.value / props.max) * 100)))
const fill = computed(() => FILL[props.tone] ?? FILL.azure)
</script>

<template>
  <div style="display: flex; align-items: center; gap: 10px">
    <span
      v-if="label != null"
      :style="{ width: `${labelWidth}px`, flex: 'none', fontSize: '11px', color: 'var(--color-bone-soft)' }"
    >{{ label }}</span>
    <div
      style="height: 6px; flex: 1; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--color-bone) 6%, transparent)"
    >
      <div
        :style="{
          height: '100%',
          borderRadius: '999px',
          width: `${pct}%`,
          background: fill,
          transition: 'width 0.9s var(--ease-calm)',
        }"
      ></div>
    </div>
    <span
      v-if="showValue"
      style="width: 28px; flex: none; text-align: right; font-size: 11px; font-weight: 500; color: var(--color-bone)"
    >{{ value }}</span>
  </div>
</template>
