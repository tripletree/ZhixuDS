<script setup lang="ts">
import { ref } from 'vue'
import { Download, Search, Star, Trash2 } from 'lucide-vue-next'
import Panel from './components/ui/Panel.vue'
import Tag from './components/ui/Tag.vue'
import StatusDot from './components/ui/StatusDot.vue'
import Stat from './components/ui/Stat.vue'
import Progress from './components/ui/Progress.vue'
import Sparkline from './components/ui/Sparkline.vue'
import SparkBars from './components/ui/SparkBars.vue'
import Tabs from './components/ui/Tabs.vue'
import Field from './components/ui/Field.vue'
import Input from './components/ui/Input.vue'
import TextArea from './components/ui/TextArea.vue'
import Select from './components/ui/Select.vue'
import Listbox from './components/ui/Listbox.vue'
import Checkbox from './components/ui/Checkbox.vue'
import CheckboxGroup from './components/ui/CheckboxGroup.vue'
import RadioGroup from './components/ui/RadioGroup.vue'
import FilterChips from './components/ui/FilterChips.vue'
import Collapse from './components/ui/Collapse.vue'
import Popover from './components/ui/Popover.vue'
import DropdownMenu from './components/ui/DropdownMenu.vue'
import DateRangeEditor from './components/ui/DateRangeEditor.vue'
import EmptyState from './components/ui/EmptyState.vue'
import ProductCard from './components/ui/ProductCard.vue'
import ThumbnailStrip from './components/ui/ThumbnailStrip.vue'
import Pagination from './components/ui/Pagination.vue'
import AlphabetIndex from './components/ui/AlphabetIndex.vue'
import Fab from './components/ui/Fab.vue'
import DataTable from './components/ui/DataTable.vue'
import Dialog from './components/ui/Dialog.vue'
import Button from './components/ui/Button.vue'

const tab = ref('trend')
const scene = ref('trend')
const keyword = ref('')
const note = ref('')
const fmt = ref('ppt')
const agree = ref(true)
const brands = ref(['a'])
const range = ref('month')
const chips = ref(['tshirt'])
const dateRange = ref('month')
const thumb = ref(0)
const page = ref(3)
const letter = ref('A')
const dialogOpen = ref(true)
</script>

<template>
  <div style="padding: 32px; display: flex; flex-direction: column; gap: 24px; max-width: 1100px">
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap">
      <Tabs v-model="tab" :items="[{ key: 'trend', label: '趋势' }, { key: 'material', label: '材料' }, { key: 'proposal', label: '提案' }]" />
      <Tag tone="azure">新品</Tag>
      <Tag tone="champagne">TOP 5</Tag>
      <Tag tone="rouge">下架</Tag>
      <StatusDot label="实时同步中" />
      <Fab label="AI 助手" />
    </div>

    <div style="display: flex; gap: 24px; align-items: flex-start">
      <Panel glow="sm" :padding="20" style="flex: 1">
        <Stat label="机会指数" :value="78" suffix="/100" delta="18%" :animate="false" />
        <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 8px">
          <Progress label="Lyocell" :value="86" />
          <Progress label="Recycled Nylon" :value="72" tone="champagne" />
        </div>
        <div style="margin-top: 12px; display: flex; gap: 16px">
          <Sparkline :data="[3, 5, 4, 8, 7, 10, 9, 12]" fill dot />
          <SparkBars :data="[4, 7, 5, 9, 6, 11]" />
        </div>
      </Panel>

      <Panel variant="glass" :padding="20" style="flex: 1.2; display: flex; flex-direction: column; gap: 12px">
        <Field label="关键词"><Input v-model="keyword" :icon="Search" placeholder="搜索材料、趋势或品类" /></Field>
        <Field label="需求场景" required>
          <Listbox v-model="scene" :options="[{ value: 'trend', label: '趋势研究', hint: 'Trend' }, { value: 'material', label: '材料创新', hint: 'Material' }]" />
        </Field>
        <Field label="交付格式">
          <Select v-model="fmt"><option value="ppt">PPT 提案</option><option value="report">数据报告</option></Select>
        </Field>
        <Field label="补充说明" hint="选填 · 帮助我们提前了解你的需求"><TextArea v-model="note" :rows="2" placeholder="其他想让我们了解的信息" /></Field>
      </Panel>
    </div>

    <div style="display: flex; gap: 32px; align-items: flex-start">
      <div style="width: 260px">
        <Collapse title="品牌" :count="2">
          <CheckboxGroup v-model="brands" :options="[{ value: 'a', label: '& Other Stories' }, { value: 'b', label: '1017 ALYX 9SM' }, { value: 'c', label: '3/2 WORKS', disabled: true }]" />
        </Collapse>
        <Collapse title="更新时间">
          <RadioGroup v-model="range" :options="[{ value: 'week', label: '前一周' }, { value: 'month', label: '前一月' }, { value: 'year', label: '前一年' }]" />
        </Collapse>
        <Checkbox v-model="agree" indeterminate>部分选中</Checkbox>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; gap: 16px">
        <FilterChips v-model="chips" multiple title="上装" :options="[{ value: 'tshirt', label: 'T恤' }, { value: 'shirt', label: '衬衫' }, { value: 'hoodie', label: '卫衣' }]" />
        <div style="display: flex; gap: 12px; align-items: center">
          <DateRangeEditor v-model="dateRange" style="width: 220px" :presets="[{ value: 'week', label: '前一周' }, { value: 'month', label: '前一月' }]" range-text="2026-06-01 ≤ date < 2026-07-01" />
          <Popover :width="200">
            <template #anchor><Button variant="ghost" size="sm">更多筛选</Button></template>
            <span style="font-size: 12px; color: var(--color-bone-soft)">Popover 内容</span>
          </Popover>
          <DropdownMenu :items="[{ key: 'export', label: '导出', icon: Download }, { key: 'fav', label: '收藏', icon: Star }, { type: 'divider' }, { key: 'del', label: '删除', icon: Trash2, danger: true }]">
            <template #anchor><Button variant="nav" size="sm">操作</Button></template>
          </DropdownMenu>
        </div>
        <AlphabetIndex v-model="letter" :available="['#', 'A', 'B', 'C', 'L', 'R']" />
        <div style="display: flex; gap: 16px">
          <ProductCard style="width: 180px" title="Premiere Mini 石英腕表 不锈钢与陶瓷表链" brand="Chanel" date="2026-07-22" clickable>
            <template #tags><Tag tone="azure" size="sm">新品</Tag></template>
          </ProductCard>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 12px">
            <ThumbnailStrip v-model="thumb" :items="[{}, {}, {}, {}]" />
            <Pagination v-model:page="page" :page-count="24" />
            <EmptyState compact title="暂无数据" description="调整筛选条件后重试" />
          </div>
        </div>
        <DataTable
          :columns="[{ key: 'name', label: '材料', strong: true }, { key: 'index', label: '机会指数', align: 'right' }, { key: 'trend', label: '趋势', align: 'right' }]"
          :rows="[{ name: 'Lyocell', index: 86, trend: '+18%' }, { name: 'Recycled Nylon', index: 72, trend: '+9%' }]"
        />
      </div>
    </div>

    <Dialog :open="dialogOpen" title="预约演示" subtitle="留下你的联系方式，知序团队将在 1 个工作日内联系你" @close="dialogOpen = false">
      <div style="margin-top: 16px"><Field label="姓名"><Input placeholder="你的姓名" /></Field></div>
      <template #footer>
        <Button variant="ghost" size="sm" @click="dialogOpen = false">取消</Button>
        <Button size="sm">提交</Button>
      </template>
    </Dialog>
  </div>
</template>
