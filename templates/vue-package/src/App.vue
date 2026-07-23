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

// Hash routing: #/components and #/guidelines; anything else (incl. section
// anchors like #framework) renders the landing page.
const hash = ref(typeof window !== 'undefined' ? window.location.hash : '')
const onHashChange = () => {
  hash.value = window.location.hash
  if (hash.value.startsWith('#/')) window.scrollTo({ top: 0 })
}
onMounted(() => window.addEventListener('hashchange', onHashChange))
onUnmounted(() => window.removeEventListener('hashchange', onHashChange))

const route = computed<'landing' | 'components' | 'guidelines'>(() => {
  if (hash.value.startsWith('#/components')) return 'components'
  if (hash.value.startsWith('#/guidelines')) return 'guidelines'
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
