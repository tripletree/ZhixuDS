Checkbox for filter panels and pickers: 16px rounded box, hairline bone/25 border idle, solid azure fill when checked with the check stroked in ink-950 (the token inverts to white in the light theme, so contrast holds both ways). Azure focus ring for keyboard users.

```jsx
<Checkbox checked={v} onChange={setV}>Acne Studio（官网）</Checkbox>
<Checkbox indeterminate>品牌</Checkbox>
<CheckboxGroup value={brands} onChange={setBrands} options={[
  { value: 'aos', label: '& Other Stories（官网）' },
  { value: 'alyx', label: '1017 ALYX 9SM（官网）' },
  { value: '32works', label: '3/2 WORKS' },
]} />
<CheckboxGroup columns={5} … />   // brand-picker grid (pair with Dialog size="lg")
```

Brand names stay in English with （官网）/（日本） suffixes as data provides them. Use `columns` for wide picker dialogs, the vertical list for filter sidebars.
