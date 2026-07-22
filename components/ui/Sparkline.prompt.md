Micro data-viz per the brand rules: thin 1.4–1.6px strokes, azure primary series, champagne/mist/rouge secondaries at reduced presence, area fills at 0.18 opacity.

```jsx
<Sparkline data={[42,48,44,58,54,66,78]} dot fill />
<Sparkline data={[40,42,39,44,46,45,48]} tone="mist" />
<SparkBars data={[38,52,44,66,58,78,70]} />
```

Layer multiple Sparklines (same width/height, absolute-stacked) for a multi-series trend; keep azure the emphasised series and set secondaries to `tone="champagne" | "mist" | "rouge"`. Axis labels are 9px mist text with unicode arrows (竞争强度 →, ↑ 市场潜力).
