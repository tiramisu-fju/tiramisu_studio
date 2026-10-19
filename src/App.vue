<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-root">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Landing Page Sections -->
    <main>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-page);
}

main {
  flex-grow: 1;
}
</style>
