<script setup lang="ts">
/**
 * Floating action button — the azure glow treatment from 生成上身效果, as a 48px circle.
 * Default AI entry: sparkles glyph.
 */
import { computed, ref, type Component } from 'vue'
import { Sparkles } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    /** Lucide icon component; defaults to Sparkles */
    icon?: Component
    label?: string
    fixed?: boolean
    offset?: number
  }>(),
  { icon: undefined, fixed: false, offset: 24 },
)

const emit = defineEmits<{ click: [] }>()
const hover = ref(false)

const style = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '999px',
  cursor: 'pointer',
  border: `1px solid color-mix(in srgb, var(--color-azure) ${hover.value ? 55 : 40}%, transparent)`,
  background: `color-mix(in srgb, var(--color-azure) ${hover.value ? 24 : 15}%, transparent)`,
  color: 'var(--color-azure-bright)',
  backdropFilter: 'blur(8px)',
  boxShadow: hover.value ? '0 0 34px -4px var(--azure-glow)' : '0 0 24px -6px var(--azure-glow)',
  transform: hover.value ? 'translateY(-2px)' : 'none',
  transition: 'all 0.3s var(--ease-calm)',
  ...(props.fixed
    ? { position: 'fixed' as const, right: `${props.offset}px`, bottom: `${props.offset}px`, zIndex: 90 }
    : {}),
}))
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    :style="style"
    @click="emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <component :is="icon ?? Sparkles" :size="20" :stroke-width="1.5" />
  </button>
</template>
