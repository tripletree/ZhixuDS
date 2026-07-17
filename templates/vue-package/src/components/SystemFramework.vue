<script setup lang="ts">
import { useReducedMotion } from 'motion-v'
import { Motion } from '../lib/motion'
import { Database, Box, Sparkles, FileImage, LayoutDashboard, ArrowRight } from 'lucide-vue-next'
import SectionHeading from './ui/SectionHeading.vue'

const reduced = useReducedMotion()
const EASE = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    icon: Database,
    zh: '行业数据底座',
    en: 'Data Foundation',
    desc: '整合市场、品牌、材料、秀场、趋势等多源数据，构建高质量行业知识图谱。',
  },
  {
    icon: Box,
    zh: '分析与决策引擎',
    en: 'Decision Engine',
    desc: '多维建模与指标体系，洞察关联与机会，输出可验证的决策建议。',
  },
  {
    icon: Sparkles,
    zh: 'AI 洞察工具',
    en: 'AI Insight',
    desc: 'AI 驱动的趋势解读、机会发现、概念生成与方案评估。',
  },
  {
    icon: FileImage,
    zh: '报告输出',
    en: 'Report Output',
    desc: '自动化生成图文报告与提案材料，支持高度自定义与品牌化。',
  },
  {
    icon: LayoutDashboard,
    zh: '业务应用前端',
    en: 'Business Application',
    desc: '角色化工作台与协作空间，让洞察落地到日常开发与提案流程。',
  },
]

const cardMotion = (i: number) => ({
  initial: reduced.value ? false : { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
})

const connectorMotion = (i: number) => ({
  initial: reduced.value ? false : { opacity: 0, scale: 0.6 },
  whileInView: { opacity: 1, scale: 1 },
  inViewOptions: { once: true, amount: 0.4 },
  transition: { duration: 0.4, delay: i * 0.1 + 0.28, ease: EASE },
})
</script>

<template>
  <section id="framework" class="relative py-14 lg:py-[72px]">
    <!-- Blend the top of this section into the hero's navy, fading down into the dark -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
      style="background: linear-gradient(to bottom, rgb(var(--hero-base)) 0%, rgb(var(--hero-base) / 0.55) 30%, rgb(var(--hero-base) / 0.18) 60%, transparent 100%)"
    />
    <!-- Soft top-right azure halo echoing the hero glow -->
    <div
      class="pointer-events-none absolute right-0 top-0 h-[520px] w-[60%] blur-3xl"
      style="background: radial-gradient(ellipse at 75% 0%, rgba(56, 189, 248, 0.16) 0%, rgba(56, 189, 248, 0.05) 38%, transparent 70%);"
    />
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div class="relative mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        eyebrow="Solution · 解决方案"
        title="从复杂到清晰，让决策更有方向"
        copy="整合多维数据与行业知识，结合 AI 洞察与分析，为产品开发与客户提案提供可靠的决策依据。"
      />

      <!-- Pipeline -->
      <div class="mt-16 flex flex-col items-stretch gap-4 lg:mt-20 lg:flex-row">
        <template v-for="(step, i) in steps" :key="step.en">
          <!-- Card -->
          <Motion
            v-bind="cardMotion(i)"
            :while-hover="reduced ? {} : { y: -6 }"
            class="group relative flex-1"
          >
            <div
              class="panel glow-blue glow-blue-sm relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-azure/25"
            >
              <span class="absolute right-5 top-5 font-display text-sm italic text-bone-dim/50">
                0{{ i + 1 }}
              </span>
              <div
                class="flex size-12 items-center justify-center rounded-xl border border-bone/10 bg-bone/[0.03] text-azure transition-all duration-300 group-hover:border-azure/30 group-hover:bg-azure/10"
              >
                <component
                  :is="step.icon"
                  class="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  :stroke-width="1.5"
                />
              </div>
              <div class="space-y-1">
                <h3 class="text-[15px] font-semibold tracking-tight text-bone">{{ step.zh }}</h3>
                <p class="font-display text-[13px] italic tracking-wide text-bone-dim">{{ step.en }}</p>
              </div>
              <p class="text-[13px] leading-relaxed text-bone-dim">{{ step.desc }}</p>
            </div>
          </Motion>

          <!-- Connector -->
          <Motion
            v-if="i < steps.length - 1"
            v-bind="connectorMotion(i)"
            class="flex shrink-0 items-center justify-center text-mist-dark lg:px-1"
          >
            <ArrowRight class="size-5 rotate-90 lg:rotate-0" :stroke-width="1.5" />
          </Motion>
        </template>
      </div>
    </div>
  </section>
</template>
