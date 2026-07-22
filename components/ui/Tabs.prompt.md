Pill segmented control (never rectangles/underlines — pills only). Idle tabs are bone-dim, brighten toward bone on hover; the active tab sits on a bone 8% pill with a hairline border.

```jsx
const [tab, setTab] = React.useState('trend');
<Tabs value={tab} onChange={setTab} items={[
  { key: 'trend', label: '趋势洞察', icon: 'trending-up' },
  { key: 'material', label: '材料机会' },
  { key: 'report', label: '提案报告' },
]} />
```

Tab labels are short noun phrases (2–4 characters). Use `size="sm"` inside dashboard tiles.
