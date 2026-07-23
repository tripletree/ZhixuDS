<script setup lang="ts">
/** Pill pagination — 28px circles, current page lifts to bone 8% like the active tab. `v-model:page`. */
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    pageCount?: number
    siblings?: number
    showEnds?: boolean
  }>(),
  { pageCount: 1, siblings: 1, showEnds: true },
)

const page = defineModel<number>('page', { default: 1 })
const hovered = ref<string | null>(null)

function go(p: number) {
  if (p >= 1 && p <= props.pageCount && p !== page.value) page.value = p
}

const pages = computed<(number | string)[]>(() => {
  const out: (number | string)[] = [1]
  const lo = Math.max(2, page.value - props.siblings)
  const hi = Math.min(props.pageCount - 1, page.value + props.siblings)
  if (lo > 2) out.push('…l')
  for (let p = lo; p <= hi; p++) out.push(p)
  if (hi < props.pageCount - 1) out.push('…r')
  if (props.pageCount > 1) out.push(props.pageCount)
  return out
})

function btnStyle(key: string, active: boolean, disabled: boolean) {
  const hover = hovered.value === key
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '28px',
    height: '28px',
    padding: '0 6px',
    borderRadius: '999px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
    border: `1px solid ${
      active
        ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)'
        : hover && !disabled
          ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)'
          : 'transparent'
    }`,
    background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
    color: active ? 'var(--color-bone)' : hover && !disabled ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
    opacity: disabled ? 0.4 : 1,
    transition: 'all 0.2s var(--ease-calm)',
  }
}
</script>

<template>
  <nav aria-label="分页" style="display: inline-flex; align-items: center; gap: 4px">
    <button
      v-if="showEnds"
      type="button"
      aria-label="第一页"
      :disabled="page <= 1"
      :style="btnStyle('first', false, page <= 1)"
      @click="go(1)"
      @mouseenter="hovered = 'first'"
      @mouseleave="hovered = null"
    ><ChevronsLeft :size="13" :stroke-width="1.75" /></button>
    <button
      type="button"
      aria-label="上一页"
      :disabled="page <= 1"
      :style="btnStyle('prev', false, page <= 1)"
      @click="go(page - 1)"
      @mouseenter="hovered = 'prev'"
      @mouseleave="hovered = null"
    ><ChevronLeft :size="13" :stroke-width="1.75" /></button>
    <template v-for="p in pages" :key="p">
      <span
        v-if="typeof p === 'string'"
        style="min-width: 20px; text-align: center; font-size: 12px; color: var(--color-mist)"
      >…</span>
      <button
        v-else
        type="button"
        :aria-label="`第 ${p} 页`"
        :aria-current="p === page ? 'page' : undefined"
        :style="btnStyle(`p${p}`, p === page, false)"
        @click="go(p)"
        @mouseenter="hovered = `p${p}`"
        @mouseleave="hovered = null"
      >{{ p }}</button>
    </template>
    <button
      type="button"
      aria-label="下一页"
      :disabled="page >= pageCount"
      :style="btnStyle('next', false, page >= pageCount)"
      @click="go(page + 1)"
      @mouseenter="hovered = 'next'"
      @mouseleave="hovered = null"
    ><ChevronRight :size="13" :stroke-width="1.75" /></button>
    <button
      v-if="showEnds"
      type="button"
      aria-label="最后一页"
      :disabled="page >= pageCount"
      :style="btnStyle('last', false, page >= pageCount)"
      @click="go(pageCount)"
      @mouseenter="hovered = 'last'"
      @mouseleave="hovered = null"
    ><ChevronsRight :size="13" :stroke-width="1.75" /></button>
  </nav>
</template>
