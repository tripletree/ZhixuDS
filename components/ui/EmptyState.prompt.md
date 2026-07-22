Quiet no-data placeholder: mist lucide glyph in a 56px hairline circle over bone 3%, 14px bone-soft title, 12px mist description, optional action button. `compact` for dashboard tiles.

```jsx
<EmptyState title="暂无数据" description="连接数据源后，这里将展示筛选范围内的商品数量。"
  action={<Button variant="ghost" size="sm">管理数据库</Button>} />
<EmptyState compact icon="search" title="未找到匹配品牌" description="换个关键字试试" />
```

Copy states what's missing and the next step, declaratively (管理你的数据库) — no apologies, no exclamation marks. Icons: database (数据), search (检索), file-image (报告), box (商品).
