Absolute single-date picker: `.fm-control` trigger (value or mist placeholder + calendar glyph, × to clear) opening a 288px `.fm-float` calendar via Popover. Monday-first grid with 一…日 headers, 32px circular day cells — selected day is solid azure with ink-950 text, today gets an azure-bright numeral inside a hairline azure ring, out-of-month days are mist-dark, out-of-range days dim to 35%. ‹ › step months, « » step years; footer has an azure 今天 shortcut and a mist 清除.

`v-model` is an ISO `YYYY-MM-DD` string or `undefined` (never a Date object — keeps the value serialisable for query params and API calls). `min`/`max` are inclusive ISO bounds. `format` overrides the trigger label (default 2026年7月22日).

```vue
<script setup lang="ts">
import { ref } from 'vue'
const from = ref<string | undefined>('2026-07-01')
const to = ref<string | undefined>()
</script>
<template>
  <Field label="起始日期" required><DatePicker v-model="from" :max="to" /></Field>
  <Field label="截止日期" hint="不早于起始日期"><DatePicker v-model="to" :min="from" placeholder="选择截止日期" /></Field>
  <Field label="上线日期" error="不能早于今天"><DatePicker invalid model-value="2026-06-30" /></Field>
  <DatePicker disabled model-value="2026-07-22" />
  <DatePicker v-model="from" :format="(iso) => iso.replaceAll('-', '/')" />
</template>
```

Keyboard: the trigger opens on Enter/Space; inside the grid ←→ move a day, ↑↓ a week, PageUp/PageDown a month, Home/End to the week edges, Enter selects, Esc closes.

Use DatePicker for an exact date (上线日期, 截止日期, 报告日期). For BI time filters that are relative — 前一周 / 前一月 — reach for `DateRangeEditor` instead; pair two DatePickers with cross-linked `min`/`max` when an absolute start–end range is needed.
