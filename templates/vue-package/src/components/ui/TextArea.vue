<script setup lang="ts">
/** Multi-line input on the chat-input surface (.fm-control), vertical resize only. */
withDefaults(
  defineProps<{
    rows?: number
    placeholder?: string
    disabled?: boolean
  }>(),
  { rows: 4 },
)

const model = defineModel<string>({ default: '' })
</script>

<template>
  <textarea
    v-model="model"
    class="fm-control"
    style="resize: vertical"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
  ></textarea>
</template>
