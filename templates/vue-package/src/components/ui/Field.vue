<script setup lang="ts">
/**
 * Form field wrapper — label row (azure asterisk when required), control slot, mist hint line.
 * `error` shows a rouge validation message in place of the hint; pair with `invalid` on the control.
 */
defineProps<{
  label?: string
  hint?: string
  /** Rouge validation message — replaces `hint` while set */
  error?: string
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
    <span
      v-if="error"
      role="alert"
      style="font-size: 11px; letter-spacing: 0.02em; color: color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))"
    >{{ error }}</span>
    <span v-else-if="hint" style="font-size: 11px; letter-spacing: 0.02em; color: var(--color-mist)">{{ hint }}</span>
  </label>
</template>
