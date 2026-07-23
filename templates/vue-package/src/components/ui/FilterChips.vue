<script setup lang="ts">
/**
 * Selectable chip group — pills only per readme; selected chips tint azure like the nav hover.
 * Single-select: v-model is a string. Multi-select (`multiple`): v-model is a string array.
 */
import { computed, ref } from 'vue'

export interface ChipOption {
  value: string
  label: string
}

const props = withDefaults(
  defineProps<{
    options?: ChipOption[]
    multiple?: boolean
    title?: string
    size?: 'sm' | 'md'
  }>(),
  { options: () => [], multiple: false, size: 'md' },
)

const model = defineModel<string | string[]>()
const hovered = ref<string | null>(null)

const sz = computed(() =>
  props.size === 'sm' ? { padding: '4px 12px', fontSize: '12px' } : { padding: '6px 14px', fontSize: '13px' },
)

function isOn(v: string) {
  return props.multiple ? Array.isArray(model.value) && model.value.includes(v) : v === model.value
}
function pick(v: string) {
  if (props.multiple) {
    const cur = Array.isArray(model.value) ? model.value : []
    model.value = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]
  } else {
    model.value = v
  }
}
function chipStyle(v: string) {
  const on = isOn(v)
  const hover = hovered.value === v
  return {
    borderRadius: '999px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s var(--ease-calm)',
    border: `1px solid ${
      on
        ? 'color-mix(in srgb, var(--color-azure) 40%, transparent)'
        : hover
          ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)'
          : 'color-mix(in srgb, var(--color-bone) 12%, transparent)'
    }`,
    background: on
      ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)'
      : 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
    color: on ? 'var(--color-azure-bright)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
    ...sz.value,
  }
}
</script>

<template>
  <div>
    <div v-if="title" style="margin-bottom: 8px; font-size: 12px; letter-spacing: 0.02em; color: var(--color-bone-dim)">
      {{ title }}
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <button
        v-for="o in options"
        :key="o.value"
        type="button"
        :aria-pressed="isOn(o.value)"
        :style="chipStyle(o.value)"
        @click="pick(o.value)"
        @mouseenter="hovered = o.value"
        @mouseleave="hovered = null"
      >
        {{ o.label }}
      </button>
    </div>
  </div>
</template>
