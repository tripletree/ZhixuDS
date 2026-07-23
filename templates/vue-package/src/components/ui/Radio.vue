<script setup lang="ts">
/** Radio — 16px circle, azure ring + 8px azure dot when selected. Emits `select` when picked. */
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    checked?: boolean
    name?: string
    disabled?: boolean
  }>(),
  { checked: false, disabled: false },
)

const emit = defineEmits<{ select: [] }>()
const focus = ref(false)

const circleStyle = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  flex: 'none',
  borderRadius: '999px',
  transition: 'all 0.2s var(--ease-calm)',
  border: `1px solid ${props.checked ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
  background: 'var(--surface-control)',
  boxShadow: focus.value ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
}))

function onChange(e: Event) {
  if ((e.target as HTMLInputElement).checked) emit('select')
}
</script>

<template>
  <label
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
    }"
  >
    <input
      type="radio"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      style="position: absolute; width: 1px; height: 1px; opacity: 0; margin: 0; pointer-events: none"
      @change="onChange"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span aria-hidden="true" :style="circleStyle">
      <span
        v-if="checked"
        style="width: 8px; height: 8px; border-radius: 999px; background: var(--color-azure)"
      ></span>
    </span>
    <span v-if="$slots.default" style="font-size: 13px; line-height: 1.5; color: var(--color-bone-soft)">
      <slot />
    </span>
  </label>
</template>
