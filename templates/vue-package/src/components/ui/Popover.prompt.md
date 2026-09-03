Anchored floating panel on the shared `.fm-float` surface (opaque pane, near-invisible hairline, one soft shadow, 1rem radius, no blur), `fm-pop-in` entrance. The trigger goes in the `anchor` slot; clicking it toggles, outside click and Escape close. `v-model:open` for controlled use.

```vue
<Popover :width="300">
  <template #anchor><Button variant="ghost" size="sm">更多筛选</Button></template>
  <div class="flex flex-col gap-3 text-left">
    <span class="text-[13px] font-medium text-bone">编辑时间范围</span>
    <RadioGroup v-model="p" :options="presets" />
    <span class="text-[11px] text-mist">2026-06-01 ≤ date &lt; 2026-07-01</span>
    <div class="flex justify-end gap-2">
      <Button variant="ghost" size="sm">取消</Button><Button size="sm">应用</Button>
    </div>
  </div>
</Popover>
```

Compose filter editors from Radio/Checkbox/Listbox inside; keep panels single-purpose and ≤360px wide. For row-action menus use `DropdownMenu`.
