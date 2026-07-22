Surface card wrapping the `.panel` / `.glass` classes from effects.css. `panel` = diagonal-sheen content card (1rem radius); `glass` = 12px-blur frosted tile for floating chips/dashboard tiles; `feature` = panel surface at the 1.5rem feature radius. `glow` adds the top-right azure corner glow.

```jsx
<Panel glow>…content card…</Panel>
<Panel variant="glass" padding={16}>…dashboard tile…</Panel>
<Panel variant="feature" glow="sm">…feature card…</Panel>
```

Use `panel` for in-flow content cards, `glass` only for floating/overlay tiles. Both invert automatically in the light theme (near-white card, hairline black border, diffuse shadow).
