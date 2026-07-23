<script setup lang="ts">
/** Form field wrapper — label row (azure asterisk when required), control slot, mist hint line. */
defineProps<{
  label?: string
  hint?: string
  required?: boolean
}>()
</script>

<template>
  <label style="display: flex; flex-direction: column; gap: 8px">
    <span
      v-if="label"
      style="display: flex; align-items: baseline; gap: 6px; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; color: var(--color-bone-soft)"
    >
      {{ label }}
      <span v-if="required" style="color: var(--color-azure)">*</span>
    </span>
    <slot />
    <span v-if="hint" style="font-size: 11px; letter-spacing: 0.02em; color: var(--color-mist)">{{ hint }}</span>
  </label>
</template>
