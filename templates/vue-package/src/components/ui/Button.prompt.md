Pill-shaped FabricMind buttons. Primary = bone fill + ink text, glows white on hover; ghost = hairline border; nav = compact pill that tints azure on hover. IconButton = 36px circle (theme toggle) with a lucide icon in its default slot.

```vue
<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Sun } from 'lucide-vue-next'
</script>
<template>
  <Button size="md">
    预约演示
    <template #icon><ArrowRight class="size-4 transition-transform group-hover:translate-x-1" /></template>
  </Button>
  <Button variant="ghost">了解产品</Button>
  <Button variant="nav" size="sm">
    预约演示
    <template #icon><ArrowUpRight class="size-3.5" /></template>
  </Button>
  <IconButton label="切换主题"><Sun class="size-4" :stroke-width="1.75" /></IconButton>
</template>
```

CTA copy is a short verb phrase (预约演示 / 了解产品). All buttons are pills — never rectangles.
