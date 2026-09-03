<script setup lang="ts">
/**
 * Dashboard chart container — Panel surface with the BI card header:
 * title on the left; active-filter count and an action menu on the right.
 * Put a BarChart / PieChart / Stat in the default slot.
 */
import { Filter, MoreVertical } from 'lucide-vue-next'
import Panel from '../ui/Panel.vue'
import DropdownMenu, { type MenuItem } from '../ui/DropdownMenu.vue'

withDefaults(
  defineProps<{
    title: string
    /** Number of filters applied to this chart; hidden when 0 */
    filterCount?: number
    /** Items for the ⋮ menu; omit to hide the button */
    actions?: MenuItem[]
    /** Empty-state text shown when `empty` is true */
    empty?: boolean
    emptyText?: string
  }>(),
  { filterCount: 0, emptyText: '当前筛选范围内暂无数据' },
)

const emit = defineEmits<{ action: [key: string]; filter: [] }>()
</script>

<template>
  <Panel :padding="0">
    <header class="flex items-center justify-between gap-4 px-6 pt-5 pb-2">
      <h3 class="text-[15px] font-semibold text-bone">{{ title }}</h3>
      <div class="flex items-center gap-1 text-bone-dim">
        <button
          v-if="filterCount"
          type="button"
          class="flex items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors hover:text-bone"
          :aria-label="`已应用 ${filterCount} 个筛选条件`"
          @click="emit('filter')"
        >
          <Filter class="size-4" :stroke-width="1.75" />
          <span
            class="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-azure px-1 text-[10px] font-semibold tabular-nums text-ink-950"
          >{{ filterCount }}</span>
        </button>
        <DropdownMenu v-if="actions?.length" :items="actions" @select="emit('action', $event)">
          <template #anchor>
            <button
              type="button"
              class="rounded-md p-1 transition-colors hover:text-bone"
              aria-label="更多操作"
            ><MoreVertical class="size-4" :stroke-width="1.75" /></button>
          </template>
        </DropdownMenu>
      </div>
    </header>

    <div class="px-6 pb-5">
      <div
        v-if="empty"
        class="flex h-48 items-center justify-center text-sm text-bone-dim"
      >{{ emptyText }}</div>
      <slot v-else />
    </div>
  </Panel>
</template>
