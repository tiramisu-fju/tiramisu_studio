<script setup lang="ts">
import type { CaseItem } from '../types'

defineProps<{
  activeCase: CaseItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div v-if="activeCase" class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-card">
      <!-- Modal Header -->
      <div class="modal-header">
        <div class="modal-badge-row">
          <span class="badge badge-accent">{{ activeCase.industry }}</span>
          <span class="badge badge-muted">{{ activeCase.kind }}</span>
        </div>
        <button class="modal-close-btn" @click="emit('close')" aria-label="關閉視窗">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <h3 class="modal-title">{{ activeCase.title }}</h3>
        <p class="modal-tagline">{{ activeCase.tagline }}</p>

        <!-- Simulated Browser Preview Frame -->
        <div class="browser-frame">
          <div class="browser-bar">
            <div class="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="browser-address">
              https://demo.tiramisustudio.tw/{{ activeCase.id }}
            </div>
          </div>
          <div class="browser-content" :style="{ backgroundColor: activeCase.mockupBg }">
            <div class="preview-hero">
              <div class="preview-chip">{{ activeCase.industry }}專用架構</div>
              <h4>{{ activeCase.title }}</h4>
              <p>完整功能支援電腦版與手機版操作，即開即用</p>
              <div class="preview-mock-action">
                <button class="btn btn-primary btn-sm">測試線上操作</button>
                <button class="btn btn-secondary btn-sm">檢視後台功能</button>
              </div>
            </div>

            <!-- Features Highlights Grid -->
            <div class="preview-highlights">
              <div v-for="hl in activeCase.highlights" :key="hl" class="highlight-chip">
                ✓ {{ hl }}
              </div>
            </div>
          </div>
        </div>

        <!-- Problem / Solution / Result Detail List -->
        <div class="detail-grid">
          <div class="detail-box">
            <span class="detail-label">解決痛點</span>
            <p class="detail-text">{{ activeCase.problem }}</p>
          </div>
          <div class="detail-box">
            <span class="detail-label">規劃功能</span>
            <p class="detail-text">{{ activeCase.solution }}</p>
          </div>
          <div class="detail-box highlight-box">
            <span class="detail-label">技術指標亮點</span>
            <p class="detail-text font-bold">{{ activeCase.result }}</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <span class="modal-note">想了解類似方案的建置細節與預算？</span>
        <div class="modal-footer-actions">
          <button class="btn btn-secondary btn-sm" @click="emit('close')">關閉預覽</button>
          <a href="#contact" class="btn btn-primary btn-sm" @click="emit('close')">預約此方案諮詢</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(42, 18, 6, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  padding: 24px 28px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-light);
}

.modal-badge-row {
  display: flex;
  gap: 8px;
}

.modal-close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--bg-muted);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.modal-close-btn:hover {
  background: var(--border-medium);
  transform: rotate(90deg);
}

.modal-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-title {
  margin: 0;
  font-size: 26px;
  color: var(--text-main);
  font-weight: 700;
}

.modal-tagline {
  margin: 0;
  color: var(--text-muted);
  font-size: 15px;
}

.browser-frame {
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.browser-bar {
  background: var(--bg-muted);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border-light);
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-medium);
}

.browser-dots span:nth-child(1) { background: #FF5F56; }
.browser-dots span:nth-child(2) { background: #FFBD2E; }
.browser-dots span:nth-child(3) { background: #27C93F; }

.browser-address {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  background: #FFFFFF;
  padding: 3px 12px;
  border-radius: 6px;
  flex-grow: 1;
}

.browser-content {
  padding: 36px 24px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.preview-hero {
  max-width: 500px;
}

.preview-chip {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.85);
  padding: 3px 10px;
  border-radius: 99px;
  margin-bottom: 10px;
  color: var(--text-main);
}

.preview-hero h4 {
  margin: 0 0 8px;
  font-size: 20px;
  color: var(--text-main);
}

.preview-hero p {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--text-body);
}

.preview-mock-action {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.preview-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.highlight-chip {
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-main);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.detail-box {
  background: var(--bg-page);
  border-radius: var(--radius-md);
  padding: 16px;
  border: 1px solid var(--border-light);
}

.highlight-box {
  background: var(--accent-light);
  border-color: rgba(var(--accent-rgb), 0.2);
}

.detail-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  display: block;
  margin-bottom: 4px;
}

.detail-text {
  margin: 0;
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.5;
}

.font-bold {
  font-weight: 700;
  color: var(--accent);
}

.modal-footer {
  padding: 18px 28px;
  border-top: 1px solid var(--border-light);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--bg-card-warm);
  border-bottom-left-radius: var(--radius-xl);
  border-bottom-right-radius: var(--radius-xl);
}

.modal-note {
  font-size: 13.5px;
  color: var(--text-muted);
}

.modal-footer-actions {
  display: flex;
  gap: 10px;
}
</style>
