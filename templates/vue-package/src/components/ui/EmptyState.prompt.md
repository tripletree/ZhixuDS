Quiet no-data placeholder: mist lucide glyph in a 56px hairline circle over bone 3%, 14px bone-soft title, 12px mist description, optional `action` slot. `compact` for dashboard tiles. `icon` takes a lucide component (defaults to Database).

```vue
<script setup lang="ts">
import { Search } from 'lucide-vue-next'
</script>
<template>
  <EmptyState title="暂无数据" description="连接数据源后，这里将展示筛选范围内的商品数量。">
    <template #action><Button variant="ghost" size="sm">管理数据库</Button></template>
  </EmptyState>
  <EmptyState compact :icon="Search" title="未找到匹配品牌" description="换个关键字试试" />
</template>
```

Copy states what's missing and the next step, declaratively (管理你的数据库) — no apologies, no exclamation marks. Icons: Database (数据), Search (检索), FileImage (报告), Box (商品).
