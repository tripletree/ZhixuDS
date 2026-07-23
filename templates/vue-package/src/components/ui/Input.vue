<script setup lang="ts">
/** Text input on the chat-input surface (.fm-control); optional leading lucide icon component. */
import { computed, type Component } from 'vue'

const props = defineProps<{
  /** Leading lucide icon component, rendered at 14px in mist */
  icon?: Component
  placeholder?: string
  type?: string
  disabled?: boolean
  /** Rouge border + focus ring (.fm-control-error) + aria-invalid */
  invalid?: boolean
}>()

const model = defineModel<string>({ default: '' })
const cls = computed(() => (props.invalid ? 'fm-control fm-control-error' : 'fm-control'))
</script>

<template>
  <input
    v-if="!icon"
    v-model="model"
    :class="cls"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="invalid || undefined"
  />
  <span v-else style="position: relative; display: block">
    <span
      style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); display: inline-flex; color: var(--color-mist); pointer-events: none"
    >
      <component :is="icon" :size="14" :stroke-width="1.75" />
    </span>
    <input
      v-model="model"
      :class="cls"
      style="padding-left: 38px"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="invalid || undefined"
    />
  </span>
</template>
