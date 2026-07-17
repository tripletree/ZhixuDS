<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpRight, Moon, Sun } from 'lucide-vue-next'
import BrandMark from './ui/BrandMark.vue'
import { useContactDialog } from '../composables/useContactDialog'
import { useTheme } from '../composables/useTheme'

const { open: openContact } = useContactDialog()
const { theme, toggle: toggleTheme } = useTheme()

const scrolled = ref(false)
const onScroll = () => {
  scrolled.value = window.scrollY > 24
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { label: '解决方案', href: '#framework' },
  { label: '业务场景', href: '#scenarios' },
  { label: '产品能力', href: '#features' },
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'border-b border-bone/10 bg-ink-950/70 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
      <a href="#top" class="group flex items-center gap-3">
        <BrandMark :size="34" />
        <span class="flex items-baseline gap-2 leading-none">
          <span class="text-[15px] font-medium tracking-wide text-bone">知序</span>
          <span class="font-display text-[15px] italic tracking-wide text-bone-soft">FabricMind</span>
        </span>
      </a>

      <div class="hidden items-center gap-9 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-[13px] tracking-wide text-bone-dim transition-colors hover:text-bone"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.03] text-bone-soft transition-all hover:border-azure/40 hover:bg-azure/10 hover:text-bone"
          :aria-label="theme === 'dark' ? '切换到浅色主题' : '切换到深色主题'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="size-4" :stroke-width="1.75" />
          <Moon v-else class="size-4" :stroke-width="1.75" />
        </button>

        <button
          type="button"
          class="group inline-flex items-center gap-1.5 rounded-full border border-bone/15 bg-bone/[0.03] px-4 py-2 text-[13px] font-medium tracking-wide text-bone transition-all hover:border-azure/40 hover:bg-azure/10"
          @click="openContact"
        >
          预约演示
          <ArrowUpRight class="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </nav>
  </header>
</template>
