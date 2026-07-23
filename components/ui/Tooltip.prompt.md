Caption-scale hint (12px bone-soft) on the frosted float surface — 8px radius, hairline border, blur, float shadow, `fm-pop-in`. Appears 150ms after hover or on keyboard focus; hides immediately on leave/blur. No arrow — consistent with the Popover language.

```jsx
<Tooltip content="机会指数 = 趋势热度 × 供应链可行性">
  <IconButton name="info" label="指标说明" />
</Tooltip>
<Tooltip content="导出 PPT 提案" placement="bottom">
  <IconButton name="download" label="导出" />
</Tooltip>
```

Use for icon-button labels and metric definitions — one line, no punctuation-heavy sentences. Anything interactive or longer belongs in a `Popover`. `open` prop forces visibility for static demos.
