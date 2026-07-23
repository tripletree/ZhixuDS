<script setup lang="ts">
/** Multi-line input on the chat-input surface (.fm-control), vertical resize only. */
withDefaults(
  defineProps<{
    rows?: number
    placeholder?: string
    disabled?: boolean
    /** Rouge border + focus ring (.fm-control-error) + aria-invalid */
    invalid?: boolean
  }>(),
  { rows: 4 },
)

const model = defineModel<string>({ default: '' })
</script>

<template>
  <textarea
    v-model="model"
    :class="invalid ? 'fm-control fm-control-error' : 'fm-control'"
    style="resize: vertical"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="invalid || undefined"
  ></textarea>
</template>
