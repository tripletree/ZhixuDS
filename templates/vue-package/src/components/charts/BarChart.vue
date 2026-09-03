<script setup lang="ts">
/**
 * Vertical bar chart preset — the BI "分布" card body.
 * Flat-topped azure bars, hairline horizontal grid, no vertical axis line,
 * dashed crosshair + `.fm-float` tooltip on hover. Multi-series stacks
 * side-by-side and takes the categorical palette in order.
 */
import { computed } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'
import Chart from './Chart.vue'
import ChartLegend from './ChartLegend.vue'
import { formatCompact, paletteVar, tooltipBase, tooltipRow, tooltipTitle, type ChartTokens } from './theme'

export interface BarSeries {
  name: string
  data: number[]
}

const props = withDefaults(
  defineProps<{
    categories: string[]
    series: BarSeries[]
    height?: number | string
    /** Formats values in tooltips; axis ticks always use compact notation */
    valueFormatter?: (v: number) => string
    /** Hide the legend row (single-series charts often don't need one) */
    legend?: boolean
    /** Max bar thickness in px; bars shrink to fit but never grow past this */
    maxBarWidth?: number
  }>(),
  { height: 260, legend: true, maxBarWidth: 56, valueFormatter: (v: number) => `${v}` },
)

const hidden = defineModel<string[]>('hidden', { default: () => [] })

const legendItems = computed(() =>
  props.series.map((s, i) => ({ name: s.name, color: paletteVar(i) })),
)

// Reactive reads stay in the computed body (see PieChart for why); the closure
// only applies theme tokens.
const option = computed(() => {
  const hiddenSet = new Set(hidden.value)
  const shown = props.series
    .map((s, i) => ({ ...s, colorIndex: i }))
    .filter((s) => !hiddenSet.has(s.name))
  const { categories, maxBarWidth, valueFormatter } = props

  return (t: ChartTokens): EChartsCoreOption => ({
    color: t.palette,
    grid: { left: 8, right: 8, top: 12, bottom: 8, containLabel: true },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: t.axis } },
      axisTick: { show: false },
      axisLabel: { color: t.textDim, fontFamily: t.fontFamily, fontSize: 12, margin: 12 },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: t.grid } },
      axisLabel: {
        color: t.textDim,
        fontFamily: t.fontFamily,
        fontSize: 12,
        formatter: (v: number) => formatCompact(v),
      },
    },
    tooltip: {
      ...tooltipBase(t),
      trigger: 'axis',
      axisPointer: { type: 'line', lineStyle: { color: t.textDim, type: 'dashed', width: 1 } },
      formatter: (params: unknown) => {
        const rows = params as Array<{ seriesName: string; value: number; color: string; axisValue: string }>
        if (!rows?.length) return ''
        return (
          tooltipTitle(rows[0].axisValue, t) +
          rows.map((r) => tooltipRow(r.color, r.seriesName, valueFormatter(r.value), t)).join('')
        )
      },
    },
    series: shown.map((s) => {
      const color = t.palette[s.colorIndex % t.palette.length]
      return {
        name: s.name,
        type: 'bar',
        data: s.data,
        barMaxWidth: maxBarWidth,
        itemStyle: { color, borderRadius: 0 },
        emphasis: { itemStyle: { color, opacity: 0.85 } },
      }
    }),
  })
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <ChartLegend v-if="legend" v-model="hidden" :items="legendItems" />
    <Chart :option="option" :height="height" />
  </div>
</template>
