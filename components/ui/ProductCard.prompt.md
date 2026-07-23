Product media card for browse grids and新品日历: 3/4 image (placeholder gradient when no `src`), 13px two-line clamped title, brand left / date right meta. Hover lifts −4px with an azure border tint. ThumbnailStrip adds a colorway/angle selector.

```jsx
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
  <ProductCard title="Premiere Mini 石英腕表 不锈钢与陶瓷表链 镶钻表圈 15mm" brand="Chanel" date="2026-07-22"
    tags={<Tag tone="azure" size="sm">新品</Tag>} onClick={openDetail} />
  …
</div>
<ThumbnailStrip items={[{src:a},{src:b},{src:c}]} value={i} onChange={setI} />
```

Titles carry full merchandising copy (clamped, not truncated by hand); brand names in their original language; dates as 2026-07-22. Fashion imagery reads best cool-toned on the dark theme.
