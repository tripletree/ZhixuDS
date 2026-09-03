<script setup lang="ts">
/**
 * Low-level ECharts host. Owns the instance lifecycle, resizes with its box,
 * and re-applies the option (with freshly read tokens) when the theme flips.
 *
 * `option` is a function of the current tokens so presets (BarChart, PieChart)
 * can colour axes and tooltips from the live CSS variables.
 *
 * Contract for callers: build `option` in a `computed` that reads all reactive
 * state (data, hidden series…) in its own body and returns a closure that only
 * applies `tokens`. The closure runs untracked inside this component, so any
 * reactive read placed inside it will never invalidate the computed.
 */
import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { use, init, type ECharts, type EChartsCoreOption } from 'echarts/core'
import { BarChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { readChartTokens, type ChartTokens } from './theme'

use([BarChart, PieChart, GridComponent, TooltipComponent, CanvasRenderer])

const props = withDefaults(
  defineProps<{
    option: (tokens: ChartTokens) => EChartsCoreOption
    height?: number | string
  }>(),
  { height: 280 },
)

const emit = defineEmits<{ ready: [chart: ECharts] }>()

const el = ref<HTMLDivElement>()
const chart = shallowRef<ECharts>()

function render() {
  if (!chart.value) return
  chart.value.setOption(props.option(readChartTokens()), { notMerge: true })
}

let ro: ResizeObserver | undefined
let mo: MutationObserver | undefined

onMounted(() => {
  if (!el.value) return
  chart.value = init(el.value, undefined, { renderer: 'canvas' })
  render()
  emit('ready', chart.value)

  ro = new ResizeObserver(() => chart.value?.resize())
  ro.observe(el.value)

  // Theme toggles swap the `light` class on <html>; tokens are re-read on the
  // next frame so the transition of CSS variables has settled.
  mo = new MutationObserver(() => requestAnimationFrame(render))
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

watch(() => props.option, render)

onBeforeUnmount(() => {
  ro?.disconnect()
  mo?.disconnect()
  chart.value?.dispose()
})

defineExpose({ chart })
</script>

<template>
  <div
    ref="el"
    :style="{ width: '100%', height: typeof height === 'number' ? `${height}px` : height }"
    role="img"
  />
</template>
