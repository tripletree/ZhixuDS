<script setup lang="ts">
/** Vertical (or grid) group of Checkboxes over an options array; v-model is the checked-values array. */
import { computed } from 'vue'
import Checkbox from './Checkbox.vue'

export interface CheckOption {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    options?: CheckOption[]
    columns?: number
    gap?: number
  }>(),
  { options: () => [], gap: 10 },
)

const model = defineModel<string[]>({ default: () => [] })

const layout = computed(() =>
  props.columns
    ? {
        display: 'grid',
        gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
        gap: `${props.gap}px`,
      }
    : { display: 'flex', flexDirection: 'column' as const, gap: `${props.gap}px` },
)

function isOn(v: string) {
  return model.value.includes(v)
}
function toggle(v: string, on: boolean) {
  model.value = on ? [...model.value, v] : model.value.filter((x) => x !== v)
}
</script>

<template>
  <div role="group" :style="layout">
    <Checkbox
      v-for="o in options"
      :key="o.value"
      :model-value="isOn(o.value)"
      :disabled="o.disabled"
      @update:model-value="(on: boolean) => toggle(o.value, on)"
    >{{ o.label }}</Checkbox>
  </div>
</template>
