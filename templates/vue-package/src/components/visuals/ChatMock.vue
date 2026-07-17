<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const prompts = ['趋势预警', '材料匹配', '竞品对比']
// mini bar chart inside the AI answer
const bars = [38, 52, 44, 66, 58, 78, 70]
</script>

<template>
  <div class="flex h-full min-h-52 w-full flex-col justify-between gap-3 rounded-xl">
    <div class="space-y-2.5">
      <!-- user question -->
      <div class="flex justify-end">
        <div class="max-w-[78%] rounded-2xl rounded-tr-sm border border-bone/10 bg-bone/[0.06] px-3.5 py-2 text-[12px] leading-relaxed text-bone-soft">
          对比近三月针织品类的上新趋势
        </div>
      </div>

      <!-- AI answer with embedded chart -->
      <div class="flex justify-start">
        <div class="max-w-[88%] space-y-2 rounded-2xl rounded-tl-sm border border-azure/15 bg-azure/[0.05] px-3.5 py-2.5 backdrop-blur">
          <p class="text-[12px] leading-relaxed text-bone">
            近三月针织上新环比 <span class="font-medium text-azure-bright">+18%</span>，集中于轻薄精纺与提花结构，机会指数高于均值。
          </p>
          <svg viewBox="0 0 140 44" class="h-11 w-full">
            <g v-for="(b, i) in bars" :key="i">
              <rect
                :x="i * 20 + 4"
                :y="44 - (b / 100) * 40"
                width="12"
                :height="(b / 100) * 40"
                rx="2"
                class="fill-azure"
                :fill-opacity="0.35 + (b / 100) * 0.5"
              />
            </g>
          </svg>
          <p class="text-[9px] tracking-wide text-mist">基于平台数据 · 含图表依据</p>
        </div>
      </div>
    </div>

    <div class="space-y-2.5">
      <!-- prompt suggestion pills -->
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="p in prompts"
          :key="p"
          class="rounded-full border border-bone/10 bg-bone/[0.03] px-2.5 py-1 text-[10px] tracking-wide text-bone-dim"
        >
          {{ p }}
        </span>
      </div>

      <!-- input -->
      <div class="flex items-center gap-2 rounded-xl border border-bone/10 bg-ink-850/80 px-3 py-2">
        <span class="text-[12px] text-bone-dim">向知序提问</span>
        <span class="inline-block h-3.5 w-px animate-caret bg-azure" />
        <span class="flex-1" />
        <span class="flex size-6 items-center justify-center rounded-lg bg-azure/20 text-azure-bright shadow-[0_0_14px_-3px_rgba(87,184,212,0.7)]">
          <ArrowUp class="size-3.5" />
        </span>
      </div>
    </div>
  </div>
</template>
