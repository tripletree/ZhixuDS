<script setup lang="ts">
/**
 * Feedback toast — the frosted float surface (Listbox panel recipe) as a transient notice.
 * Tones follow the data palette: info/success azure, warning champagne, error rouge.
 */
import { computed, type Component } from 'vue'
import { CircleAlert, CircleCheck, Info, X } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    tone?: 'info' | 'success' | 'warning' | 'error'
    title?: string
    description?: string
    /** Override the tone's lucide icon component */
    icon?: Component
    /** Shows the corner close button */
    closable?: boolean
  }>(),
  { tone: 'info', closable: false },
)

const emit = defineEmits<{ close: [] }>()

const TONES = {
  info: { color: 'var(--color-azure-bright)', icon: Info },
  success: { color: 'var(--color-azure-bright)', icon: CircleCheck },
  warning: { color: 'var(--color-champagne)', icon: CircleAlert },
  error: { color: 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))', icon: CircleAlert },
} as const

const t = computed(() => TONES[props.tone] ?? TONES.info)
</script>

<template>
  <div
    role="status"
    class="fm-pop-in"
    style="display: flex; align-items: flex-start; gap: 10px; width: 320px; padding: 12px 14px; border-radius: var(--radius-panel); border: 1px solid color-mix(in srgb, var(--color-bone) 12%, transparent); background: var(--surface-float); backdrop-filter: blur(12px); box-shadow: var(--shadow-float)"
  >
    <span :style="{ display: 'inline-flex', flex: 'none', marginTop: '1px', color: t.color }">
      <component :is="icon ?? t.icon" :size="15" :stroke-width="1.75" />
    </span>
    <div style="flex: 1; display: flex; flex-direction: column; gap: 3px">
      <span v-if="title" style="font-size: 13px; font-weight: 500; line-height: 1.5; color: var(--color-bone)">{{ title }}</span>
      <span
        v-if="description"
        style="font-size: 12px; line-height: 1.6; letter-spacing: 0.02em; color: var(--color-bone-dim)"
      >{{ description }}</span>
    </div>
    <button
      v-if="closable"
      type="button"
      aria-label="关闭"
      style="display: inline-flex; flex: none; padding: 2px; margin: -2px -4px 0 0; border: none; border-radius: 999px; background: transparent; color: var(--color-bone-dim); cursor: pointer"
      @click="emit('close')"
    >
      <X :size="13" :stroke-width="1.75" />
    </button>
  </div>
</template>
