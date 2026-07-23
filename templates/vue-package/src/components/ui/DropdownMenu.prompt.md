Row/card action menu on the frosted Popover panel: 13px items with azure 10% hover, lucide leading icons (components, not names), hairline dividers, rouge-tinted `danger` items. Selecting emits `select` with the item key and closes the menu. Trigger goes in the `anchor` slot.

```vue
<script setup lang="ts">
import { Download, EllipsisVertical, FileImage, X } from 'lucide-vue-next'
</script>
<template>
  <DropdownMenu @select="handle" :items="[
    { key: 'export', label: '导出 PPT', icon: Download },
    { key: 'report', label: '生成报告', icon: FileImage },
    { type: 'divider' },
    { key: 'remove', label: '移除看板', icon: X, danger: true },
  ]">
    <template #anchor><IconButton label="更多操作"><EllipsisVertical class="size-4" /></IconButton></template>
  </DropdownMenu>
</template>
```

Menu labels are short verb phrases (导出 PPT, 生成报告). Keep to ≤7 items; one danger item max, always last after a divider.
