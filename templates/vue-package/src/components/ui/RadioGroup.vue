<script setup lang="ts">
/** Radio group over an options array; v-model is the selected value. */
import { useId } from 'vue'
import Radio from './Radio.vue'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    options?: RadioOption[]
    direction?: 'column' | 'row'
    gap?: number
    name?: string
  }>(),
  { options: () => [], direction: 'column', gap: 10 },
)

const model = defineModel<string>()
const autoName = useId()
</script>

<template>
  <div
    role="radiogroup"
    :style="{ display: 'flex', flexDirection: direction, flexWrap: 'wrap', gap: `${gap}px` }"
  >
    <Radio
      v-for="o in options"
      :key="o.value"
      :name="props.name || autoName"
      :checked="o.value === model"
      :disabled="o.disabled"
      @select="model = o.value"
    >{{ o.label }}</Radio>
  </div>
</template>
