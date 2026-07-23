<script setup lang="ts">
/**
 * Relative time-range editor — .fm-control trigger with calendar glyph opening a preset
 * panel (前一周/前一月/前一年 …) with a computed-range readout and 取消/应用 actions.
 */
import { computed, ref, watch } from 'vue'
import { Calendar } from 'lucide-vue-next'
import Popover from './Popover.vue'
import RadioGroup, { type RadioOption } from './RadioGroup.vue'
import Button from './Button.vue'

const props = withDefaults(
  defineProps<{
    presets?: RadioOption[]
    /** Readout under the presets — a string, or a function of the draft value */
    rangeText?: string | ((draft: string | undefined) => string | undefined)
    title?: string
    width?: number
    placeholder?: string
  }>(),
  { presets: () => [], title: '编辑时间范围', width: 300, placeholder: '选择时间范围' },
)

const model = defineModel<string>()

const open = ref(false)
const draft = ref(model.value)
watch(open, (v) => {
  if (v) draft.value = model.value
})

const current = computed(() => props.presets.find((p) => p.value === model.value))
const readout = computed(() =>
  typeof props.rangeText === 'function' ? props.rangeText(draft.value) : props.rangeText,
)

function apply() {
  model.value = draft.value
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open" :width="width">
    <template #anchor>
      <button
        type="button"
        class="fm-control"
        aria-haspopup="dialog"
        :aria-expanded="open"
        style="display: flex; align-items: center; gap: 8px; text-align: left; cursor: pointer"
      >
        <span :style="{ flex: 1, color: current ? 'var(--color-bone)' : 'var(--color-mist)' }">
          {{ current ? current.label : placeholder }}
        </span>
        <span style="display: inline-flex; color: var(--color-mist)"><Calendar :size="14" :stroke-width="1.75" /></span>
      </button>
    </template>
    <div style="display: flex; flex-direction: column; gap: 12px; text-align: left">
      <span style="font-size: 13px; font-weight: 500; color: var(--color-bone)">{{ title }}</span>
      <RadioGroup v-model="draft" :options="presets" />
      <span v-if="readout" style="font-size: 11px; letter-spacing: 0.02em; color: var(--color-mist)">{{ readout }}</span>
      <div style="display: flex; justify-content: flex-end; gap: 8px">
        <Button variant="ghost" size="sm" @click="open = false">取消</Button>
        <Button size="sm" @click="apply">应用</Button>
      </div>
    </div>
  </Popover>
</template>
