Form controls on the `.fm-control` surface — the AI-chat input bar styling: 0.75rem radius, hairline bone/10 border, translucent ink-850 fill, mist placeholder, azure border + soft ring on focus. Field wraps a label/hint around any control.

```jsx
<Field label="企业名称" required>
  <Input placeholder="请输入企业名称" />
</Field>
<Field label="关键词">
  <Input icon="search" placeholder="搜索材料、趋势或品类" />
</Field>
<Field label="需求场景" hint="选择最贴近的业务场景">
  <Select defaultValue="trend">
    <option value="trend">趋势研究</option>
    <option value="material">材料创新</option>
    <option value="proposal">客户提案</option>
  </Select>
</Field>
<Field label="补充说明"><TextArea placeholder="其他想让我们了解的信息" /></Field>
```

Placeholders are polite verb phrases (请输入…, 搜索…). Labels stay short; hints go in the `hint` prop, not the placeholder.
