<script setup lang="ts">
import {
  Activity,
  ArrowRight,
  Box,
  Calendar,
  ChevronDown,
  Database,
  Download,
  FileImage,
  Info,
  LayoutDashboard,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-vue-next'
import BrandMark from '../components/ui/BrandMark.vue'
import Panel from '../components/ui/Panel.vue'
import StatusDot from '../components/ui/StatusDot.vue'

const inkScale = [
  { name: 'ink-950', dark: '#07080a', light: '#ffffff' },
  { name: 'ink-900', dark: '#0a0c10', light: '#fafbfc' },
  { name: 'ink-850', dark: '#0e1117', light: '#f5f6f8' },
  { name: 'ink-800', dark: '#13171f', light: '#eef0f4' },
  { name: 'ink-750', dark: '#181d27', light: '#e6e9ee' },
  { name: 'ink-700', dark: '#1f2531', light: '#d9dde4' },
]
const textScale = [
  { name: 'bone', dark: '#eceae1', light: '#16181d' },
  { name: 'bone-soft', dark: '#c8c7c0', light: '#4a505c' },
  { name: 'bone-dim', dark: '#9a9a95', light: '#767d8a' },
  { name: 'mist', dark: '#8b8f99', light: '#9aa1ad' },
]
const accents = [
  { name: 'azure', dark: '#57b8d4', light: '#2563eb', note: '唯一工作强调色' },
  { name: 'azure-bright', dark: '#6fd0ec', light: '#1d4ed8', note: '色块上的文字/高亮' },
  { name: 'azure-deep', dark: '#2c7e98', light: '#8ab0fb', note: '渐变起点' },
  { name: 'champagne', dark: '#c9ad7c', light: '#b07818', note: '数据副系列 · 慎用' },
  { name: 'rouge', dark: '#9a4250', light: '#b03a4c', note: '错误/危险 · 慎用' },
]
const typeScale = [
  { label: 'Hero · 4.25rem/700', cls: 'text-[2.6rem] font-bold leading-[1.12] tracking-tight', text: '让趋势有序，让开发有据' },
  { label: 'H2 · 2.7rem/700', cls: 'text-[1.9rem] font-bold leading-[1.15] tracking-tight', text: '从复杂到清晰，让决策更有方向' },
  { label: 'H3 · 1.5rem/700', cls: 'text-2xl font-bold', text: '数据地基 Data Foundation' },
  { label: 'Lead · 1.25rem/300', cls: 'text-xl font-light', text: '整合多维数据与行业知识，结合 AI 洞察与分析' },
  { label: 'Body · 15px/1.625', cls: 'text-[15px] leading-relaxed', text: '知序把趋势研究、产品规划、材料创新与客户提案整合进同一套证据链。' },
  { label: 'Caption · 13px', cls: 'text-[13px] text-bone-dim', text: '数据更新于 2026-07 · 覆盖 486 个品牌' },
]
const icons = [Database, Box, Sparkles, FileImage, LayoutDashboard, Activity, TrendingUp, Download, Search, Calendar, Info, ArrowRight, ChevronDown]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 pb-28 pt-28 lg:px-10">
    <p class="eyebrow text-azure">Guidelines · 设计规范</p>
    <h1 class="mt-3 text-[2rem] font-bold leading-tight tracking-tight text-bone">视觉基础样例</h1>
    <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-bone-soft">
      色彩、字体、表面、动效与图标的规范样例。完整 token 见
      <span class="font-display italic">DESIGN.md</span> 与 <code class="rounded bg-ink-800 px-1.5 py-0.5 text-[13px]">tokens/*.css</code>。
    </p>

    <!-- Brand -->
    <section class="mt-14">
      <h2 class="mb-5 text-[15px] font-semibold text-bone">Brand · 品牌标识</h2>
      <Panel :padding="24" class="flex flex-wrap items-center gap-6">
        <BrandMark :size="56" />
        <div>
          <div class="flex items-baseline gap-2.5">
            <span class="text-xl font-medium text-bone">知序</span>
            <span class="font-display text-xl italic text-bone-soft">FabricMind</span>
          </div>
          <p class="mt-1 text-[13px] text-bone-dim">经纬编织格 mark：三条 bone 经线 × 两条 azure 纬线 + 香槟金点</p>
        </div>
        <span class="ml-auto"><StatusDot label="Fashion Intelligence" /></span>
      </Panel>
    </section>

    <!-- Colors -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Colors · 色彩</h2>
      <p class="mb-5 text-[13px] text-bone-dim">
        深色：曜石黑表面 + 冷米白文字 + 电光青蓝强调。浅色：冷调白灰表面 + 近黑正文 + 宝蓝强调（对齐产品后台界面）。切换主题查看两套取值。
      </p>
      <div class="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        <div v-for="c in inkScale" :key="c.name" class="overflow-hidden rounded-xl border border-bone/10">
          <div class="h-16" :style="{ background: `var(--color-${c.name})` }"></div>
          <div class="px-2.5 py-2">
            <div class="text-[11px] font-medium text-bone">{{ c.name }}</div>
            <div class="text-[10px] tracking-wide text-bone-dim">{{ c.dark }} · {{ c.light }}</div>
          </div>
        </div>
      </div>
      <div class="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="c in textScale" :key="c.name" class="overflow-hidden rounded-xl border border-bone/10">
          <div class="flex h-14 items-center px-3" :style="{ color: `var(--color-${c.name})` }">
            <span class="text-[15px]">正文 Aa 123</span>
          </div>
          <div class="border-t border-bone/[0.06] px-2.5 py-2">
            <div class="text-[11px] font-medium text-bone">{{ c.name }}</div>
            <div class="text-[10px] tracking-wide text-bone-dim">{{ c.dark }} · {{ c.light }}</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <div v-for="c in accents" :key="c.name" class="overflow-hidden rounded-xl border border-bone/10">
          <div class="h-14" :style="{ background: `var(--color-${c.name})` }"></div>
          <div class="px-2.5 py-2">
            <div class="text-[11px] font-medium text-bone">{{ c.name }}</div>
            <div class="text-[10px] tracking-wide text-bone-dim">{{ c.note }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Typography · 字体</h2>
      <p class="mb-5 text-[13px] text-bone-dim">
        Inter + Noto Sans SC 承载正文；Cormorant Garamond <span class="font-display italic">italic</span> 只用于英文点缀与超大数字。
      </p>
      <Panel :padding="28" class="flex flex-col gap-5">
        <div v-for="t in typeScale" :key="t.label">
          <div class="mb-1 text-[10px] uppercase tracking-[0.22em] text-bone-dim">{{ t.label }}</div>
          <div class="text-bone" :class="t.cls">{{ t.text }}</div>
        </div>
        <div class="border-t border-bone/[0.06] pt-5">
          <div class="mb-1 text-[10px] uppercase tracking-[0.22em] text-bone-dim">Eyebrow · 0.72rem · 0.22em tracking</div>
          <p class="eyebrow text-azure">Solution · 解决方案</p>
        </div>
        <div class="flex items-baseline gap-4">
          <span class="font-display text-5xl italic text-bone-soft">01</span>
          <span class="text-[15px] text-bone-soft">意大利斜体衬线数字 — 步骤与章节编号</span>
        </div>
      </Panel>
    </section>

    <!-- Surfaces -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Surfaces · 表面</h2>
      <p class="mb-5 text-[13px] text-bone-dim">层次来自叠加的半透明，而不是重阴影。按钮永远是胶囊形。</p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">.panel</div>
          <p class="mt-2 text-[13px] leading-relaxed text-bone-soft">内容卡：对角高光渐变 + 1px 面板描边，无模糊。圆角 1rem。</p>
        </Panel>
        <Panel variant="glass" :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">.glass</div>
          <p class="mt-2 text-[13px] leading-relaxed text-bone-soft">磨砂浮层：12px backdrop-blur，用于悬浮芯片、对话框、仪表盘瓦片。</p>
        </Panel>
        <Panel glow :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">.glow-blue</div>
          <p class="mt-2 text-[13px] leading-relaxed text-bone-soft">右上角 azure 径向辉光，从卡片角部溢出。</p>
        </Panel>
        <div class="bg-grid rounded-2xl border border-bone/10 p-5">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">.bg-grid · 64px</div>
          <p class="mt-2 text-[13px] leading-relaxed text-bone-soft">细发丝技术网格背景层。</p>
        </div>
        <div class="bg-grid-fine bg-noise rounded-2xl border border-bone/10 p-5">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">.bg-grid-fine + .bg-noise</div>
          <p class="mt-2 text-[13px] leading-relaxed text-bone-soft">28px 细网格 + 低透明度胶片颗粒。</p>
        </div>
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">Radii · 圆角</div>
          <div class="mt-3 flex items-end gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-bone/15 text-[10px] text-bone-dim">.75</div>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-bone/15 text-[10px] text-bone-dim">1</div>
            <div class="flex h-12 w-12 items-center justify-center rounded-3xl border border-bone/15 text-[10px] text-bone-dim">1.5</div>
            <div class="flex h-8 items-center justify-center rounded-full border border-bone/15 px-4 text-[10px] text-bone-dim">pill</div>
          </div>
        </Panel>
      </div>
    </section>

    <!-- Motion -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Motion · 动效</h2>
      <p class="mb-5 text-[13px] text-bone-dim">
        平静而分层。缓动 <code class="rounded bg-ink-800 px-1.5 py-0.5 text-[12px]">cubic-bezier(0.22, 1, 0.36, 1)</code>
        （--ease-calm）；滚动显现 fade + rise 22–30px；全部尊重 prefers-reduced-motion。
      </p>
      <div class="grid gap-4 sm:grid-cols-3">
        <Panel :padding="20" class="relative overflow-hidden">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">Shimmer · 生成中</div>
          <div class="relative mt-3 h-10 overflow-hidden rounded-lg border border-bone/10">
            <div class="animate-shimmer absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-azure/15 to-transparent"></div>
          </div>
        </Panel>
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">Ping · 实时状态</div>
          <div class="mt-4"><StatusDot label="数据同步中" /></div>
        </Panel>
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-dim">Caret · 对话输入</div>
          <div class="mt-4 flex items-center text-[14px] text-bone-soft">
            为你生成本季材料机会分析<span class="animate-caret ml-0.5 inline-block h-4 w-[2px] bg-azure"></span>
          </div>
        </Panel>
      </div>
    </section>

    <!-- Icons -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Iconography · 图标</h2>
      <p class="mb-5 text-[13px] text-bone-dim">仅使用 Lucide 线性图标，描边 1.5–1.75，尺寸 12–20px，currentColor 着色。不用图标字体、面性图标或 emoji。</p>
      <Panel :padding="24">
        <div class="flex flex-wrap gap-6 text-azure">
          <component :is="ic" v-for="(ic, i) in icons" :key="i" class="size-5" :stroke-width="1.5" />
        </div>
      </Panel>
    </section>

    <!-- Voice -->
    <section class="mt-14">
      <h2 class="mb-2 text-[15px] font-semibold text-bone">Voice · 文案</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em] text-azure">Do</div>
          <ul class="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed text-bone-soft">
            <li>简体中文优先，英文用斜体衬线点缀：<span class="font-display italic">Data Foundation</span></li>
            <li>四字节奏与排比：让趋势有序，让开发有据 · 更快、更准、更有依据</li>
            <li>「」引出概念词：把「市场感觉」变成可验证的决策</li>
            <li>数字即证据：机会指数 78/100 · +18% · TOP 5</li>
            <li>CTA 用短动词短语：预约演示 · 生成上身效果 · 导出 PPT</li>
          </ul>
        </Panel>
        <Panel :padding="20">
          <div class="text-[11px] font-medium uppercase tracking-[0.22em]" style="color: color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))">Don't</div>
          <ul class="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed text-bone-soft">
            <li>不用 emoji，任何场合</li>
            <li>不用感叹号，不道歉 — 错误信息声明问题与修正方式</li>
            <li>不用系统绿/黄 — 语义色留在品牌盘内（azure / 香槟 / 胭脂红）</li>
            <li>不用矩形按钮 — 只有胶囊</li>
            <li>不引入第二强调色</li>
          </ul>
        </Panel>
      </div>
    </section>
  </div>
</template>
