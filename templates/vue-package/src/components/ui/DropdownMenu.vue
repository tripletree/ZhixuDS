<script setup lang="ts">
/** Action menu on the Popover panel — for row/card actions (导出/收藏/删除). Trigger via the `anchor` slot. */
import { ref, type Component } from 'vue'
import Popover from './Popover.vue'

export interface MenuItem {
  key?: string
  label?: string
  /** Optional lucide icon component (14px, stroke 1.75) */
  icon?: Component
  hint?: string
  danger?: boolean
  disabled?: boolean
  type?: 'divider'
}

const props = withDefaults(
  defineProps<{
    items?: MenuItem[]
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
    width?: number
  }>(),
  { items: () => [], placement: 'bottom-end', width: 180 },
)

const emit = defineEmits<{ select: [key: string] }>()

const open = ref(false)
const active = ref<string | null>(null)

function itemStyle(item: MenuItem) {
  const hover = active.value === item.key
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '8px 10px',
    border: 'none',
    borderRadius: '8px',
    cursor: item.disabled ? 'not-allowed' : 'pointer',
    textAlign: 'left' as const,
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    opacity: item.disabled ? 0.45 : 1,
    transition: 'all 0.2s var(--ease-calm)',
    background:
      hover && !item.disabled
        ? item.danger
          ? 'color-mix(in srgb, var(--color-rouge) 14%, transparent)'
          : 'color-mix(in srgb, var(--color-azure) 10%, transparent)'
        : 'transparent',
    color: item.danger
      ? 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))'
      : hover
        ? 'var(--color-bone)'
        : 'var(--color-bone-soft)',
  }
}

function pick(item: MenuItem) {
  open.value = false
  if (item.key) emit('select', item.key)
}
</script>

<template>
  <Popover v-model:open="open" :placement="placement" :width="width" :padding="6">
    <template #anchor><slot name="anchor" /></template>
    <div role="menu" style="display: flex; flex-direction: column">
      <template v-for="(item, i) in props.items" :key="item.key ?? `d${i}`">
        <div
          v-if="item.type === 'divider'"
          style="margin: 6px 4px; border-top: 1px solid var(--border-hairline)"
        ></div>
        <button
          v-else
          type="button"
          role="menuitem"
          :disabled="item.disabled"
          :style="itemStyle(item)"
          @mouseenter="active = item.key ?? null"
          @mouseleave="active = null"
          @click="pick(item)"
        >
          <component :is="item.icon" v-if="item.icon" :size="14" :stroke-width="1.75" />
          <span style="flex: 1">{{ item.label }}</span>
          <span v-if="item.hint" style="font-size: 11px; color: var(--color-mist)">{{ item.hint }}</span>
        </button>
      </template>
    </div>
  </Popover>
</template>
