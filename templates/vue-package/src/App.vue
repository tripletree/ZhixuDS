<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import SystemFramework from './components/SystemFramework.vue'
import FeatureMatrix from './components/FeatureMatrix.vue'
import BusinessScenarios from './components/BusinessScenarios.vue'
import CtaFooter from './components/CtaFooter.vue'
import ContactDialog from './components/ContactDialog.vue'
import ComponentsPage from './pages/ComponentsPage.vue'
import GuidelinesPage from './pages/GuidelinesPage.vue'

// Query-param routing via the History API: ?view=components / ?view=guidelines.
// We avoid `#/...` hashes because the preview runtime runs
// `document.querySelector(location.hash)` on hash changes, and `#/components`
// is not a valid CSS selector (throws SyntaxError). Section anchors like
// `#framework` remain valid hashes and still work for in-page scrolling.
const search = ref(typeof window !== 'undefined' ? window.location.search : '')
const onPopState = () => {
  search.value = window.location.search
}
onMounted(() => window.addEventListener('popstate', onPopState))
onUnmounted(() => window.removeEventListener('popstate', onPopState))

const route = computed<'landing' | 'components' | 'guidelines'>(() => {
  const view = new URLSearchParams(search.value).get('view')
  if (view === 'components') return 'components'
  if (view === 'guidelines') return 'guidelines'
  return 'landing'
})
</script>

<template>
  <div class="relative min-h-screen text-bone antialiased">
    <SiteNav :route="route" />
    <main v-if="route === 'landing'">
      <HeroSection />
      <SystemFramework />
      <BusinessScenarios />
      <FeatureMatrix />
      <CtaFooter />
    </main>
    <ComponentsPage v-else-if="route === 'components'" />
    <GuidelinesPage v-else />
    <ContactDialog />
  </div>
</template>
