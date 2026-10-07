<script setup lang="ts">
const stats = [
  {
    num: '5+ 年',
    label: '兩人合計網站開發經驗',
    sub: '大廠與新創專案實戰積累'
  },
  {
    num: '100%',
    label: '原始碼與網域歸你所有',
    sub: '不綁架合約，無隱藏保留'
  },
  {
    num: '< 2 小時',
    label: '營業時間平均回覆',
    sub: '工程師直接溝通，免轉達'
  },
  {
    num: '3～6 個月',
    label: '上線後免費完整保固',
    sub: '安心驗收，長期系統支援'
  }
]
</script>

<template>
  <section id="top" class="hero-section">
    <div class="hero-container">
      <div class="hero-main">
        <div class="hero-copy">
          <!-- Tag / Subtitle -->
          <div class="hero-tag">
            <span class="pulse-indicator"></span>
            <span>網頁設計 · 軟體開發 · 系統維護 · 台北服務全台</span>
          </div>

          <!-- Main Headline -->
          <h1 class="hero-title">
            從設計到上線維護，<br>
            <span class="gradient-text">一層一層，<br>幫你把網站做好。</span>
          </h1>

          <!-- Description -->
          <p class="hero-desc">
            從報價、設計、開發到上線維護，全程都是同一組人。<br class="desktop-br">
            不轉包、不換窗口，有問題直接找寫程式的人。
          </p>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <a href="#cases" class="btn btn-primary btn-lg">
              <span>看示範作品</span>
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
          <img
            src="/brand/logo-full.webp"
            alt="緹拉米蘇 Tiramisu Web Studio — 網站開發 × 部屬維運 × 使用者體驗"
            width="720"
            height="716"
            fetchpriority="high"
          >
        </div>
      </div>

      <!-- 4 Stats Cards Grid -->
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-number">{{ stat.num }}</div>
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

.hero-visual img {
  width: 100%;
  max-width: 440px;
  height: auto;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .hero-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .hero-visual {
    order: -1;
  }
  .hero-visual img {
    max-width: 260px;
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
  font-weight: 800;
  letter-spacing: -0.03em;
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
