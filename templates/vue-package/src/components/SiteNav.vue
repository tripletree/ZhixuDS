<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpRight, Moon, Sun } from 'lucide-vue-next'
import BrandMark from './ui/BrandMark.vue'
import { useContactDialog } from '../composables/useContactDialog'
import { useTheme } from '../composables/useTheme'

const props = withDefaults(
  defineProps<{ route?: 'landing' | 'components' | 'guidelines' }>(),
  { route: 'landing' },
)

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

type NavLink = {
  label: string
  active: boolean
} & (
  // `anchor` links scroll to an in-page section via a valid hash.
  | { kind: 'anchor'; href: string }
  // `route` links change the query-param view via the History API.
  | { kind: 'route'; view: '' | 'components' | 'guidelines' }
)

const links = computed<NavLink[]>(() =>
  props.route === 'landing'
    ? [
        { label: '解决方案', kind: 'anchor', href: '#framework', active: false },
        { label: '业务场景', kind: 'anchor', href: '#scenarios', active: false },
        { label: '产品能力', kind: 'anchor', href: '#features', active: false },
        { label: '组件库', kind: 'route', view: 'components', active: false },
        { label: '设计规范', kind: 'route', view: 'guidelines', active: false },
      ]
    : [
        { label: '落地页', kind: 'route', view: '', active: false },
        { label: '组件库', kind: 'route', view: 'components', active: props.route === 'components' },
        { label: '设计规范', kind: 'route', view: 'guidelines', active: props.route === 'guidelines' },
      ],
)

// Navigate via the History API and notify listeners (App.vue) with a popstate
// event. We deliberately avoid `#/...` hashes, which the preview runtime would
// pass to `document.querySelector` and throw an invalid-selector SyntaxError.
const navigate = (view: '' | 'components' | 'guidelines') => {
  const url = view ? `?view=${view}` : window.location.pathname
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0 })
}
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
        <template v-for="link in links" :key="link.href">
          <a
            v-if="link.kind === 'anchor'"
            :href="link.href"
            class="text-[13px] tracking-wide transition-colors hover:text-bone"
            :class="link.active ? 'text-azure' : 'text-bone-dim'"
          >
            {{ link.label }}
          </a>
          <button
            v-else
            type="button"
            class="text-[13px] tracking-wide transition-colors hover:text-bone"
            :class="link.active ? 'text-azure' : 'text-bone-dim'"
            @click="navigate(link.view)"
          >
            {{ link.label }}
          </button>
        </template>
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
