<script setup lang="ts">
/** Metric block — numeral treatment from the dashboard's 机会指数 tile; ↑/↓ delta arrows are unicode per readme. */
import { computed } from 'vue'
import CountUp from './CountUp.vue'

const props = withDefaults(
  defineProps<{
    label?: string
    value: number | string
    suffix?: string
    delta?: string
    trend?: 'up' | 'down'
    size?: 'sm' | 'md' | 'lg'
    animate?: boolean
  }>(),
  { trend: 'up', size: 'md', animate: true },
)

const num = computed(() => ({ sm: 28, md: 36, lg: 48 })[props.size] ?? 36)
const deltaColor = computed(() =>
  props.trend === 'down'
    ? 'color-mix(in srgb, var(--color-rouge) 70%, var(--color-bone))'
    : 'var(--color-azure-bright)',
)
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 6px">
    <span
      v-if="label"
      style="font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; color: var(--color-bone-dim)"
    >{{ label }}</span>
    <div style="display: flex; align-items: baseline; gap: 10px">
      <span
        :style="{
          fontSize: `${num}px`,
          fontWeight: 600,
          letterSpacing: '-0.025em',
          lineHeight: 1.1,
          color: 'var(--color-bone)',
        }"
      >
        <CountUp v-if="animate && typeof value === 'number'" :to="value" />
        <template v-else>{{ value }}</template>
      </span>
      <span v-if="suffix" style="font-size: 14px; color: var(--color-bone-dim)">{{ suffix }}</span>
      <span
        v-if="delta"
        :style="{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', color: deltaColor }"
      >{{ trend === 'down' ? '↓' : '↑' }} {{ delta }}</span>
    </div>
  </div>
</template>
