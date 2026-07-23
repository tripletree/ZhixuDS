<script setup lang="ts">
import { ref } from 'vue'
import { Download, Search, Star, Trash2 } from 'lucide-vue-next'
import Panel from '../components/ui/Panel.vue'
import Tag from '../components/ui/Tag.vue'
import StatusDot from '../components/ui/StatusDot.vue'
import Stat from '../components/ui/Stat.vue'
import Progress from '../components/ui/Progress.vue'
import Sparkline from '../components/ui/Sparkline.vue'
import SparkBars from '../components/ui/SparkBars.vue'
import Tabs from '../components/ui/Tabs.vue'
import Field from '../components/ui/Field.vue'
import Input from '../components/ui/Input.vue'
import TextArea from '../components/ui/TextArea.vue'
import Select from '../components/ui/Select.vue'
import Listbox from '../components/ui/Listbox.vue'
import Checkbox from '../components/ui/Checkbox.vue'
import CheckboxGroup from '../components/ui/CheckboxGroup.vue'
import RadioGroup from '../components/ui/RadioGroup.vue'
import FilterChips from '../components/ui/FilterChips.vue'
import Collapse from '../components/ui/Collapse.vue'
import Popover from '../components/ui/Popover.vue'
import DropdownMenu from '../components/ui/DropdownMenu.vue'
import DateRangeEditor from '../components/ui/DateRangeEditor.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import ProductCard from '../components/ui/ProductCard.vue'
import ThumbnailStrip from '../components/ui/ThumbnailStrip.vue'
import Pagination from '../components/ui/Pagination.vue'
import AlphabetIndex from '../components/ui/AlphabetIndex.vue'
import Fab from '../components/ui/Fab.vue'
import DataTable from '../components/ui/DataTable.vue'
import Dialog from '../components/ui/Dialog.vue'
import Button from '../components/ui/Button.vue'
import IconButton from '../components/ui/IconButton.vue'
import Tooltip from '../components/ui/Tooltip.vue'
import Toast from '../components/ui/Toast.vue'
import ToastHost from '../components/ui/ToastHost.vue'
import { useToast } from '../composables/useToast'

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
const dialogOpen = ref(false)

const { push } = useToast()
function demoToast() {
  push({ tone: 'success', title: '已导出 PPT 提案', description: '文件已保存到项目空间' })
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 pb-28 pt-28 lg:px-10">
    <p class="eyebrow text-azure">Components · 组件库</p>
    <h1 class="mt-3 text-[2rem] font-bold leading-tight tracking-tight text-bone">28 个应用级组件</h1>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-bone-soft">
      从落地页产品模型中提炼的 BI 应用原语，全部随 <span class="font-display italic">@zhixu/fabricmind-ui</span>
      发布。右上角可切换深浅主题。
    </p>

    <!-- Buttons / chips / status -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Buttons · Tags · Status</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button size="md">预约演示</Button>
        <Button variant="ghost" size="md">了解产品</Button>
        <Button variant="nav" size="sm">操作入口</Button>
        <IconButton label="搜索"><Search class="size-4" :stroke-width="1.75" /></IconButton>
        <Tag tone="azure">新品</Tag>
        <Tag tone="champagne">TOP 5</Tag>
        <Tag tone="rouge">下架</Tag>
        <Tag tone="neutral">归档</Tag>
        <StatusDot label="实时同步中" />
        <Tooltip content="机会指数 = 趋势热度 × 供应链可行性" placement="bottom">
          <Tag tone="neutral">悬停查看指标说明</Tag>
        </Tooltip>
        <Fab label="AI 助手" />
      </div>
    </section>

    <!-- Data -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Data · 数据展示</h2>
      <div class="flex flex-wrap items-start gap-6">
        <Panel glow="sm" :padding="20" style="flex: 1 1 320px">
          <Stat label="机会指数" :value="78" suffix="/100" delta="18%" :animate="false" />
          <div class="mt-4 flex flex-col gap-2">
            <Progress label="Lyocell" :value="86" />
            <Progress label="Recycled Nylon" :value="72" tone="champagne" />
            <Progress label="Cupro" :value="58" tone="rouge" />
          </div>
        </Panel>
        <Panel :padding="20" style="flex: 1 1 280px">
          <div class="flex items-end gap-6">
            <Sparkline :data="[3, 5, 4, 8, 7, 10, 9, 12]" fill dot />
            <SparkBars :data="[4, 7, 5, 9, 6, 11]" />
          </div>
          <div class="mt-5">
            <DataTable
              dense
              :columns="[{ key: 'name', label: '材料', strong: true }, { key: 'index', label: '机会指数', align: 'right' }, { key: 'trend', label: '趋势', align: 'right' }]"
              :rows="[{ name: 'Lyocell', index: 86, trend: '+18%' }, { name: 'Recycled Nylon', index: 72, trend: '+9%' }]"
            />
          </div>
        </Panel>
      </div>
    </section>

    <!-- Form controls -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Controls · 表单控件（含错误 / 禁用态）</h2>
      <Panel variant="glass" :padding="24" style="max-width: 560px" class="flex flex-col gap-4">
        <Field label="关键词"><Input v-model="keyword" :icon="Search" placeholder="搜索材料、趋势或品类" /></Field>
        <div class="flex gap-3">
          <Field label="需求场景" required style="flex: 1">
            <Listbox v-model="scene" :options="[{ value: 'trend', label: '趋势研究', hint: 'Trend' }, { value: 'material', label: '材料创新', hint: 'Material' }, { value: 'proposal', label: '客户提案', hint: 'Proposal' }]" />
          </Field>
          <Field label="交付格式" style="flex: 1">
            <Select v-model="fmt"><option value="ppt">PPT 提案</option><option value="report">数据报告</option></Select>
          </Field>
        </div>
        <Field label="企业邮箱" required error="请输入有效的企业邮箱地址">
          <Input invalid model-value="li.wei@" placeholder="name@company.com" />
        </Field>
        <div class="flex gap-3">
          <Field label="订阅频率" hint="当前方案不支持修改" style="flex: 1">
            <Listbox disabled model-value="weekly" :options="[{ value: 'weekly', label: '每周' }]" />
          </Field>
          <Field label="只读关键词" style="flex: 1"><Input disabled model-value="Lyocell" /></Field>
        </div>
        <Field label="补充说明" hint="选填 · 帮助我们提前了解你的需求"><TextArea v-model="note" :rows="2" placeholder="其他想让我们了解的信息" /></Field>
      </Panel>
    </section>

    <!-- Filters & pickers -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Filters &amp; Pickers · 筛选与选择</h2>
      <div class="flex flex-wrap items-start gap-10">
        <div style="width: 260px">
          <Collapse title="品牌" :count="2">
            <CheckboxGroup v-model="brands" :options="[{ value: 'a', label: '& Other Stories' }, { value: 'b', label: '1017 ALYX 9SM' }, { value: 'c', label: '3/2 WORKS', disabled: true }]" />
          </Collapse>
          <Collapse title="更新时间">
            <RadioGroup v-model="range" :options="[{ value: 'week', label: '前一周' }, { value: 'month', label: '前一月' }, { value: 'year', label: '前一年' }]" />
          </Collapse>
          <Checkbox v-model="agree" indeterminate>部分选中</Checkbox>
        </div>
        <div class="flex flex-col gap-5" style="flex: 1; min-width: 320px">
          <Tabs v-model="tab" :items="[{ key: 'trend', label: '趋势' }, { key: 'material', label: '材料' }, { key: 'proposal', label: '提案' }]" />
          <FilterChips v-model="chips" multiple title="上装" :options="[{ value: 'tshirt', label: 'T恤' }, { value: 'shirt', label: '衬衫' }, { value: 'hoodie', label: '卫衣' }, { value: 'jacket', label: '夹克', disabled: true }]" />
          <div class="flex flex-wrap items-center gap-3">
            <DateRangeEditor v-model="dateRange" style="width: 220px" :presets="[{ value: 'week', label: '前一周' }, { value: 'month', label: '前一月' }]" range-text="2026-06-01 ≤ date < 2026-07-01" />
            <Popover :width="220">
              <template #anchor><Button variant="ghost" size="sm">更多筛选</Button></template>
              <span class="text-xs text-bone-soft">Popover 面板 — 菜单与筛选的基层</span>
            </Popover>
            <DropdownMenu :items="[{ key: 'export', label: '导出', icon: Download }, { key: 'fav', label: '收藏', icon: Star }, { type: 'divider' }, { key: 'del', label: '删除', icon: Trash2, danger: true }]">
              <template #anchor><Button variant="nav" size="sm">操作</Button></template>
            </DropdownMenu>
          </div>
          <AlphabetIndex v-model="letter" :available="['#', 'A', 'B', 'C', 'L', 'R']" />
        </div>
      </div>
    </section>

    <!-- Products & browse -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Products · 浏览与分页</h2>
      <div class="flex flex-wrap items-start gap-8">
        <ProductCard style="width: 200px" title="Premiere Mini 石英腕表 不锈钢与陶瓷表链 镶钻表圈 15mm" brand="Chanel" date="2026-07-22" clickable>
          <template #tags><Tag tone="azure" size="sm">新品</Tag></template>
        </ProductCard>
        <div class="flex flex-col gap-4" style="flex: 1; min-width: 320px">
          <ThumbnailStrip v-model="thumb" :items="[{}, {}, {}, {}]" />
          <Pagination v-model:page="page" :page-count="24" />
          <EmptyState compact title="暂无数据" description="调整筛选条件后重试" />
        </div>
      </div>
    </section>

    <!-- Feedback -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Feedback · 反馈</h2>
      <div class="flex flex-wrap items-start gap-6">
        <div class="flex flex-col gap-3">
          <Toast tone="info" title="报告生成中" description="预计还需 30 秒" />
          <Toast tone="warning" title="数据部分缺失" description="2026-06 的部分品牌数据尚未同步" />
          <Toast tone="error" title="生成失败" description="上游数据暂不可用，请稍后重试" closable />
        </div>
        <div class="flex flex-col items-start gap-4">
          <Button variant="ghost" size="sm" @click="demoToast">触发通知（右下角）</Button>
          <Button variant="ghost" size="sm" @click="dialogOpen = true">打开对话框</Button>
        </div>
      </div>
    </section>

    <Dialog :open="dialogOpen" title="预约演示" subtitle="留下你的联系方式，知序团队将在 1 个工作日内联系你" @close="dialogOpen = false">
      <div class="mt-4"><Field label="姓名"><Input placeholder="你的姓名" /></Field></div>
      <template #footer>
        <Button variant="ghost" size="sm" @click="dialogOpen = false">取消</Button>
        <Button size="sm">提交</Button>
      </template>
    </Dialog>
    <ToastHost />
  </div>
</template>
