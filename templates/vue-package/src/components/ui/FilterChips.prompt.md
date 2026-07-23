Interactive chip group for category filters — the clickable upgrade of `Tag`. Pills only: idle chips are hairline bone/12 on bone 3%, hover tints the border azure, selected chips go azure 12% fill + azure-bright text. Single-select `v-model` is a string; with `multiple` it is a string array.

```vue
<FilterChips v-model="top" title="上装" :options="[
  { value: 'tee', label: 'T恤' }, { value: 'shirt', label: '衬衫' },
  { value: 'knit', label: '毛衫' }, { value: 'hoodie', label: '卫衣' },
  { value: 'jacket', label: '夹克' }, { value: 'polo', label: 'Polo衫' },
]" />
<FilterChips v-model="cats" multiple ... />
```

Stack several titled groups (上装 / 下装 / 裙装) for a category panel — often inside a `Popover`. Chip labels are 2–4 character noun phrases. Per-option `disabled: true` dims a chip to 0.45 opacity and blocks selection (e.g. categories outside the current plan).
