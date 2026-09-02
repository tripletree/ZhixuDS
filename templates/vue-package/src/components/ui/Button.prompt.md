Pill-shaped FabricMind buttons. Primary = bone fill + ink text, glows white on hover; ghost = hairline border; nav = the same hairline pill at a compact padding scale. IconButton = 36px circle (theme toggle) with a lucide icon in its default slot.

Hairline (outline) buttons — ghost, nav, IconButton — are **always `bg-transparent` at rest**: no grey wash, so they sit flush on the dark surface and read as white on the light surface. Never reintroduce `bg-bone/[0.03]` on a button (that faint fill belongs to non-interactive chips and badges only).

They also share one interaction state in both themes: on hover and keyboard focus the border goes `azure/40`, the fill `azure/10`, and the text **and icon** go `azure-bright` together (icons inherit `currentColor`). Focus adds a 3px `azure/12` ring, matching `.fm-control`. Never tint only the border — border, text and icon move as one.

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
