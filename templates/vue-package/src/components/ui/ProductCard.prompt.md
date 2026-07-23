Product media card for browse grids and 新品日历: 3/4 image (placeholder gradient when no `src`), 13px two-line clamped title, brand left / date right meta. Hover lifts −4px with an azure border tint; pass `clickable` + `@click` for navigable cards. Tags go in the `tags` slot. ThumbnailStrip adds a colorway/angle selector (`v-model` = selected index).

```vue
<div class="grid grid-cols-3 gap-4">
  <ProductCard title="Premiere Mini 石英腕表 不锈钢与陶瓷表链 镶钻表圈 15mm" brand="Chanel" date="2026-07-22" clickable @click="openDetail">
    <template #tags><Tag tone="azure" size="sm">新品</Tag></template>
  </ProductCard>
  …
</div>
<ThumbnailStrip v-model="i" :items="[{ src: a }, { src: b }, { src: c }]" />
```

Titles carry full merchandising copy (clamped, not truncated by hand); brand names in their original language; dates as 2026-07-22. Fashion imagery reads best cool-toned on the dark theme.
