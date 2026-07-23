Relative time-range editor for BI toolbars — the 「时间：前一月」 pattern: `.fm-control` trigger showing the committed preset with a calendar glyph, opening a Popover with radio presets, a mist readout of the actual computed range, and ghost 取消 / primary 应用. Selection is a draft until 应用; `v-model` holds the committed preset value.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const period = ref('month')
const RANGES: Record<string, string> = { week: '2026-07-15 ≤ date < 2026-07-22', month: '2026-06-01 ≤ date < 2026-07-01', year: '2025-07-01 ≤ date < 2026-07-01' }
</script>
<template>
  <Field label="时间" required>
    <DateRangeEditor v-model="period"
      :presets="[{ value: 'week', label: '前一周' }, { value: 'month', label: '前一月' }, { value: 'year', label: '前一年' }]"
      :range-text="(d) => `实际时间范围 · ${RANGES[d ?? '']}`" />
  </Field>
</template>
```

Compute the actual dates in the caller and pass them via `range-text` — the component stays date-library-free. For absolute custom ranges, extend the panel content later rather than reaching for a full calendar first.
