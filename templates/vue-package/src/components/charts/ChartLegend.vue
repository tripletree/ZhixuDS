<script setup lang="ts">
/**
 * Interactive legend rendered in Vue (not by ECharts) so the 全选 / 反选 pills
 * and pagination are real, styleable controls. `v-model` is the set of hidden
 * item names; the chart preset filters its data against it.
 */
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

export interface LegendItem {
  name: string
  color: string
}

const props = withDefaults(
  defineProps<{
    items: LegendItem[]
    /** Items per page; the pager appears only when exceeded */
    perPage?: number
  }>(),
  { perPage: 8 },
)

const hidden = defineModel<string[]>({ default: () => [] })

const page = ref(0)
const pages = computed(() => Math.max(1, Math.ceil(props.items.length / props.perPage)))
const visible = computed(() =>
  props.items.slice(page.value * props.perPage, (page.value + 1) * props.perPage),
)

const isHidden = (name: string) => hidden.value.includes(name)
function toggle(name: string) {
  hidden.value = isHidden(name) ? hidden.value.filter((n) => n !== name) : [...hidden.value, name]
}
const selectAll = () => (hidden.value = [])
const invert = () =>
  (hidden.value = props.items.map((i) => i.name).filter((n) => !isHidden(n)))
</script>

<template>
  <div class="flex flex-wrap items-center justify-end gap-x-3 gap-y-1.5 text-xs">
    <button
      v-for="item in visible"
      :key="item.name"
      type="button"
      class="flex items-center gap-1.5 transition-opacity duration-150"
      :class="isHidden(item.name) ? 'opacity-40' : 'opacity-100'"
      :aria-pressed="!isHidden(item.name)"
      @click="toggle(item.name)"
    >
      <span
        class="inline-block h-3 w-4 rounded-[3px]"
        :style="{ background: isHidden(item.name) ? 'var(--color-mist-dark)' : item.color }"
      />
      <span class="text-bone-soft">{{ item.name }}</span>
    </button>

    <div v-if="pages > 1" class="flex items-center gap-0.5 text-bone-dim">
      <button
        type="button"
        class="rounded p-0.5 hover:text-bone disabled:opacity-30"
        :disabled="page === 0"
        aria-label="上一页"
        @click="page--"
      ><ChevronLeft class="size-3.5" :stroke-width="1.75" /></button>
      <span class="tabular-nums">{{ page + 1 }}/{{ pages }}</span>
      <button
        type="button"
        class="rounded p-0.5 hover:text-bone disabled:opacity-30"
        :disabled="page === pages - 1"
        aria-label="下一页"
        @click="page++"
      ><ChevronRight class="size-3.5" :stroke-width="1.75" /></button>
    </div>

    <div class="flex items-center gap-1.5">
      <button type="button" class="fm-legend-pill" @click="selectAll">全选</button>
      <button type="button" class="fm-legend-pill" @click="invert">反选</button>
    </div>
  </div>
</template>

<style scoped>
.fm-legend-pill {
  padding: 2px 9px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-panel);
  color: var(--color-bone-soft);
  font-size: 11px;
  line-height: 1.5;
  transition:
    color 150ms var(--ease-calm),
    border-color 150ms var(--ease-calm);
}
.fm-legend-pill:hover {
  color: var(--color-bone);
  border-color: var(--color-mist);
}
</style>
