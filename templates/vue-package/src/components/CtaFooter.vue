<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import Reveal from './ui/Reveal.vue'
import { useContactDialog } from '../composables/useContactDialog'

const { open: openContact } = useContactDialog()
</script>

<template>
  <!-- Conversion CTA -->
  <section id="demo" class="relative overflow-hidden border-t border-bone/[0.06]">
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-30" />
    <div
      class="pointer-events-none absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50 blur-3xl"
      style="background: radial-gradient(circle, rgba(87, 184, 212, 0.16), transparent 65%)"
    />
    <div
      class="pointer-events-none absolute bottom-0 left-1/4 size-[26rem] rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, rgba(201, 173, 124, 0.12), transparent 65%)"
    />

    <div class="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
      <Reveal :y="16">
        <span class="eyebrow text-azure">Let's talk · 预约演示</span>
      </Reveal>
      <Reveal :y="24" :delay="0.08">
        <h2 class="ml-[31px] mr-[49px] mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.18] tracking-tight text-bone sm:text-5xl">
          与知序一起，让每一次决策<br />更有据可循
        </h2>
      </Reveal>
      <Reveal :y="24" :delay="0.16">
        <p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-bone-dim">
          预约一次产品演示，看见数据智能如何融入你的产品开发与提案流程。
        </p>
      </Reveal>
      <Reveal :y="24" :delay="0.24">
        <div class="mt-10 flex justify-center">
          <button
            type="button"
            class="group inline-flex items-center gap-2.5 rounded-full bg-bone px-8 py-4 text-[15px] font-medium tracking-wide text-ink-950 transition-all hover:bg-(--cta-hover) hover:shadow-[0_0_44px_-8px_var(--cta-glow)]"
            @click="openContact"
          >
            预约产品演示
            <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-bone/[0.06] bg-ink-950">
    <!-- Compliance bar -->
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-[12px] text-mist sm:flex-row lg:px-10"
      >
        <span>© 2026 知序 FabricMind，保留所有权利.</span>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-bone-soft"
        >
          京ICP备10009259号
        </a>
      </div>
  </footer>
</template>
