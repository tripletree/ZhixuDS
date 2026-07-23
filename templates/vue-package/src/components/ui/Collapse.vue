<script setup lang="ts">
/** Collapsible filter group — bone title row, rotating chevron, calm grid-rows height animation. */
import { computed, ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    title?: string
    count?: number | string
    defaultOpen?: boolean
    /** Controlled open state; omit (undefined) for uncontrolled */
    open?: boolean
  }>(),
  { defaultOpen: true, open: undefined },
)

const emit = defineEmits<{ toggle: [open: boolean] }>()

const inner = ref(props.defaultOpen)
const controlled = computed(() => props.open !== undefined)
const isOpen = computed(() => (controlled.value ? props.open! : inner.value))

function toggle() {
  const next = !isOpen.value
  if (!controlled.value) inner.value = next
  emit('toggle', next)
}
</script>

<template>
  <div>
    <button
      type="button"
      :aria-expanded="isOpen"
      style="display: flex; width: 100%; align-items: center; gap: 8px; padding: 10px 0; border: none; background: transparent; cursor: pointer; text-align: left; font-family: var(--font-sans)"
      @click="toggle"
    >
      <span style="flex: 1; font-size: 14px; font-weight: 500; color: var(--color-bone)">{{ title }}</span>
      <span v-if="count != null" style="font-size: 11px; color: var(--color-mist)">{{ count }}</span>
      <span
        :style="{
          display: 'inline-flex',
          color: 'var(--color-mist)',
          transform: isOpen ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s var(--ease-calm)',
        }"
      >
        <ChevronDown :size="14" :stroke-width="1.75" />
      </span>
    </button>
    <div
      :style="{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.3s var(--ease-calm)',
      }"
    >
      <div style="overflow: hidden">
        <div style="padding-bottom: 12px"><slot /></div>
      </div>
    </div>
  </div>
</template>
