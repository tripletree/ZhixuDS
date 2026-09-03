<script setup lang="ts">
/**
 * Form field wrapper — label row (azure asterisk when required), control slot, mist hint line.
 * `error` shows a rouge validation message in place of the hint; pair with `invalid` on the control.
 *
 * `layout="stacked"` (default) puts the label above the control — long forms, dialogs.
 * `layout="inline"` puts the label to the left, right-aligned in a fixed `labelWidth` column,
 * so several inline Fields stacked in a filter panel share one clean label edge (dense BI filters).
 * Omit `label` entirely for toolbar controls whose value is self-describing.
 *
 * NOTE: the wrapper is a <label>, so the browser re-dispatches any click inside it to the
 * slot's labelable control. That forwarding is the click's *default action*, so panel content
 * that dismisses itself must call preventDefault (stopPropagation is not enough) — see the
 * option rows in Listbox and the calendar body in DatePicker.
 */
withDefaults(
  defineProps<{
    label?: string
    hint?: string
    /** Rouge validation message — replaces `hint` while set */
    error?: string
    required?: boolean
    layout?: 'stacked' | 'inline'
    /** Inline only — width of the label column so stacked rows align. Default 72px. */
    labelWidth?: number | string
  }>(),
  { layout: 'stacked', labelWidth: 72 },
)
</script>

<template>
  <label
    v-if="layout === 'inline'"
    style="display: grid; grid-template-columns: auto minmax(0, 1fr); column-gap: 12px; align-items: center"
  >
    <span
      v-if="label"
      :style="{
        width: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        gap: '4px',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.02em',
        color: 'var(--color-bone-soft)',
        whiteSpace: 'nowrap',
      }"
    >
      {{ label }}
      <span v-if="required" style="color: var(--color-azure)">*</span>
    </span>
    <span v-else aria-hidden="true" />
    <span style="min-width: 0"><slot /></span>
    <span
      v-if="error"
      role="alert"
      style="grid-column: 2; font-size: 11px; letter-spacing: 0.02em; margin-top: 4px; color: color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))"
    >{{ error }}</span>
    <span
      v-else-if="hint"
      style="grid-column: 2; font-size: 11px; letter-spacing: 0.02em; margin-top: 4px; color: var(--color-mist)"
    >{{ hint }}</span>
  </label>

  <label v-else style="display: flex; flex-direction: column; gap: 8px">
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
