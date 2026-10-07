<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import FoundingClientsSection from './components/FoundingClientsSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const accentOptions = [
  { name: '可可粉棕', hex: '#8B4523' },
  { name: '焦糖咖啡', hex: '#A8622E' },
  { name: '濃縮黑咖啡', hex: '#4F1D08' },
  { name: '薄荷葉綠', hex: '#5B7536' }
]

const currentAccent = ref('#8B4523')

const hexToRgb = (hex: string) => {
  const cleanHex = hex.replace('#', '')
  const bigint = parseInt(cleanHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}

const applyAccent = (hex: string) => {
  currentAccent.value = hex
  document.documentElement.style.setProperty('--accent', hex)
  document.documentElement.style.setProperty('--accent-rgb', hexToRgb(hex))
}

onMounted(() => {
  applyAccent(currentAccent.value)
})
</script>

<template>
  <div class="app-root">
    <!-- Navigation Bar with Dynamic Accent Switcher -->
    <Navbar
      :current-accent="currentAccent"
      :accent-options="accentOptions"
      @update:accent="applyAccent"
    />

    <!-- Main Landing Page Sections -->
    <main>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ProcessSection />
      <FoundingClientsSection />
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
