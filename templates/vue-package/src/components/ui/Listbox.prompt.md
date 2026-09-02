Fully branded dropdown: `.fm-control` trigger (chevron rotates on open), `.fm-float` panel (opaque, near-invisible hairline, soft shadow), options highlight azure 10% on hover/keyboard focus, selected option gets an azure check. Keyboard: ↑↓ move, Enter/Space select, Esc closes, Home/End jump; outside click closes. `v-model` holds the selected value.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const scene = ref('trend')
</script>
<template>
  <Field label="需求场景">
    <Listbox v-model="scene" :options="[
      { value: 'trend', label: '趋势研究', hint: 'Trend' },
      { value: 'material', label: '材料创新', hint: 'Material' },
      { value: 'proposal', label: '客户提案', hint: 'Proposal' },
    ]" />
  </Field>
</template>
```

`Select` is a thin wrapper over Listbox that accepts inline `<option>` children, so both render the identical `.fm-float` panel — pick by authoring convenience, not appearance. Option labels are short noun phrases; `hint` fits the italic-English annotation habit but stays sans here (12px mist).

States: `disabled` dims the trigger and blocks opening; `invalid` swaps the border/focus ring to rouge — pair it with `error` on the wrapping Field for the message.
