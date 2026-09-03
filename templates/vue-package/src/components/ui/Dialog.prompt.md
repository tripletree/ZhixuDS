Modal on the brand's overlay recipe: flat `--overlay-scrim` backdrop (no blur), opaque `.fm-float` card (1.25rem radius, 32px padding, near-invisible hairline, soft shadow) entering with the 0.3s scale/rise `fm-dialog-in` animation. Escape and overlay click emit `close`. The `footer` slot renders a right-aligned action row below the body. For long content (picker grids) pass `scroll-body` to make the body scroll — it clips floating panels like Listbox, so leave it off for forms.

```vue
<Dialog :open="open" title="联系我们" subtitle="扫描下方二维码，添加微信预约产品演示" @close="open = false">
  …content…
</Dialog>
<Dialog :open="open" align="left" size="md" title="预约演示" @close="open = false">
  …Field/Input form…
  <template #footer>
    <Button variant="ghost" size="sm" @click="open = false">取消</Button>
    <Button size="sm" @click="submit">确定</Button>
  </template>
</Dialog>
<Dialog :open="open" align="left" size="lg" scroll-body title="品牌" @close="open = false">
  <CheckboxGroup :columns="4" v-model="brands" :options="allBrands" />
  <template #footer>…取消/确定…</template>
</Dialog>
```

sm for confirmations and QR cards, md for forms, lg for wide pickers (brand selection grids). Footer actions: ghost 取消 on the left of primary 确定/应用 — short verb phrases.
