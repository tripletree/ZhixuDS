Pill chips (from the AI-chat suggestion chips) and the live ping StatusDot. Tones follow the data palette: neutral for passive labels, azure for the working accent, champagne/rouge sparingly as markers. Leading lucide icon via the `icon` slot.

```vue
<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
</script>
<template>
  <Tag>趋势预警</Tag>
  <Tag tone="azure"><template #icon><Sparkles :size="12" :stroke-width="1.75" /></template>AI 洞察</Tag>
  <Tag tone="champagne" size="sm">TOP 5</Tag>
  <StatusDot label="AI 正在分析" />
</template>
```

Chip copy is short (2–4 characters ideal): 趋势预警 / 材料匹配 / 竞品对比. Never emoji — lucide only.
