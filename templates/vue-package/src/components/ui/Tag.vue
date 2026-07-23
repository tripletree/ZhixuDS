<script setup lang="ts">
/**
 * Pill chip — from the AI-chat suggestion chips; tone tints follow the data-series palette.
 * Optional leading icon via the `icon` slot (lucide component, size 10/12, stroke 1.75).
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tone?: 'neutral' | 'azure' | 'champagne' | 'rouge'
    size?: 'sm' | 'md'
  }>(),
  { tone: 'neutral', size: 'md' },
)

const TONES = {
  neutral: {
    border: 'color-mix(in srgb, var(--color-bone) 10%, transparent)',
    background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
    color: 'var(--color-bone-dim)',
  },
  azure: {
    border: 'color-mix(in srgb, var(--color-azure) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-azure) 10%, transparent)',
    color: 'var(--color-azure-bright)',
  },
  champagne: {
    border: 'color-mix(in srgb, var(--color-champagne) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-champagne) 10%, transparent)',
    color: 'var(--color-champagne)',
  },
  rouge: {
    border: 'color-mix(in srgb, var(--color-rouge) 35%, transparent)',
    background: 'color-mix(in srgb, var(--color-rouge) 12%, transparent)',
    color: 'color-mix(in srgb, var(--color-rouge) 55%, var(--color-bone))',
  },
} as const

const style = computed(() => {
  const t = TONES[props.tone] ?? TONES.neutral
  const sz = props.size === 'sm' ? { padding: '4px 10px', fontSize: '10px' } : { padding: '5px 12px', fontSize: '12px' }
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '999px',
    border: `1px solid ${t.border}`,
    background: t.background,
    color: t.color,
    fontWeight: 500,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    ...sz,
  }
})
</script>

<template>
  <span :style="style">
    <slot name="icon" />
    <slot />
  </span>
</template>
