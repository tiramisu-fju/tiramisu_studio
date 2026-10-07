<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer-wrap">
    <div class="footer-container">
      <div class="footer-brand-row">
        <div class="footer-brand">
          <img class="footer-icon" src="/brand/logo-icon.webp" alt="" width="52" height="52" loading="lazy">
          <div>
            <div class="footer-logo">緹拉米蘇 <span class="footer-logo-en">Tiramisu Web Studio</span></div>
            <div class="footer-slogan">從設計到上線維護，一層一層幫你把網站做好</div>
          </div>
        </div>

        <button type="button" class="back-top-btn" @click="scrollToTop">
          <span>回到頂端</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-meta-row">
        <span>© 2026 緹拉米蘇 Tiramisu Web Studio</span>
        <span>台北市 · 服務全台遠端合作 · 本網站原始碼 100% 自研不外包</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrap {
  border-top: 1px solid var(--border-light);
  background: var(--bg-muted);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer-brand-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.footer-logo {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--cocoa-dark);
}

.footer-logo-en {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-left: 6px;
}

.footer-slogan {
  font-size: 13.5px;
  color: var(--text-muted);
  margin-top: 2px;
}

.back-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-main);
  cursor: pointer;
  transition: var(--transition);
}

.back-top-btn:hover {
  background: var(--text-main);
  color: #FFFFFF;
  border-color: var(--text-main);
}

.footer-divider {
  height: 1px;
  background: var(--border-light);
}

.footer-meta-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 13.5px;
  color: var(--text-muted);
}
</style>
