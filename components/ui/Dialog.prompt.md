Modal on the brand's overlay recipe: ink-950/80 + 4px blur backdrop, frosted `.glass` card (1rem radius, 32px padding) entering with the 0.3s scale/rise `fm-dialog-in` animation. Escape and overlay click both close. Body scrolls when content exceeds 85vh; `footer` renders a right-aligned action row below it.

```jsx
<Dialog open={open} onClose={close} title="联系我们" subtitle="扫描下方二维码，添加微信预约产品演示">
  …content…
</Dialog>
<Dialog open={open} onClose={close} align="left" size="md" title="预约演示"
  footer={<><Button variant="ghost" size="sm" onClick={close}>取消</Button><Button size="sm" onClick={submit}>确定</Button></>}>
  …Field/Input form…
</Dialog>
<Dialog open={open} onClose={close} align="left" size="lg" title="品牌"
  footer={…取消/确定…}>
  <CheckboxGroup columns={4} value={brands} onChange={setBrands} options={allBrands} />
</Dialog>
```

sm for confirmations and QR cards, md for forms, lg for wide pickers (brand selection grids). Footer actions: ghost 取消 on the left of primary 确定/应用 — short verb phrases.
