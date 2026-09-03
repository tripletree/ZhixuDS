<script setup lang="ts">
/**
 * Pie / donut preset — the BI "占比" card body. Categorical palette in data
 * order, outside labels on short leader lines, share % in the tooltip.
 * The legend lives above the plot and doubles as the show/hide control.
 */
import { computed } from 'vue'
import type { EChartsCoreOption } from 'echarts/core'
import Chart from './Chart.vue'
import ChartLegend from './ChartLegend.vue'
import { paletteVar, tooltipBase, tooltipRow, tooltipTitle, type ChartTokens } from './theme'

export interface PieDatum {
  name: string
  value: number
}

const props = withDefaults(
  defineProps<{
    data: PieDatum[]
    height?: number | string
    /** 0 = solid pie; e.g. 0.55 = donut with a 55% hole */
    innerRadius?: number
    /** Show category names outside the slices */
    labels?: boolean
    legend?: boolean
    legendPerPage?: number
    valueFormatter?: (v: number) => string
  }>(),
  { height: 280, innerRadius: 0, labels: true, legend: true, legendPerPage: 8, valueFormatter: (v: number) => `${v}` },
)

const hidden = defineModel<string[]>('hidden', { default: () => [] })

const legendItems = computed(() =>
  props.data.map((d, i) => ({ name: d.name, color: paletteVar(i) })),
)

// All reactive reads (props, hidden) happen in the computed body; the returned
// closure only applies tokens. Reading `hidden` inside the closure would run
// untracked in Chart's render and the computed would never invalidate.
const option = computed(() => {
  const hiddenSet = new Set(hidden.value)
  // Colour is assigned by original index so hiding a slice never recolours the rest
  const shown = props.data
    .map((d, i) => ({ ...d, colorIndex: i }))
    .filter((d) => !hiddenSet.has(d.name))
  const total = shown.reduce((a, d) => a + d.value, 0) || 1
  const { innerRadius, labels, valueFormatter } = props

  return (t: ChartTokens): EChartsCoreOption => ({
    tooltip: {
      ...tooltipBase(t),
      trigger: 'item',
      formatter: (p: unknown) => {
        const { name, value, color } = p as { name: string; value: number; color: string }
        const pct = ((value / total) * 100).toFixed(2)
        return tooltipTitle(name, t) + tooltipRow(color, `${pct}%`, valueFormatter(value), t)
      },
    },
    series: [
      {
        type: 'pie',
        radius: [`${Math.round(innerRadius * 78)}%`, '78%'],
        center: ['50%', '52%'],
        data: shown.map((d) => ({
          name: d.name,
          value: d.value,
          itemStyle: { color: t.palette[d.colorIndex % t.palette.length] },
        })),
        itemStyle: { borderWidth: 0 },
        label: {
          show: labels,
          color: t.textSoft,
          fontFamily: t.fontFamily,
          fontSize: 12,
        },
        labelLine: { length: 10, length2: 8, lineStyle: { color: t.axis } },
        emphasis: {
          scale: true,
          scaleSize: 4,
          itemStyle: { shadowBlur: 0 },
          label: { fontWeight: 600, color: t.text },
        },
      },
    ],
  })
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <ChartLegend v-if="legend" v-model="hidden" :items="legendItems" :per-page="legendPerPage" />
    <Chart :option="option" :height="height" />
  </div>
</template>
