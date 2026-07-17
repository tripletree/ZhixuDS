<script setup lang="ts">
import { computed } from 'vue'
import { useReducedMotion } from 'motion-v'
import { Motion } from '../lib/motion'
import { ArrowRight, Sparkles, TrendingUp, Activity } from 'lucide-vue-next'
import { useContactDialog } from '../composables/useContactDialog'
import { useTheme } from '../composables/useTheme'

const { open: openContact } = useContactDialog()
const reduced = useReducedMotion()
const baseUrl = import.meta.env.BASE_URL
const EASE = [0.22, 1, 0.36, 1] as const

const { theme } = useTheme()
const heroSrc = computed(
  () => `${baseUrl}${theme.value === 'light' ? 'hero-light.webp' : 'hero-visual.png'}`,
)

// Layered entrance: each element floats up with an increasing delay.
const rise = (delay: number) => ({
  initial: reduced.value ? false : { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

// Slow, continuous drift for the "system is working" annotations.
const drift = (dur: number, dist = 12) =>
  reduced.value
    ? {}
    : { y: [0, -dist, 0], transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' } }
</script>

<template>
  <section
    id="top"
    class="relative flex h-screen min-h-[680px] w-full items-center overflow-hidden"
    style="background-color: rgb(var(--hero-base))"
  >
    <!-- Immersive placeholder image, anchored right -->
    <div class="absolute inset-y-0 right-0 w-full lg:w-[58%]">
      <Motion
        :initial="reduced ? false : { opacity: 0, scale: 1.06 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.6, ease: EASE }"
        class="h-full w-full"
      >
        <img
          :src="heroSrc"
          alt="知序 FabricMind 数据智能主视觉"
          class="h-full w-full object-cover object-right"
        />
      </Motion>
      <!-- Fade the image into the shared solid navy field on its left edge -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to right, rgb(var(--hero-base)) 0%, rgb(var(--hero-base)) 12%, rgb(var(--hero-base) / 0.7) 32%, rgb(var(--hero-base) / 0.3) 55%, transparent 78%)"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to top, rgb(var(--hero-base)) 0%, transparent 50%, rgb(var(--hero-base) / 0.3) 100%)"
      />
    </div>

    <!-- Layer 4: Noise overlay -->
    <div class="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />

    <!-- Floating data annotations over the visual -->
    <div class="pointer-events-none absolute inset-0 hidden lg:block">
      <Motion :animate="drift(7)" class="absolute right-[10%] top-[20%]">
        <div class="glass flex items-center gap-3 rounded-xl px-4 py-3">
          <Activity class="size-4 text-azure" />
          <div>
            <div class="eyebrow text-bone-dim">机会指数</div>
            <div class="text-lg font-semibold tracking-tight text-bone">78<span class="text-sm text-bone-dim">/100</span></div>
          </div>
        </div>
      </Motion>

      <Motion :animate="drift(9, 16)" class="absolute right-[40%] top-[34%]">
        <div class="glass flex items-center gap-2.5 rounded-lg px-3.5 py-2">
          <TrendingUp class="size-3.5 text-azure-bright" />
          <span class="text-[13px] tracking-wide text-bone-soft">趋势热度 · 针织 上行</span>
        </div>
      </Motion>

      <Motion :animate="drift(8, 10)" class="absolute right-[15%] top-[58%]">
        <div class="glass rounded-lg px-3.5 py-2.5">
          <div class="mb-1.5 flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-champagne" />
            <span class="eyebrow text-bone-dim">材料机会 TOP</span>
          </div>
          <div class="flex items-center gap-2 text-[13px] text-bone-soft">
            Lyocell <span class="font-medium text-bone">86</span>
          </div>
        </div>
      </Motion>

      <Motion :animate="drift(6, 8)" class="absolute right-[46%] top-[68%]">
        <div class="flex items-center gap-2 rounded-full border border-azure/20 bg-azure/5 px-3 py-1.5">
          <span class="relative flex size-1.5">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-azure/60" />
            <span class="relative inline-flex size-1.5 rounded-full bg-azure" />
          </span>
          <span class="text-[12px] tracking-wide text-azure-bright">智能引擎分析中</span>
        </div>
      </Motion>
    </div>

    <!-- Restrained, high-contrast copy column -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
      <div class="w-full max-w-xl lg:w-[42%] lg:max-w-none">
        <Motion v-bind="rise(0.1)">
          <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-bone/10 bg-bone/[0.03] px-3.5 py-1.5">
            <Sparkles class="size-3.5 text-champagne" />
            <span class="eyebrow text-bone-soft" style="font-size: 12px;"> 让时尚判断成为可验证的数据决策</span>
          </div>
        </Motion>

        <Motion v-bind="rise(0.24)">
          <h1 class="text-balance text-5xl font-bold leading-[1.12] tracking-tight text-bone sm:text-6xl lg:text-[4.25rem]">
            让趋势有序，<br />
            <span class="text-bone">让开发有据</span>
          </h1>
        </Motion>

        <Motion v-bind="rise(0.4)">
          <p class="mt-7 text-lg font-light leading-relaxed text-bone-soft sm:text-xl">
            面向纺织产品开发的<span class="font-normal text-bone">DATA+BI+AI</span><br />智能决策系统
          </p>
        </Motion>

        <Motion v-bind="rise(0.52)">
          <p class="mt-4 max-w-lg text-[15px] leading-relaxed text-bone-dim">
            以数据智能驱动更精准的趋势判断，更高效的产品研发<br />与更胜一筹的提案表达
          </p>
        </Motion>

        <Motion v-bind="rise(0.66)">
          <div class="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              class="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-[14px] font-medium tracking-wide text-ink-950 transition-all hover:bg-(--cta-hover) hover:shadow-[0_0_36px_-8px_var(--cta-glow)]"
              @click="openContact"
            >
              预约演示
              <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#framework"
              class="inline-flex items-center gap-2 rounded-full border border-bone/15 px-6 py-3.5 text-[14px] font-medium tracking-wide text-bone transition-all hover:border-bone/35 hover:bg-bone/[0.04]"
            >
              了解产品
            </a>
          </div>
        </Motion>


      </div>
    </div>


  </section>
</template>
