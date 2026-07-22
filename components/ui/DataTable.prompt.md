Hairline BI table: header is 10px uppercase 0.22em-tracked bone-dim over a `--border-panel` rule; body rows use `--border-hairline` rules and tint bone 3% on hover. Mark numeral columns `strong` and right-align them; compose Tag/Progress/Sparkline via `render` for richer cells.

```jsx
<DataTable dense columns={[
  { key: 'name', label: '材料 · Material' },
  { key: 'index', label: '机会指数', align: 'right', strong: true },
  { key: 'trend', label: '趋势', align: 'right', render: v => <Tag tone="azure" size="sm">{v}</Tag> },
]} rows={[
  { name: 'Lyocell', index: 86, trend: '↑ +12%' },
  { name: 'Recycled Nylon', index: 82, trend: '↑ +8%' },
]} />
```

Material names in English; headers can be bilingual with a middot (材料 · Material). Numbers carry the story — keep them bone/500, everything else bone-soft.
