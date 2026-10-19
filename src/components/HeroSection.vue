<script setup lang="ts">
import { ref } from 'vue'
import { useScrollProgress } from '../composables/useScrollProgress'

// 0 at the top of the page → 1 after scrolling ~75% of a viewport
const heroEl = ref<HTMLElement | null>(null)
const scrollOut = useScrollProgress(heroEl, (rect, vh) => -rect.top / (vh * 0.75))

const stats = [
  {
    num: '5+ 年',
    label: '專做網站，不是兼差',
    sub: '你擔心的狀況，我們多半都處理過'
  },
  {
    num: '100%',
    label: '網站完全屬於你',
    sub: '哪天想換廠商，網站和網址都帶得走'
  },
  {
    num: '30 分鐘內',
    label: '找得到人',
    sub: '直接問做網站的人，不用等業務傳話（營業時間內）'
  }
]
</script>

<template>
  <section id="top" ref="heroEl" class="hero-section">
    <div class="hero-container">
      <div class="hero-main" :style="{ '--p': scrollOut }">
        <div class="hero-copy">
          <!-- Tag / Subtitle -->
          <div class="hero-tag">
            <span class="pulse-indicator"></span>
            <span>網頁設計 · 軟體開發 · 系統維護 · 雙北服務全台</span>
          </div>

          <!-- Main Headline -->
          <h1 class="hero-title">
            從設計到上線維護，<br>
            <span class="gradient-text">一層一層，<br>幫你把網站做好。</span>
          </h1>

          <!-- Description -->
          <p class="hero-desc">
            從報價、設計、開發到上線維護，工程師兼PM。<br class="desktop-br">
            不轉包、不換窗口，有問題直接找寫程式的人!
          </p>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <a href="#services" class="btn btn-primary btn-lg">
              <span>了解服務內容</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" class="btn btn-secondary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>LINE 直接聊聊</span>
            </a>
          </div>
        </div>

        <!-- Brand Logo -->
        <div class="hero-visual">
          <div class="hero-visual-scroll">
            <div class="hero-cake">
              <img src="/brand/hero-cake.webp" alt="" width="465" height="468" fetchpriority="high">
            </div>

            <div class="brand-lockup">
              <p class="lockup-name">緹拉米蘇</p>
              <p class="lockup-en">Tiramisu Web Studio</p>
              <p class="lockup-tagline">網站開發 × 部署維運 × 使用者體驗</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 Stats Cards Grid -->
      <div class="stats-grid">
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i * 100" class="stat-card">
          <div v-count-up="stat.num" class="stat-number">{{ stat.num }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-sub">{{ stat.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 70% at 78% 40%, rgba(232, 201, 160, 0.35) 0%, transparent 70%),
    linear-gradient(180deg, var(--bg-page) 0%, #F3EAD6 100%);
  border-bottom: 1px solid var(--border-light);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 88px 24px 72px;
}

@media (max-width: 768px) {
  .hero-container {
    padding: 56px 20px 48px;
  }
}

.hero-main {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: center;
  gap: 48px;
}

/* Logo: rise-in on load, then a slow float with a breathing glow behind it */
.hero-visual {
  position: relative;
  animation: logo-enter 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-visual-scroll::before {
  content: '';
  position: absolute;
  inset: 4% 14% 30%;
  background: radial-gradient(circle, rgba(232, 201, 160, 0.7) 0%, transparent 68%);
  filter: blur(12px);
  animation: logo-glow 5s ease-in-out 1s infinite;
}

.hero-cake {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  animation: logo-float 5s ease-in-out 1s infinite;
}

.hero-cake img {
  display: block;
  width: 78%;
  height: auto;
  margin: 0 auto;
}

/* Wordmark set in live text (crisp at any size, and fixes the 部署 typo in the logo artwork) */
.brand-lockup {
  position: relative;
  margin-top: 4px;
  text-align: center;
  font-family: var(--font-display);
  color: var(--cocoa-dark);
}

.lockup-name {
  margin: 0;
  font-size: clamp(40px, 5.2vw, 64px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.22em;
  text-indent: 0.22em;
}

.lockup-en {
  margin: 10px 0 0;
  font-size: clamp(13px, 1.5vw, 19px);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  text-transform: uppercase;
}

.lockup-tagline {
  margin: 10px 0 0;
  font-size: clamp(12px, 1.35vw, 17px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-indent: 0.12em;
  color: var(--text-body);
}

@keyframes logo-enter {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes logo-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(-1.2deg);
  }
}

@keyframes logo-glow {
  0%, 100% {
    opacity: 0.55;
    transform: scale(0.96);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* Scroll-out: as the page scrolls, the copy drifts up and the logo zooms toward the viewer */
.hero-copy {
  opacity: calc(1 - var(--p, 0) * 1.3);
  transform: translateY(calc(var(--p, 0) * -48px));
  will-change: opacity, transform;
}

.hero-visual-scroll {
  position: relative;
  opacity: calc(1 - var(--p, 0) * 1.1);
  transform: translateY(calc(var(--p, 0) * 90px)) scale(calc(1 + var(--p, 0) * 0.22));
  transform-origin: center 40%;
  will-change: opacity, transform;
}

/* Stacked layout (logo above copy): the copy is what visitors scroll down to read,
   so only the logo recedes */
@media (max-width: 900px) {
  .hero-copy {
    opacity: 1;
    transform: none;
  }
  .hero-visual-scroll {
    transform: scale(calc(1 - var(--p, 0) * 0.12));
  }
}

/* Reduced motion: keep the fade-in and glow, drop all movement */
@keyframes logo-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes logo-glow-soft {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-visual {
    animation: logo-fade 1.2s ease both;
  }
  .hero-visual-scroll::before {
    animation-name: logo-glow-soft;
  }
  .hero-cake {
    animation: none;
  }
  .hero-copy,
  .hero-visual-scroll {
    transform: none;
  }
}

@media (max-width: 900px) {
  .hero-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .hero-visual {
    order: -1;
  }
  .hero-cake {
    max-width: 260px;
  }
  .lockup-name {
    font-size: 34px;
  }
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-card);
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-light);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}

.pulse-indicator {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(var(--accent-rgb), 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
  }
}

.hero-title {
  margin: 0;
  font-size: clamp(36px, 5.2vw, 60px);
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-main);
  max-width: 960px;
}

.gradient-text {
  color: var(--text-main);
  /* Highlight band follows the text across wrapped lines */
  background: linear-gradient(transparent 68%, rgba(232, 201, 160, 0.6) 68%, rgba(232, 201, 160, 0.6) 90%, transparent 90%);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.hero-desc {
  margin: 24px 0 0;
  font-size: clamp(17px, 2vw, 20px);
  color: var(--text-body);
  max-width: 680px;
  line-height: 1.6;
}

.desktop-br {
  display: block;
}

@media (max-width: 768px) {
  .desktop-br {
    display: none;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 16px;
  border-radius: var(--radius-md);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 64px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-medium);
  box-shadow: var(--shadow-md);
}

.stat-number {
  font-family: var(--font-mono);
  font-size: clamp(32px, 3.5vw, 42px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--accent);
  letter-spacing: -0.02em;
}

.stat-label {
  margin-top: 8px;
  color: var(--text-main);
  font-size: 15px;
  font-weight: 600;
}

.stat-sub {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: 13px;
}
</style>
