Caption-scale hint (12px bone-soft) on the shared `.fm-float` surface — 8px radius override, near-invisible hairline, soft shadow, no blur, `fm-pop-in`. Appears 150ms after hover or on keyboard focus; hides immediately on leave/blur. No arrow — consistent with the Popover language. Trigger goes in the default slot.

```vue
<script setup lang="ts">
import { Download, Info } from 'lucide-vue-next'
</script>
<template>
  <Tooltip content="机会指数 = 趋势热度 × 供应链可行性">
    <IconButton label="指标说明"><Info class="size-4" /></IconButton>
  </Tooltip>
  <Tooltip content="导出 PPT 提案" placement="bottom">
    <IconButton label="导出"><Download class="size-4" /></IconButton>
  </Tooltip>
</template>
```

Use for icon-button labels and metric definitions — one line, no punctuation-heavy sentences. Anything interactive or longer belongs in a `Popover`. `open` prop forces visibility for static demos.
