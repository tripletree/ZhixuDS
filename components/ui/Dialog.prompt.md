Modal on the brand's overlay recipe: ink-950/80 + 4px blur backdrop, frosted `.glass` card (1rem radius, 32px padding) entering with the 0.3s scale/rise `fm-dialog-in` animation. Escape and overlay click both close.

```jsx
const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>预约演示</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="联系我们" subtitle="扫描下方二维码，添加微信预约产品演示">
  …content…
</Dialog>
<Dialog open={formOpen} onClose={close} align="left" width={440} title="预约演示">
  …Field/Input form + primary Button…
</Dialog>
```

Keep dialogs single-purpose and small (≤440px). Titles are short (联系我们); body copy 13px bone-dim.
