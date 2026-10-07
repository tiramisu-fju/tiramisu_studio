<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <a href="#top" class="brand-logo" @click="closeMenu">
        <img class="brand-icon" src="/brand/logo-icon.webp" alt="" width="44" height="44">
        <span class="brand-text">緹拉米蘇</span>
        <span class="brand-sub">Tiramisu Web Studio</span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="nav-links" aria-label="主選單">
        <a href="#services" class="nav-link">服務</a>
        <a href="#approach" class="nav-link">設計重點</a>
        <a href="#process" class="nav-link">合作流程</a>
        <a href="#about" class="nav-link">關於我們</a>
        <a href="#faq" class="nav-link">常見問題</a>
      </nav>

      <!-- Right actions: Consultation Button -->
      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary btn-sm">免費諮詢</a>

        <!-- Mobile hamburger toggle -->
        <button
          class="mobile-toggle"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="切換導航選單"
        >
          <span class="burger-bar" :class="{ open: isMenuOpen }"></span>
          <span class="burger-bar" :class="{ open: isMenuOpen }"></span>
          <span class="burger-bar" :class="{ open: isMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown navigation -->
    <div class="mobile-drawer" :class="{ active: isMenuOpen }">
      <div class="mobile-drawer-inner">
        <a href="#services" class="mobile-link" @click="closeMenu">服務範疇</a>
        <a href="#approach" class="mobile-link" @click="closeMenu">設計重點</a>
        <a href="#process" class="mobile-link" @click="closeMenu">合作流程</a>
        <a href="#about" class="mobile-link" @click="closeMenu">關於我們</a>
        <a href="#faq" class="mobile-link" @click="closeMenu">常見問題</a>

        <a href="#contact" class="btn btn-primary mobile-cta" @click="closeMenu">立即免費諮詢</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(249, 245, 232, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-light);
  transition: var(--transition);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-main);
}

.brand-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
  transition: var(--transition);
}

.brand-logo:hover .brand-icon {
  transform: rotate(-6deg) scale(1.05);
}

.brand-text {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.12em;
  color: var(--cocoa-dark);
}

.brand-sub {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 500;
  padding-left: 8px;
  border-left: 1px solid var(--border-medium);
}

@media (max-width: 900px) {
  .brand-sub {
    display: none;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-link {
  color: var(--text-main);
  font-size: 15px;
  font-weight: 500;
  padding: 6px 0;
  position: relative;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--accent);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--accent);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-sm {
  padding: 8px 18px;
  font-size: 14px;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.burger-bar {
  width: 22px;
  height: 2px;
  background: var(--text-main);
  border-radius: 2px;
  transition: var(--transition);
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}

.mobile-drawer {
  display: none;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-light);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

@media (max-width: 960px) {
  .mobile-drawer {
    display: block;
  }
  .mobile-drawer.active {
    max-height: 480px;
  }
}

.mobile-drawer-inner {
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mobile-link {
  font-size: 17px;
  font-weight: 500;
  color: var(--text-main);
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
}

.mobile-cta {
  width: 100%;
  margin-top: 8px;
}
</style>
