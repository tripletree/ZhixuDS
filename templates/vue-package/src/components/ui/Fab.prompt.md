48px floating circle on the azure-glow treatment (azure 15% fill, azure/40 border, soft glow shadow, 8px blur); hover deepens the glow and lifts −2px. The default sparkles glyph marks the AI assistant entry — 「把分析师，装进对话框」. `icon` takes a lucide component to override.

```vue
<script setup lang="ts">
import { Download } from 'lucide-vue-next'
</script>
<template>
  <Fab fixed label="向知序提问" @click="openChat" />
  <Fab :icon="Download" label="导出" @click="exportPPT" />
</template>
```

One Fab per screen, bottom-right, reserved for the primary floating action (usually the AI chat). Never emoji inside — lucide only.
