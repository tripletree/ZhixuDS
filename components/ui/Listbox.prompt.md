Fully branded dropdown: `.fm-control` trigger (chevron rotates on open), frosted ink-850 panel with hairline border, options highlight azure 10% on hover/keyboard focus, selected option gets an azure check. Keyboard: ↑↓ move, Enter/Space select, Esc closes, Home/End jump; outside click closes.

```jsx
const [scene, setScene] = React.useState('trend');
<Field label="需求场景">
  <Listbox value={scene} onChange={setScene} options={[
    { value: 'trend', label: '趋势研究', hint: 'Trend' },
    { value: 'material', label: '材料创新', hint: 'Material' },
    { value: 'proposal', label: '客户提案', hint: 'Proposal' },
  ]} />
</Field>
```

Prefer `Listbox` when the open panel must stay on-brand (dashboards, demos); plain `Select` keeps the native popup with its free accessibility and mobile pickers. Option labels are short noun phrases; `hint` fits the italic-English annotation habit but stays sans here (12px mist).
