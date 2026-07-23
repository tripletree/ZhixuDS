<script setup lang="ts">
/** No-data placeholder — mist glyph in a hairline circle, quiet copy, optional `action` slot. */
import { Database } from 'lucide-vue-next'
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    /** Lucide icon component; defaults to Database */
    icon?: Component
    title?: string
    description?: string
    compact?: boolean
  }>(),
  { icon: undefined, compact: false },
)
</script>

<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: compact ? '20px 16px' : '40px 24px',
      textAlign: 'center',
    }"
  >
    <span
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: compact ? '44px' : '56px',
        height: compact ? '44px' : '56px',
        borderRadius: '999px',
        border: '1px solid var(--border-hairline)',
        background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
        color: 'var(--color-mist)',
      }"
    >
      <component :is="icon ?? Database" :size="compact ? 18 : 22" :stroke-width="1.5" />
    </span>
    <span v-if="title" style="font-size: 14px; font-weight: 500; color: var(--color-bone-soft)">{{ title }}</span>
    <span
      v-if="description"
      style="max-width: 320px; font-size: 12px; line-height: 1.6; letter-spacing: 0.02em; color: var(--color-mist)"
    >{{ description }}</span>
    <div v-if="$slots.action" style="margin-top: 6px"><slot name="action" /></div>
  </div>
</template>
