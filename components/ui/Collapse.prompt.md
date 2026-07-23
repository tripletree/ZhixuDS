Collapsible group for filter sidebars: 14px medium bone title, mist chevron rotating 180° on toggle, height animating on the calm ease. Optional `count` shows a selected-count annotation.

```jsx
<Collapse title="品牌" count={2}>
  <CheckboxGroup value={brands} onChange={setBrands} options={brandOptions} />
  <button style={{marginTop:10,border:'none',background:'none',padding:0,fontSize:12,color:'var(--color-azure)',cursor:'pointer'}}>查看所有</button>
</Collapse>
<Collapse title="面料" defaultOpen={false}>…</Collapse>
```

Stack groups directly (each brings its own 10px vertical rhythm); separate with `borderTop: '1px solid var(--border-hairline)'` when the sidebar needs rules. A 查看所有 link opens the full picker (`Dialog size="lg"` + `CheckboxGroup columns`).
