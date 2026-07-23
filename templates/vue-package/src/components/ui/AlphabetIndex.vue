<script setup lang="ts">
/** A–Z index rail for large pickers — active letter tints azure, unavailable letters dim out. */
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    letters?: string[]
    /** Letters that have entries; others render disabled. Omit to enable all. */
    available?: string[]
  }>(),
  { letters: () => ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'], available: undefined },
)

const model = defineModel<string>()
const hovered = ref<string | null>(null)

function enabled(l: string) {
  return !props.available || props.available.includes(l)
}
function letterStyle(l: string) {
  const on = l === model.value
  const hover = hovered.value === l
  return {
    minWidth: '22px',
    height: '22px',
    padding: '0 4px',
    borderRadius: '999px',
    border: 'none',
    cursor: enabled(l) ? 'pointer' : 'default',
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    background: on ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)' : 'transparent',
    color: !enabled(l)
      ? 'color-mix(in srgb, var(--color-mist) 45%, transparent)'
      : on
        ? 'var(--color-azure-bright)'
        : hover
          ? 'var(--color-bone)'
          : 'var(--color-bone-dim)',
    transition: 'all 0.2s var(--ease-calm)',
  }
}
</script>

<template>
  <div role="navigation" aria-label="字母索引" style="display: flex; flex-wrap: wrap; gap: 2px">
    <button
      v-for="l in letters"
      :key="l"
      type="button"
      :disabled="!enabled(l)"
      :aria-pressed="l === model"
      :style="letterStyle(l)"
      @click="model = l"
      @mouseenter="hovered = l"
      @mouseleave="hovered = null"
    >{{ l }}</button>
  </div>
</template>
