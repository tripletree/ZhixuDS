Lucide linear icons are the only icon system FabricMind uses — imported directly from `lucide-vue-next`, stroke 1.5 (feature icons) or 1.75 (nav/controls), sizes 12–20px, colored via `currentColor`.

```vue
<script setup lang="ts">
import { Database, Sparkles } from 'lucide-vue-next'
</script>
<template>
  <Sparkles class="size-3.5 text-champagne" :stroke-width="1.75" />
  <Database class="size-5 text-azure" :stroke-width="1.5" />
</template>
```

Glyphs the brand already uses: arrow-up-right, moon, sun, arrow-right, sparkles, trending-up, activity, database, box, file-image, layout-dashboard, arrow-up, download, x, search, calendar, check, chevrons, info, circle-check, circle-alert. Raw SVG copies in root `assets/icons/`. Never use emoji or filled icons.
