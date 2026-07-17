<script setup lang="ts">
import Reveal from './Reveal.vue'

withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    copy?: string
    align?: 'center' | 'left'
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div :class="['flex flex-col gap-5', align === 'center' ? 'items-center text-center' : 'items-start text-left']">
    <Reveal v-if="eyebrow" :y="16">
      <div class="flex items-center gap-2.5">
        <span class="h-px w-6 bg-azure/50" />
        <span class="eyebrow text-azure">{{ eyebrow }}</span>
      </div>
    </Reveal>

    <Reveal :y="20" :delay="0.06">
      <h2
        :class="[
          'text-balance text-3xl font-bold leading-tight tracking-tight text-bone sm:text-4xl lg:text-[2.7rem]',
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl',
        ]"
      >
        {{ title }}
      </h2>
    </Reveal>

    <Reveal v-if="copy" :y="20" :delay="0.12">
      <p
        :class="[
          'text-[15px] leading-relaxed text-bone-dim sm:text-base',
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl',
        ]"
      >
        {{ copy }}
      </p>
    </Reveal>
  </div>
</template>
