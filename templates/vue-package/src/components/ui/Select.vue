<script setup lang="ts">
/** Native select on the .fm-control surface with a mist chevron; pass <option> elements via the default slot. */
import { ChevronDown } from 'lucide-vue-next'

defineProps<{ disabled?: boolean }>()

const model = defineModel<string>({ default: '' })
</script>

<template>
  <span style="position: relative; display: block">
    <select
      v-model="model"
      class="fm-control"
      style="appearance: none; -webkit-appearance: none; padding-right: 38px; cursor: pointer"
      :disabled="disabled"
    >
      <slot />
    </select>
    <span
      style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); display: inline-flex; color: var(--color-mist); pointer-events: none"
    >
      <ChevronDown :size="14" :stroke-width="1.75" />
    </span>
  </span>
</template>
