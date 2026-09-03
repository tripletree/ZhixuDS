Form controls on the `.fm-control` surface — the AI-chat input bar styling: 0.75rem radius, hairline bone/10 border, translucent ink-850 fill, mist placeholder, azure border + soft ring on focus. Field wraps a label/hint around any control; Input/TextArea/Select are `v-model` bound. Input's leading icon is a lucide component.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
const name = ref(''); const kw = ref(''); const scene = ref('trend'); const note = ref('')
</script>
<template>
  <Field label="企业名称" required><Input v-model="name" placeholder="请输入企业名称" /></Field>
  <Field label="关键词"><Input v-model="kw" :icon="Search" placeholder="搜索材料、趋势或品类" /></Field>
  <Field label="需求场景" hint="选择最贴近的业务场景">
    <Listbox v-model="scene" :options="[
      { value: 'trend', label: '趋势研究' },
      { value: 'material', label: '材料创新' },
      { value: 'proposal', label: '客户提案' },
    ]" />
  </Field>
  <Field label="补充说明"><TextArea v-model="note" placeholder="其他想让我们了解的信息" /></Field>
</template>
```

Placeholders are polite verb phrases (请输入…, 搜索…). Labels stay short; hints go in the `hint` prop, not the placeholder.

**Three label placements, chosen by context:**

- **No label** — toolbar filters whose value is self-describing (`全部在线时长`, `未下架`). Use the bare control with a descriptive `placeholder`; a label would repeat what the value already says.
- **`layout="stacked"`** (default) — label above the control. Long forms, dialogs, anything read top-to-bottom.
- **`layout="inline"`** — label left of the control, right-aligned in a fixed `labelWidth` column (default 72px). Stack several inline Fields inside a Popover for a dense "更多筛选" panel: the labels share one clean edge and every control starts on the same x. Give all rows the same `labelWidth` (set it to fit the longest label) — mixed widths break the alignment.

```vue
<Popover :width="320" :padding="16">
  <template #anchor><Button variant="ghost" size="sm">更多筛选</Button></template>
  <div class="flex flex-col gap-3">
    <Field layout="inline" label="图案元素"><Listbox v-model="f.pattern" placeholder="全部" :options="patterns" /></Field>
    <Field layout="inline" label="成分"><Listbox v-model="f.fabric" placeholder="全部" :options="fabrics" /></Field>
    <Field layout="inline" label="织造类型"><Listbox v-model="f.weave" placeholder="全部" :options="weaves" /></Field>
    <div class="mt-1 flex items-center justify-between border-t border-(--border-hairline) pt-3">
      <Button variant="ghost" size="sm" @click="reset">重置</Button>
      <Button variant="nav" size="sm">应用</Button>
    </div>
  </div>
</Popover>
```

Inline labels are 13px (one step up from stacked's 12px eyebrow) because they sit on the control's baseline and read as part of the row, not as a caption. `hint`/`error` in inline mode render under the control column, not under the label.

States: `disabled` dims to 0.45 opacity with a not-allowed cursor. For validation errors set `invalid` on the control (rouge border + rouge focus ring, `aria-invalid`) and `error` on the Field (rouge 11px message that replaces the hint):

```vue
<Field label="企业邮箱" required error="请输入有效的企业邮箱地址">
  <Input v-model="email" invalid placeholder="name@company.com" />
</Field>
```

Error copy states what's wrong and how to fix it, declaratively (请输入有效的…) — no apologies, no exclamation marks.

`Select` and `Listbox` open the same `.fm-float` panel — `Select` is Listbox with an inline `<option>` authoring API (`value`, text, optional `data-hint`), so the two never look different side by side. Use `Listbox` when options come from data, `Select` when you want to write them in the template.
