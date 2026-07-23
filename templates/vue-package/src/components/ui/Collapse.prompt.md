Collapsible group for filter sidebars: 14px medium bone title, mist chevron rotating 180° on toggle, height animating on the calm ease. Optional `count` shows a selected-count annotation. Uncontrolled by default (`default-open`); pass `open` + `@toggle` to control.

```vue
<Collapse title="品牌" :count="2">
  <CheckboxGroup v-model="brands" :options="brandOptions" />
  <button class="mt-2.5 text-xs text-azure">查看所有</button>
</Collapse>
<Collapse title="面料" :default-open="false">…</Collapse>
```

Stack groups directly (each brings its own 10px vertical rhythm); separate with `border-t border-bone/[0.06]` when the sidebar needs rules. A 查看所有 link opens the full picker (`Dialog size="lg"` + `CheckboxGroup :columns`).
