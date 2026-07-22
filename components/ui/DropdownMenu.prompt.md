Row/card action menu on the frosted Popover panel: 13px items with azure 10% hover, lucide leading icons, hairline dividers, rouge-tinted `danger` items. Selecting closes the menu.

```jsx
<DropdownMenu onSelect={handle} anchor={<IconButton name="ellipsis-vertical" label="更多操作" />} items={[
  { key: 'export', label: '导出 PPT', icon: 'download' },
  { key: 'report', label: '生成报告', icon: 'file-image' },
  { type: 'divider' },
  { key: 'remove', label: '移除看板', icon: 'x', danger: true },
]} />
```

Menu labels are short verb phrases (导出 PPT, 生成报告). Keep to ≤7 items; one danger item max, always last after a divider.
