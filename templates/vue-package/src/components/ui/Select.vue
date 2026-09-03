<script setup lang="ts">
/**
 * Select — the familiar `<option>`-children API, rendered through Listbox so the
 * dropdown panel is the branded `.fm-float` pane (native <select> popups are
 * drawn by the browser and cannot be themed, which made them look different
 * from every other panel in the system).
 *
 *   <Select v-model="fmt">
 *     <option value="ppt">PPT 提案</option>
 *     <option value="report" data-hint="Report">数据报告</option>
 *   </Select>
 *
 * Reads `value`, text content and optional `data-hint` from each <option>.
 * Prefer Listbox directly when options come from data; use Select when you
 * want to author them inline in the template.
 */
import { computed, Fragment, useSlots, type VNode } from 'vue'
import Listbox, { type ListboxOption } from './Listbox.vue'

defineProps<{
  disabled?: boolean
  /** Rouge border + focus ring + aria-invalid */
  invalid?: boolean
  placeholder?: string
}>()

const model = defineModel<string>({ default: '' })
const slots = useSlots()

function textOf(children: VNode['children']): string {
  if (typeof children === 'string') return children.trim()
  if (Array.isArray(children)) return children.map((c) => (typeof c === 'string' ? c : textOf((c as VNode).children))).join('').trim()
  return ''
}

function collect(nodes: VNode[] | undefined, out: ListboxOption[]) {
  for (const n of nodes ?? []) {
    if (n.type === Fragment || (typeof n.type === 'symbol' && Array.isArray(n.children))) {
      collect(n.children as VNode[], out)
    } else if (n.type === 'option') {
      const p = (n.props ?? {}) as Record<string, unknown>
      out.push({
        value: String(p.value ?? textOf(n.children)),
        label: textOf(n.children),
        hint: typeof p['data-hint'] === 'string' ? (p['data-hint'] as string) : undefined,
      })
    }
  }
}

const options = computed<ListboxOption[]>(() => {
  const out: ListboxOption[] = []
  collect(slots.default?.(), out)
  return out
})
</script>

<template>
  <Listbox v-model="model" :options="options" :disabled="disabled" :invalid="invalid" :placeholder="placeholder" />
</template>
