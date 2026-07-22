Anchored floating panel on the frosted ink surface (same recipe as the Listbox dropdown): 0.75rem radius, hairline border, 12px blur, `fm-pop-in` entrance. Clicking the anchor toggles; outside click and Escape close.

```jsx
<Popover width={300} anchor={<Button variant="ghost" size="sm">更多筛选</Button>}>
  <div style={{display:'flex',flexDirection:'column',gap:12}}>
    <span style={{fontSize:13,fontWeight:500,color:'var(--color-bone)'}}>编辑时间范围</span>
    <RadioGroup value={p} onChange={setP} options={presets} />
    <span style={{fontSize:11,color:'var(--color-mist)'}}>2026-06-01 ≤ date &lt; 2026-07-01</span>
    <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
      <Button variant="ghost" size="sm">取消</Button><Button size="sm">应用</Button>
    </div>
  </div>
</Popover>
```

Compose filter editors from Radio/Checkbox/Listbox inside; keep panels single-purpose and ≤360px wide. For row-action menus, put a list of buttons inside until a dedicated DropdownMenu exists.
