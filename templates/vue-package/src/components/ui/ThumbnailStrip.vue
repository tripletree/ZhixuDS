<script setup lang="ts">
/** Thumbnail selector row — 32px squares, selected frame tints azure; v-model is the selected index. */
export interface ThumbItem {
  src?: string
  alt?: string
}

withDefaults(
  defineProps<{
    items?: ThumbItem[]
    size?: number
  }>(),
  { items: () => [], size: 32 },
)

const model = defineModel<number>({ default: 0 })
</script>

<template>
  <div style="display: flex; gap: 6px">
    <button
      v-for="(item, i) in items"
      :key="i"
      type="button"
      :aria-pressed="i === model"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        padding: 0,
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: `2px solid ${i === model ? 'var(--color-azure)' : 'transparent'}`,
        outline: i === model ? 'none' : '1px solid var(--border-hairline)',
        outlineOffset: '-1px',
        background:
          'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))',
        transition: 'border-color 0.2s var(--ease-calm)',
      }"
      @click="model = i"
    >
      <img
        v-if="item?.src"
        :src="item.src"
        :alt="item.alt || ''"
        style="width: 100%; height: 100%; object-fit: cover; display: block"
      />
    </button>
  </div>
</template>
