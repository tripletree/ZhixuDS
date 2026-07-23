Hairline BI table: header is 10px uppercase 0.22em-tracked bone-dim over a `--border-panel` rule; body rows use `--border-hairline` rules and tint bone 3% on hover. Mark numeral columns `strong` and right-align them; compose Tag/Progress/Sparkline via `cell-<key>` scoped slots for richer cells.

```vue
<DataTable dense :columns="[
  { key: 'name', label: '材料 · Material' },
  { key: 'index', label: '机会指数', align: 'right', strong: true },
  { key: 'trend', label: '趋势', align: 'right' },
]" :rows="[
  { name: 'Lyocell', index: 86, trend: '↑ +12%' },
  { name: 'Recycled Nylon', index: 82, trend: '↑ +8%' },
]">
  <template #cell-trend="{ value }"><Tag tone="azure" size="sm">{{ value }}</Tag></template>
</DataTable>
```

Material names in English; headers can be bilingual with a middot (材料 · Material). Numbers carry the story — keep them bone/500, everything else bone-soft.
