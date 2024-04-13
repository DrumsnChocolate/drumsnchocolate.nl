<template>
  <div class="page">
    <HeroSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
'
<style lang="scss">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
'
