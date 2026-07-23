Form controls on the `.fm-control` surface — the AI-chat input bar styling: 0.75rem radius, hairline bone/10 border, translucent ink-850 fill, mist placeholder, azure border + soft ring on focus. Field wraps a label/hint around any control.

```jsx
<Field label="企业名称" required>
  <Input placeholder="请输入企业名称" />
</Field>
<Field label="关键词">
  <Input icon="search" placeholder="搜索材料、趋势或品类" />
</Field>
<Field label="需求场景" hint="选择最贴近的业务场景">
  <Listbox value={scene} onChange={setScene} options={[
    { value: 'trend', label: '趋势研究' },
    { value: 'material', label: '材料创新' },
    { value: 'proposal', label: '客户提案' },
  ]} />
</Field>
<Field label="补充说明"><TextArea placeholder="其他想让我们了解的信息" /></Field>
```

Placeholders are polite verb phrases (请输入…, 搜索…). Labels stay short; hints go in the `hint` prop, not the placeholder.

States: disabled flows through natively (`<Input disabled />` — 0.45 opacity, not-allowed cursor). For validation errors set `invalid` on the control (rouge border + rouge focus ring, `aria-invalid`) and `error` on the Field (rouge 11px message that replaces the hint):

```jsx
<Field label="企业邮箱" required error="请输入有效的企业邮箱地址">
  <Input invalid value={email} onChange={e => setEmail(e.target.value)} placeholder="name@company.com" />
</Field>
```

Error copy states what's wrong and how to fix it, declaratively (请输入有效的…) — no apologies, no exclamation marks.

For dropdowns default to `Listbox` — the native `Select`'s open popup is OS-drawn and can't match the brand. Reach for `Select` only when the system picker is the point (e.g. mobile web forms).
