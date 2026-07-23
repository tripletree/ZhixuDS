<script setup lang="ts">
/** Pill segmented control — pills only per readme; active pill lifts to bone 8%, idle tabs dim like nav links. */
import { computed, ref, type Component } from 'vue'

export interface TabItem {
  key: string
  label: string
  /** Optional lucide icon component (size 12/14) */
  icon?: Component
}

const props = withDefaults(
  defineProps<{
    items?: TabItem[]
    size?: 'sm' | 'md'
  }>(),
  { items: () => [], size: 'md' },
)

const model = defineModel<string>()
const hovered = ref<string | null>(null)

const sz = computed(() =>
  props.size === 'sm' ? { padding: '5px 12px', fontSize: '12px' } : { padding: '7px 16px', fontSize: '13px' },
)

function itemStyle(item: TabItem) {
  const active = item.key === model.value
  const hover = hovered.value === item.key
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    border: `1px solid ${active ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)' : 'transparent'}`,
    background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
    color: active ? 'var(--color-bone)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
    transition: 'all 0.3s var(--ease-calm)',
    ...sz.value,
  }
}
</script>

<template>
  <div
    role="tablist"
    style="display: inline-flex; gap: 4px; padding: 4px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--color-bone) 10%, transparent); background: color-mix(in srgb, var(--color-bone) 3%, transparent)"
  >
    <button
      v-for="item in items"
      :key="item.key"
      type="button"
      role="tab"
      :aria-selected="item.key === model"
      :style="itemStyle(item)"
      @click="model = item.key"
      @mouseenter="hovered = item.key"
      @mouseleave="hovered = null"
    >
      <component :is="item.icon" v-if="item.icon" :size="size === 'sm' ? 12 : 14" :stroke-width="1.75" />
      {{ item.label }}
    </button>
  </div>
</template>
