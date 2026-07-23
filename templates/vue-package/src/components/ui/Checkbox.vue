<script setup lang="ts">
/**
 * Checkable filter control — 16px box, azure fill when checked; the check strokes in ink-950,
 * which inverts to white in the light theme so contrast holds on both grounds.
 */
import { computed, ref } from 'vue'
import { Check } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    indeterminate?: boolean
    disabled?: boolean
  }>(),
  { indeterminate: false, disabled: false },
)

const model = defineModel<boolean>({ default: false })
const focus = ref(false)

const on = computed(() => model.value || props.indeterminate)

const boxStyle = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  flex: 'none',
  borderRadius: '4px',
  transition: 'all 0.2s var(--ease-calm)',
  border: `1px solid ${on.value ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
  background: on.value ? 'var(--color-azure)' : 'var(--surface-control)',
  boxShadow: focus.value ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
  color: 'var(--color-ink-950)',
}))
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
      v-model="model"
      type="checkbox"
      :disabled="disabled"
      style="position: absolute; width: 1px; height: 1px; opacity: 0; margin: 0; pointer-events: none"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span aria-hidden="true" :style="boxStyle">
      <span
        v-if="indeterminate"
        style="width: 8px; height: 2px; border-radius: 1px; background: currentColor"
      ></span>
      <Check v-else-if="model" :size="11" :stroke-width="3.5" />
    </span>
    <span v-if="$slots.default" style="font-size: 13px; line-height: 1.5; color: var(--color-bone-soft)">
      <slot />
    </span>
  </label>
</template>
