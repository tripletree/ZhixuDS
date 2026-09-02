Pill segmented control (never rectangles/underlines — pills only). Idle tabs are bone-dim and brighten toward bone-soft on hover; the active tab uses the shared azure **selected** state — border azure 40%, fill azure 12%, `azure-bright` label — identical to a selected FilterChip, so "selected" reads the same across every pill control. `v-model` holds the active key; per-item lucide icon via `icon` (a component, not a name).

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrendingUp } from 'lucide-vue-next'
const tab = ref('trend')
</script>
<template>
  <Tabs v-model="tab" :items="[
    { key: 'trend', label: '趋势洞察', icon: TrendingUp },
    { key: 'material', label: '材料机会' },
    { key: 'report', label: '提案报告' },
  ]" />
</template>
```

Tab labels are short noun phrases (2–4 characters). Use `size="sm"` inside dashboard tiles.
