Transient feedback notice on the shared `.fm-float` surface: 1rem radius, near-invisible hairline, one soft shadow, no blur, `fm-pop-in` entrance. Tone icon leads; title 13px bone, description 12px bone-dim.

Tones stay inside the brand palette — no green/yellow/red system colors: `info` and `success` are azure, `warning` champagne, `error` rouge (mixed toward bone for legibility).

App-wide queue: render one `<ToastHost />` near the app root, push from anywhere via the `useToast` composable:

```vue
<script setup lang="ts">
import { useToast } from '@zhixu/fabricmind-ui'
const { push } = useToast()
</script>
<template>
  <Button @click="push({ tone: 'success', title: '已导出 PPT 提案', description: '文件已保存到项目空间' })">导出 PPT</Button>
  <ToastHost />
</template>
```

Static use — render `Toast` directly (`closable` + `@close` for the corner button):

```vue
<Toast tone="error" title="生成失败" description="上游数据暂不可用，请稍后重试" closable @close="dismiss" />
```

Copy follows the brand voice: declarative result statements (已导出…, 生成失败), the fix in the description, no exclamation marks, no apologies. Default duration 4s; pass `duration: 0` for sticky errors the user must dismiss.
