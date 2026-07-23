<script setup lang="ts">
/**
 * Hairline BI table — eyebrow-tracked header, hairline row rules, numerals emphasised via
 * column `strong` flag. Custom cells via scoped slots named `cell-<key>` ({ value, row, index }).
 */
import { computed, ref } from 'vue'

export interface DataColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
  strong?: boolean
}
export type DataRow = Record<string, unknown>

const props = withDefaults(
  defineProps<{
    columns?: DataColumn[]
    rows?: DataRow[]
    dense?: boolean
  }>(),
  { columns: () => [], rows: () => [], dense: false },
)

const hovered = ref<number | null>(null)
const pad = computed(() => (props.dense ? '8px 12px' : '11px 14px'))

function thStyle(col: DataColumn) {
  return {
    padding: pad.value,
    textAlign: col.align || ('left' as const),
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-bone-dim)',
    borderBottom: '1px solid var(--border-panel)',
    whiteSpace: 'nowrap' as const,
  }
}
function tdStyle(col: DataColumn) {
  return {
    padding: pad.value,
    textAlign: col.align || ('left' as const),
    fontSize: '12px',
    lineHeight: 1.5,
    color: col.strong ? 'var(--color-bone)' : 'var(--color-bone-soft)',
    fontWeight: col.strong ? 500 : 400,
    borderBottom: '1px solid var(--border-hairline)',
  }
}
</script>

<template>
  <table style="width: 100%; border-collapse: collapse; font-family: var(--font-sans)">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key" :style="thStyle(col)">{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, i) in rows"
        :key="i"
        :style="{
          background: hovered === i ? 'color-mix(in srgb, var(--color-bone) 3%, transparent)' : 'transparent',
          transition: 'background 0.3s var(--ease-calm)',
        }"
        @mouseenter="hovered = i"
        @mouseleave="hovered = null"
      >
        <td v-for="col in columns" :key="col.key" :style="tdStyle(col)">
          <slot :name="`cell-${col.key}`" :value="row[col.key]" :row="row" :index="i">
            {{ row[col.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
