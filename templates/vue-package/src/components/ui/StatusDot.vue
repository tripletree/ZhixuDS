<script setup lang="ts">
/** Live status dot with ping halo — from the hero's floating annotations. */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tone?: 'azure' | 'champagne' | 'rouge'
    label?: string
  }>(),
  { tone: 'azure' },
)

const c = computed(() =>
  props.tone === 'champagne'
    ? 'var(--color-champagne)'
    : props.tone === 'rouge'
      ? 'var(--color-rouge)'
      : 'var(--color-azure)',
)
</script>

<template>
  <span style="display: inline-flex; align-items: center; gap: 8px">
    <span style="position: relative; display: inline-flex; width: 6px; height: 6px">
      <span
        class="animate-ping"
        :style="{
          position: 'absolute',
          inset: 0,
          borderRadius: '999px',
          background: `color-mix(in srgb, ${c} 60%, transparent)`,
        }"
      ></span>
      <span
        :style="{
          position: 'relative',
          display: 'inline-flex',
          width: '6px',
          height: '6px',
          borderRadius: '999px',
          background: c,
        }"
      ></span>
    </span>
    <span v-if="label" style="font-size: 12px; letter-spacing: 0.02em; color: var(--color-bone-soft)">{{ label }}</span>
  </span>
</template>
