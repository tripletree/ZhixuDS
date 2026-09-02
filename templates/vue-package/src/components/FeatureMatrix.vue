<script setup lang="ts">
import { useReducedMotion } from 'motion-v'
import { Motion } from '../lib/motion'
import SectionHeading from './ui/SectionHeading.vue'
import DashboardMock from './visuals/DashboardMock.vue'
import TryOnMock from './visuals/TryOnMock.vue'
import ChatMock from './visuals/ChatMock.vue'
import ReportMock from './visuals/ReportMock.vue'

const reduced = useReducedMotion()
const EASE = [0.22, 1, 0.36, 1] as const

const reveal = (i: number) => ({
  initial: reduced.value ? false : { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
})

const cards = [
  {
    eyebrow: '智能试衣',
    title: '不打样，先看效果',
    desc: '选定模特、搭配上下装，AI 即时生成试穿效果，免打样快速验证款式与搭配，让选款更快、更直观。',
    mock: TryOnMock,
  },
  {
    eyebrow: 'AI 助手',
    title: '把分析师，装进对话框',
    desc: '用自然语言追问趋势、材料与竞品，AI 基于平台数据即时作答——复杂分析，一句话直达。',
    mock: ChatMock,
  },
  {
    eyebrow: '智能报告',
    title: '一键从洞察到提案',
    desc: '自动将分析结果整理为图文提案，一键生成导出 PPT——让团队把时间花在判断上，而不是排版上。',
    mock: ReportMock,
  },
]
</script>

<template>
  <section id="features" class="relative border-t border-bone/[0.06] py-14 lg:py-[72px]">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        eyebrow="Products · 产品能力"
        title="数据智能内核，三大AI应用"
        copy="多模块协同——数据智能内核与智能试衣、问答、提案三大应用让洞察一路落到业务。"
      />

      <div class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
        <!-- Module 1 · 一体化看板 (hero card) -->
        <Motion
          v-bind="reveal(0)"
          :while-hover="reduced ? {} : { y: -4 }"
          class="group md:col-span-2 lg:col-span-3"
        >
          <div
            class="panel glow-blue relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl p-7 transition-colors duration-300 hover:border-azure/20 lg:grid-cols-2 lg:p-9"
          >
            <div class="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />
            <div class="relative flex flex-col justify-center">
              <span class="eyebrow text-azure">品牌看板 / 秀场 / 数据分析</span>
              <h3 class="mt-4 text-balance text-2xl font-bold leading-snug tracking-tight text-bone sm:text-3xl">
                一体化看板，洞察全局
              </h3>
              <p class="mt-4 max-w-md text-[15px] leading-relaxed text-bone-dim">
                持续追踪品牌上新与全球秀场，从品类、人群、色彩、材料到肌理多维拆解，让模糊的「市场感觉」变成结构化、可验证的洞察。
              </p>
            </div>
            <div class="relative">
              <DashboardMock />
            </div>
          </div>
        </Motion>

        <!-- Modules 2 / 3 / 4 -->
        <Motion
          v-for="(card, i) in cards"
          :key="card.eyebrow"
          v-bind="reveal(i + 1)"
          :while-hover="reduced ? {} : { y: -6 }"
          class="group"
        >
          <div
            class="panel glass flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-7 transition-colors duration-300 hover:border-azure/20"
          >
            <div>
              <span class="eyebrow text-azure">{{ card.eyebrow }}</span>
              <h3 class="mt-3 text-xl font-bold tracking-tight text-bone">{{ card.title }}</h3>
              <p class="mt-3 text-[14px] leading-relaxed text-bone-dim">{{ card.desc }}</p>
            </div>
            <div class="mt-auto flex-1">
              <component :is="card.mock" />
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
