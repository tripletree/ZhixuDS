<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import SystemFramework from './components/SystemFramework.vue'
import FeatureMatrix from './components/FeatureMatrix.vue'
import BusinessScenarios from './components/BusinessScenarios.vue'
import CtaFooter from './components/CtaFooter.vue'
import ContactDialog from './components/ContactDialog.vue'
</script>

<template>
  <div class="relative min-h-screen text-bone antialiased">
    <SiteNav />
    <main>
      <HeroSection />
      <SystemFramework />
      <BusinessScenarios />
      <FeatureMatrix />
      <CtaFooter />
    </main>
    <ContactDialog />
  </div>
</template>
