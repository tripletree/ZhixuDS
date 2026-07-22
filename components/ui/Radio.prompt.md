Radio for single-choice presets (time ranges, sort orders): azure ring + dot when selected, azure focus ring, 13px bone-soft labels.

```jsx
<RadioGroup value={period} onChange={setPeriod} options={[
  { value: 'week', label: '前一周' },
  { value: 'month', label: '前一月' },
  { value: 'year', label: '前一年' },
]} />
<RadioGroup direction="row" … />   // inline presets in a toolbar
```

Use Radio for 2–5 mutually exclusive presets; more options or long labels → `Listbox`. Preset labels are short noun phrases (前一月, 按热度).
