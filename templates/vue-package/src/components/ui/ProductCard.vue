<script setup lang="ts">
/**
 * Product media card — image, two-line clamped title, brand + date meta row.
 * Cards lift and tint azure on hover per the brand hover language. Optional `tags` slot.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    aspectRatio?: string
    title?: string
    brand?: string
    date?: string
    clickable?: boolean
  }>(),
  { alt: '', aspectRatio: '3/4', clickable: false },
)

const emit = defineEmits<{ click: [] }>()
const hover = ref(false)

const cardStyle = computed(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px',
  borderRadius: '12px',
  overflow: 'hidden',
  border: `1px solid ${hover.value ? 'color-mix(in srgb, var(--color-azure) 25%, transparent)' : 'var(--border-hairline)'}`,
  background: 'var(--surface-control)',
  transform: hover.value ? 'translateY(-4px)' : 'none',
  transition: 'all 0.3s var(--ease-calm)',
  cursor: props.clickable ? 'pointer' : 'default',
}))
</script>

<template>
  <div
    :style="cardStyle"
    @click="emit('click')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div
      :style="{
        aspectRatio,
        width: '100%',
        overflow: 'hidden',
        background:
          'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))',
      }"
    >
      <img v-if="src" :src="src" :alt="alt" style="width: 100%; height: 100%; object-fit: cover; display: block" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 0 12px 12px">
      <span
        v-if="title"
        style="font-size: 13px; line-height: 1.5; color: var(--color-bone); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden"
      >{{ title }}</span>
      <div v-if="$slots.tags" style="display: flex; flex-wrap: wrap; gap: 4px"><slot name="tags" /></div>
      <div v-if="brand || date" style="display: flex; align-items: baseline; gap: 8px">
        <span
          v-if="brand"
          style="flex: 1; font-size: 12px; letter-spacing: 0.02em; color: var(--color-bone-dim); white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
        >{{ brand }}</span>
        <span v-else style="flex: 1"></span>
        <span
          v-if="date"
          style="font-size: 11px; letter-spacing: 0.02em; color: var(--color-mist); white-space: nowrap"
        >{{ date }}</span>
      </div>
    </div>
  </div>
</template>
