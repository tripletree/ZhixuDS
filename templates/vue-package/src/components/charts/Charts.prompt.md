# Charts — ChartCard · BarChart · PieChart · ChartLegend · Chart

ECharts presets styled from the live design tokens. `echarts` is an optional peer dependency: install it only in apps that render charts (`npm i echarts`). Importing from the package root without echarts installed is fine as long as no chart component is mounted.

## Composition

```vue
<ChartCard title="场景分布" :filter-count="2" :actions="[{ key: 'export', label: '导出 CSV' }]">
  <BarChart :categories="['生活/休闲', '训练']" :series="[{ name: 'COUNT(*)', data: [79, 2] }]" />
</ChartCard>

<ChartCard title="织造类型分布" :filter-count="2">
  <PieChart :data="[{ name: '纬编', value: 52 }, { name: '机织', value: 41 }, { name: '经编', value: 7 }]" />
</ChartCard>
```

`ChartCard` is the dashboard tile: Panel surface, 15px semibold title, filter-funnel + azure count badge (hidden at 0), `⋮` DropdownMenu. Presets go in the default slot. Use `empty` for the no-data state — never render an empty axis.

## Visual rules baked into the presets

- **Palette**: `--chart-1..6`, azure first. A single-series bar chart uses only azure; pies take colours by *original* data index so hiding a slice never recolours its neighbours.
- **Bars**: flat tops (`borderRadius: 0`), `barMaxWidth` 56, hairline horizontal grid, no y-axis line, x-axis labels in `bone-dim`. Hover shows a dashed crosshair and the `.fm-float` tooltip.
- **Pie**: 78% radius, outside labels in `bone-soft` on hairline leaders, emphasis is a 4px scale — no glow, no shadow. `innerRadius: 0.55` for a donut.
- **Tooltip**: bold title row, then one line per series — 8px swatch dot, name in `bone-soft`, value bold tabular right-aligned. Reads `--surface-float` / `--shadow-float` so it matches Popover and Listbox.
- **Legend**: rendered by `ChartLegend` in Vue, above the plot, right-aligned. 16×12 swatches with 3px radius, `全选` / `反选` pills, `‹ 1/2 ›` pager past `perPage` items. Hidden items fade to 40% and swatch turns `mist-dark`. Bind `v-model:hidden` on the preset if the page needs to know.
- **Theme flip**: every chart re-reads tokens on the `<html>` class change, so dark ↔ light recolours axes, tooltips and palette in the same frame as the rest of the UI.

## Escape hatch

`Chart` takes `option: (tokens) => EChartsOption` for anything not covered (lines, scatter, heatmaps). Register extra chart types via `use()` from `echarts/core` before mounting. Use `tooltipBase`, `tooltipRow`, `tooltipTitle`, `formatCompact` from `theme.ts` so custom charts keep the same chrome.

Word clouds (功能性分布) need the `echarts-wordcloud` plugin and are not bundled; if required, register it and drive it through `Chart` with `tokens.palette`.
