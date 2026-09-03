<script setup lang="ts">
/**
 * Absolute date picker — .fm-control trigger opening a `.fm-float` calendar (Popover).
 * Monday-first grid, azure selected day, hairline azure ring on today, 今天 / 清除 footer.
 * `v-model` is an ISO `YYYY-MM-DD` string (or undefined). Library-free; local time.
 * Keyboard inside the grid: ←→↑↓ move a day/week, PageUp/PageDown a month, Home/End week edges, Enter selects.
 */
import { computed, nextTick, ref, watch } from 'vue'
import { Calendar, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X } from 'lucide-vue-next'
import Popover from './Popover.vue'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
    /** Rouge border + focus ring + aria-invalid; pair with Field's `error` */
    invalid?: boolean
    /** Inclusive bounds, `YYYY-MM-DD` */
    min?: string
    max?: string
    /** Show the × clear affordance in the trigger when a value is set */
    clearable?: boolean
    /** Custom trigger label; receives the ISO value */
    format?: (iso: string) => string
  }>(),
  { placeholder: '选择日期', disabled: false, invalid: false, clearable: true },
)

const model = defineModel<string | undefined>()

/* ── date helpers ────────────────────────────────────────────── */
const pad = (n: number) => String(n).padStart(2, '0')
const toISO = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
function fromISO(s?: string): Date | undefined {
  if (!s) return undefined
  const [y, m, d] = s.split('-').map(Number)
  if (!y || !m || !d) return undefined
  return new Date(y, m - 1, d)
}
const todayISO = toISO(new Date())

const defaultFormat = (iso: string) => {
  const d = fromISO(iso)
  return d ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日` : iso
}
const label = computed(() => (model.value ? (props.format ?? defaultFormat)(model.value) : ''))

function inRange(iso: string) {
  if (props.min && iso < props.min) return false
  if (props.max && iso > props.max) return false
  return true
}

/* ── view state ─────────────────────────────────────────────── */
const open = ref(false)
const view = ref(startOfMonth(fromISO(model.value) ?? new Date()))
const focusISO = ref(model.value ?? todayISO)
const gridEl = ref<HTMLElement | null>(null)

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}
watch(open, (v) => {
  if (v) {
    view.value = startOfMonth(fromISO(model.value) ?? new Date())
    focusISO.value = model.value ?? todayISO
  }
})
watch(
  () => props.disabled,
  (v) => {
    if (v) open.value = false
  },
)

const monthTitle = computed(() => `${view.value.getFullYear()}年${view.value.getMonth() + 1}月`)
const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日']

interface Cell {
  iso: string
  day: number
  outside: boolean
  disabled: boolean
}

const cells = computed<Cell[]>(() => {
  const first = view.value
  // Monday-first offset: JS getDay() is 0=Sun … 6=Sat
  const lead = (first.getDay() + 6) % 7
  const start = new Date(first.getFullYear(), first.getMonth(), 1 - lead)
  const out: Cell[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    const iso = toISO(d)
    out.push({
      iso,
      day: d.getDate(),
      outside: d.getMonth() !== first.getMonth(),
      disabled: !inRange(iso),
    })
  }
  return out
})

function shiftMonth(n: number) {
  view.value = new Date(view.value.getFullYear(), view.value.getMonth() + n, 1)
}
function shiftYear(n: number) {
  view.value = new Date(view.value.getFullYear() + n, view.value.getMonth(), 1)
}

function commit(iso: string) {
  if (!inRange(iso)) return
  model.value = iso
  open.value = false
}
function clear(e?: Event) {
  e?.stopPropagation()
  model.value = undefined
}
function pickToday() {
  commit(todayISO)
}

/* ── roving focus inside the grid ───────────────────────────── */
async function moveFocus(days: number, months = 0) {
  const d = fromISO(focusISO.value) ?? new Date()
  const next = new Date(d.getFullYear(), d.getMonth() + months, d.getDate() + days)
  focusISO.value = toISO(next)
  if (next.getMonth() !== view.value.getMonth() || next.getFullYear() !== view.value.getFullYear()) {
    view.value = startOfMonth(next)
  }
  await nextTick()
  gridEl.value?.querySelector<HTMLElement>(`[data-iso="${focusISO.value}"]`)?.focus()
}
function onGridKey(e: KeyboardEvent) {
  const map: Record<string, [number, number]> = {
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    ArrowUp: [-7, 0],
    ArrowDown: [7, 0],
    PageUp: [0, -1],
    PageDown: [0, 1],
  }
  if (map[e.key]) {
    e.preventDefault()
    const [d, m] = map[e.key]!
    void moveFocus(d, m)
  } else if (e.key === 'Home' || e.key === 'End') {
    e.preventDefault()
    const d = fromISO(focusISO.value) ?? new Date()
    const dow = (d.getDay() + 6) % 7
    void moveFocus(e.key === 'Home' ? -dow : 6 - dow)
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    commit(focusISO.value)
  }
}

function cellStyle(c: Cell) {
  const selected = c.iso === model.value
  const today = c.iso === todayISO
  return {
    width: '32px',
    height: '32px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    fontSize: '13px',
    fontVariantNumeric: 'tabular-nums',
    cursor: c.disabled ? 'not-allowed' : 'pointer',
    background: selected ? 'var(--color-azure)' : 'transparent',
    color: selected
      ? 'var(--color-ink-950)'
      : today
        ? 'var(--color-azure-bright)'
        : c.outside
          ? 'var(--color-mist-dark)'
          : 'var(--color-bone-soft)',
    boxShadow: !selected && today ? 'inset 0 0 0 1px color-mix(in srgb, var(--color-azure) 40%, transparent)' : 'none',
    opacity: c.disabled ? 0.35 : 1,
    transition: 'background 0.15s var(--ease-calm), color 0.15s var(--ease-calm)',
  }
}

const navBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  border: 'none',
  background: 'transparent',
  color: 'var(--color-mist)',
  cursor: 'pointer',
}
const footBtn = {
  border: 'none',
  background: 'transparent',
  padding: '4px 8px',
  borderRadius: 'var(--radius-pill)',
  fontSize: '12px',
  letterSpacing: '0.02em',
  cursor: 'pointer',
}
</script>

<template>
  <Popover v-model:open="open" :width="288" :padding="12" block>
    <template #anchor>
      <button
        type="button"
        :class="invalid ? 'fm-control fm-control-error' : 'fm-control'"
        :disabled="disabled"
        :aria-invalid="invalid || undefined"
        aria-haspopup="dialog"
        :aria-expanded="open"
        :style="{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', cursor: disabled ? 'not-allowed' : 'pointer' }"
      >
        <span :style="{ flex: 1, color: model ? 'var(--color-bone)' : 'var(--color-mist)', fontVariantNumeric: 'tabular-nums' }">
          {{ model ? label : placeholder }}
        </span>
        <span
          v-if="clearable && model && !disabled"
          role="button"
          aria-label="清除日期"
          tabindex="-1"
          class="fm-date-clear"
          style="display: inline-flex; color: var(--color-mist); border-radius: 50%"
          @click="clear"
          @mousedown.prevent
        >
          <X :size="14" :stroke-width="1.75" />
        </span>
        <span v-else style="display: inline-flex; color: var(--color-mist)">
          <Calendar :size="14" :stroke-width="1.75" />
        </span>
      </button>
    </template>

    <!-- `.prevent`: every control in here is a `type="button"` with no default action, so this
         only cancels label activation — a wrapping Field (<label>) would otherwise re-dispatch
         the click to the trigger and reopen the calendar right after a date closes it. -->
    <div style="display: flex; flex-direction: column; gap: 8px; text-align: left" @click.prevent>
      <!-- month / year nav -->
      <div style="display: flex; align-items: center; gap: 2px">
        <button type="button" class="fm-date-nav" :style="navBtn" aria-label="上一年" @click="shiftYear(-1)">
          <ChevronsLeft :size="14" :stroke-width="1.75" />
        </button>
        <button type="button" class="fm-date-nav" :style="navBtn" aria-label="上个月" @click="shiftMonth(-1)">
          <ChevronLeft :size="14" :stroke-width="1.75" />
        </button>
        <span
          aria-live="polite"
          style="flex: 1; text-align: center; font-size: 13px; font-weight: 500; color: var(--color-bone); font-variant-numeric: tabular-nums"
        >
          {{ monthTitle }}
        </span>
        <button type="button" class="fm-date-nav" :style="navBtn" aria-label="下个月" @click="shiftMonth(1)">
          <ChevronRight :size="14" :stroke-width="1.75" />
        </button>
        <button type="button" class="fm-date-nav" :style="navBtn" aria-label="下一年" @click="shiftYear(1)">
          <ChevronsRight :size="14" :stroke-width="1.75" />
        </button>
      </div>

      <!-- weekday header -->
      <div style="display: grid; grid-template-columns: repeat(7, 32px); justify-content: space-between">
        <span
          v-for="w in WEEKDAYS"
          :key="w"
          style="text-align: center; font-size: 11px; letter-spacing: 0.04em; color: var(--color-mist)"
        >
          {{ w }}
        </span>
      </div>

      <!-- day grid -->
      <div
        ref="gridEl"
        role="grid"
        aria-label="日历"
        style="display: grid; grid-template-columns: repeat(7, 32px); justify-content: space-between; row-gap: 2px"
        @keydown="onGridKey"
      >
        <button
          v-for="c in cells"
          :key="c.iso"
          type="button"
          role="gridcell"
          class="fm-date-cell"
          :data-iso="c.iso"
          :tabindex="c.iso === focusISO ? 0 : -1"
          :aria-selected="c.iso === model"
          :aria-current="c.iso === todayISO ? 'date' : undefined"
          :aria-disabled="c.disabled || undefined"
          :data-selected="c.iso === model || undefined"
          :style="cellStyle(c)"
          @click="commit(c.iso)"
          @focus="focusISO = c.iso"
        >
          {{ c.day }}
        </button>
      </div>

      <!-- footer -->
      <div
        style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid var(--border-hairline)"
      >
        <button type="button" class="fm-date-foot" :style="{ ...footBtn, color: 'var(--color-azure-bright)' }" @click="pickToday">
          今天
        </button>
        <button
          type="button"
          class="fm-date-foot"
          :style="{ ...footBtn, color: 'var(--color-mist)' }"
          :disabled="!model"
          @click="clear(); open = false"
        >
          清除
        </button>
      </div>
    </div>
  </Popover>
</template>

<style scoped>
.fm-date-cell:not([data-selected]):not([aria-disabled]):hover,
.fm-date-nav:hover,
.fm-date-clear:hover {
  background: color-mix(in srgb, var(--color-azure) 10%, transparent);
  color: var(--color-azure-bright);
}
.fm-date-foot:hover:not(:disabled) {
  background: color-mix(in srgb, var(--color-azure) 10%, transparent);
}
.fm-date-foot:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.fm-date-cell:focus-visible,
.fm-date-nav:focus-visible,
.fm-date-foot:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent) !important;
}
</style>
