<script setup lang="ts">
/**
 * Custom dropdown — .fm-control trigger + fully branded panel (native <select> popups can't be themed).
 * Keyboard: ↑↓ move, Enter/Space select, Esc closes, Home/End jump.
 */
import { computed, onBeforeUnmount, ref, useId, watch } from 'vue'
import { Check, ChevronDown } from 'lucide-vue-next'

export interface ListboxOption {
  value: string
  label: string
  hint?: string
}

const props = withDefaults(
  defineProps<{
    options?: ListboxOption[]
    placeholder?: string
  }>(),
  { options: () => [], placeholder: '请选择' },
)

const model = defineModel<string>()

const open = ref(false)
const active = ref(-1)
const rootEl = ref<HTMLElement | null>(null)
const listEl = ref<HTMLElement | null>(null)
const id = useId()

const selectedIndex = computed(() => props.options.findIndex((o) => o.value === model.value))
const selected = computed(() => props.options[selectedIndex.value])

function onDocDown(e: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(e.target as Node)) open.value = false
}
watch(open, (v) => {
  if (v) document.addEventListener('mousedown', onDocDown)
  else document.removeEventListener('mousedown', onDocDown)
})
onBeforeUnmount(() => document.removeEventListener('mousedown', onDocDown))

watch([open, active], () => {
  if (open.value && active.value >= 0 && listEl.value) {
    listEl.value.children[active.value]?.scrollIntoView({ block: 'nearest' })
  }
})

function openList() {
  open.value = true
  active.value = selectedIndex.value >= 0 ? selectedIndex.value : 0
}
function commit(i: number) {
  const opt = props.options[i]
  if (!opt) return
  model.value = opt.value
  open.value = false
}
function onKeyDown(e: KeyboardEvent) {
  if (!open.value) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList()
    }
    return
  }
  if (e.key === 'Escape') {
    e.preventDefault()
    open.value = false
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    active.value = Math.min(props.options.length - 1, active.value + 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    active.value = Math.max(0, active.value - 1)
  } else if (e.key === 'Home') {
    e.preventDefault()
    active.value = 0
  } else if (e.key === 'End') {
    e.preventDefault()
    active.value = props.options.length - 1
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    commit(active.value)
  } else if (e.key === 'Tab') {
    open.value = false
  }
}
</script>

<template>
  <span ref="rootEl" style="position: relative; display: block" @keydown="onKeyDown">
    <button
      type="button"
      class="fm-control"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-activedescendant="open && active >= 0 ? `${id}-opt-${active}` : undefined"
      style="display: flex; align-items: center; gap: 8px; text-align: left; cursor: pointer"
      @click="open ? (open = false) : openList()"
    >
      <span :style="{ flex: 1, color: selected ? 'var(--color-bone)' : 'var(--color-mist)' }">
        {{ selected ? selected.label : placeholder }}
      </span>
      <span
        :style="{
          display: 'inline-flex',
          color: 'var(--color-mist)',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s var(--ease-calm)',
        }"
      >
        <ChevronDown :size="14" :stroke-width="1.75" />
      </span>
    </button>
    <ul
      v-if="open"
      ref="listEl"
      role="listbox"
      class="fm-pop-in"
      style="position: absolute; left: 0; right: 0; top: calc(100% + 6px); z-index: 50; margin: 0; padding: 6px; list-style: none; max-height: 240px; overflow-y: auto; border-radius: var(--radius-panel); border: 1px solid color-mix(in srgb, var(--color-bone) 12%, transparent); background: var(--surface-float); backdrop-filter: blur(12px); box-shadow: var(--shadow-float)"
    >
      <li
        v-for="(opt, i) in options"
        :id="`${id}-opt-${i}`"
        :key="opt.value"
        role="option"
        :aria-selected="opt.value === model"
        :style="{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 10px',
          borderRadius: '8px',
          fontSize: '13px',
          lineHeight: 1.5,
          cursor: 'pointer',
          background: i === active ? 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'transparent',
          color: i === active || opt.value === model ? 'var(--color-bone)' : 'var(--color-bone-soft)',
        }"
        @mouseenter="active = i"
        @mousedown.prevent
        @click="commit(i)"
      >
        <span style="flex: 1">{{ opt.label }}</span>
        <span v-if="opt.hint" style="font-size: 11px; color: var(--color-mist)">{{ opt.hint }}</span>
        <span v-if="opt.value === model" style="display: inline-flex; color: var(--color-azure-bright)">
          <Check :size="14" :stroke-width="1.75" />
        </span>
      </li>
    </ul>
  </span>
</template>
