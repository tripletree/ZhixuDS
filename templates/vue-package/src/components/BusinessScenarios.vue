<script setup lang="ts">
import { useReducedMotion } from 'motion-v'
import { Motion } from '../lib/motion'
import Reveal from './ui/Reveal.vue'
import { useTheme } from '../composables/useTheme'

const reduced = useReducedMotion()
const baseUrl = import.meta.env.BASE_URL
const EASE = [0.22, 1, 0.36, 1] as const
const { theme } = useTheme()

// Each scenario ships a dark and a light placeholder (`*-light.svg`)
const imgSrc = (img: string) =>
  baseUrl + (theme.value === 'light' ? img.replace(/\.svg$/, '-light.svg') : img)

const scenarios = [
  {
    img: 'scenarios/trend-research.svg',
    title: '趋势研究与方向规划',
    desc: '识别全球趋势与文化信号，预测风向，明确产品开发方向。',
  },
  {
    img: 'scenarios/product-planning.svg',
    title: '产品企划与系列开发',
    desc: 'AI 辅助企划与款式组合，智能推荐材料与色彩，提升开发效率。',
  },
  {
    img: 'scenarios/material-innovation.svg',
    title: '材料创新与应用',
    desc: '基于性能、成本与可持续性评估，识别更优材料解决方案。',
  },
  {
    img: 'scenarios/client-proposal.svg',
    title: '客户提案与沟通',
    desc: '生成专业提案与可视化内容，提升沟通效率与客户信任。',
  },
]

const cardMotion = (i: number) => ({
  initial: reduced.value ? false : { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, amount: 0.25 },
  transition: { duration: 0.65, delay: i * 0.1, ease: EASE },
})
</script>

<template>
  <section id="scenarios" class="relative border-t border-bone/[0.06] py-14 lg:py-[72px]">
    <!-- Brand color wash behind the scenario cards so their frosted glass has content to blur -->
    <div class="section-wash section-wash--scenarios" />
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-20" />
    <div class="relative mx-auto max-w-7xl px-6 lg:px-10">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <!-- Left anchor copy -->
        <div class="lg:col-span-4 lg:pt-4">
          <Reveal :y="16">
            <div class="flex items-center gap-2.5">
              <span class="h-px w-6 bg-azure/50" />
              <span class="eyebrow text-azure">Scenarios · 业务场景</span>
            </div>
          </Reveal>
          <Reveal :y="22" :delay="0.06">
            <h2 class="mt-6 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-bone lg:text-[2.9rem]">
              面向时尚产业<br />核心场景
            </h2>
          </Reveal>
          <Reveal :y="22" :delay="0.12">
            <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-bone-dim">
              覆盖产品开发全流程，助力团队更快、更准、更有依据地做出决策。
            </p>
          </Reveal>
        </div>

        <!-- Right cards -->
        <div class="lg:col-span-8">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Motion
              v-for="(s, i) in scenarios"
              :key="s.title"
              v-bind="cardMotion(i)"
              :while-hover="reduced ? {} : { y: -6 }"
              class="group"
            >
              <div
                class="panel glow-blue glow-blue-sm relative flex h-full flex-col overflow-hidden rounded-2xl p-3 transition-colors duration-300 hover:border-azure/25"
              >
                <div class="relative z-[1] overflow-hidden rounded-xl border border-bone/[0.07]">
                  <img
                    :src="imgSrc(s.img)"
                    :alt="s.title"
                    class="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  <span class="absolute left-3 top-3 font-display text-sm italic text-bone-soft/70">0{{ i + 1 }}</span>
                </div>
                <h3 class="relative z-[1] mt-4 px-1 text-[15px] font-semibold tracking-tight text-bone">{{ s.title }}</h3>
                <p class="relative z-[1] mt-1.5 px-1 pb-1 text-[13px] leading-relaxed text-bone-dim">{{ s.desc }}</p>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
