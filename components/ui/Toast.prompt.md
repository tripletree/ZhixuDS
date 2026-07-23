Transient feedback notice on the frosted float surface (same recipe as the Listbox panel): 0.75rem radius, hairline bone/12 border, 12px blur, float shadow, `fm-pop-in` entrance. Tone icon leads; title 13px bone, description 12px bone-dim.

Tones stay inside the brand palette — no green/yellow/red system colors: `info` and `success` are azure, `warning` champagne, `error` rouge (mixed toward bone for legibility).

```jsx
const { toasts, push, dismiss } = useToasts();
<Button onClick={() => push({ tone: 'success', title: '已导出 PPT 提案', description: '文件已保存到项目空间' })}>导出 PPT</Button>
<ToastStack toasts={toasts} onDismiss={dismiss} />
```

Static/prototype use — render `Toast` directly:

```jsx
<Toast tone="error" title="生成失败" description="上游数据暂不可用，请稍后重试" onClose={close} />
```

Copy follows the brand voice: declarative result statements (已导出…, 生成失败), the fix in the description, no exclamation marks, no apologies. Default duration 4s; pass `duration: 0` for sticky errors the user must dismiss.
