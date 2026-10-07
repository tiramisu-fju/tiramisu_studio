<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CaseItem } from '../types'

const emit = defineEmits<{
  (e: 'select-case', item: CaseItem): void
}>()

const categories = ['全部', '餐飲', '美業', '診所', '工作室'] as const
type Category = typeof categories[number]

const activeFilter = ref<Category>('全部')

const allCases: CaseItem[] = [
  {
    id: 'dining-booking',
    industry: '餐飲',
    kind: '示範作品',
    title: '[示範] 拾光義式餐酒館 · 24H 訂位菜單系統',
    tagline: '電話不再塞車，客人深夜也能自主訂位與備註',
    problem: '尖峰時段電話訂位漏接，人工登記易劃錯桌號與忌口備註',
    solution: '線上即時桌位訂位、LINE 自動推播通知、店員專屬後台看板',
    result: '手機版 Google Lighthouse 98 分，300ms 快速載入',
    highlights: ['24H 線上訂位', 'LINE 官方推播', '桌位狀態即時同步', 'Lighthouse 98分'],
    mockupBg: '#FFF7ED',
    accentColor: '#EA580C'
  },
  {
    id: 'salon-booking',
    industry: '美業',
    kind: '示範作品',
    title: '[示範] 莫奈日式美甲沙龍 · 預約與時段鎖定',
    tagline: '告別來回私訊對時間，精準掌控美甲師施作空檔',
    problem: '私訊預約回覆不完，人工確認時間耗費每日 2～3 小時且易被放鳥',
    solution: '依設計師自選時段、款式圖鑑加購、自動行事曆提醒與訂金扣抵',
    result: 'Redis 毫秒級時段防衝突鎖定，杜絕重複預約',
    highlights: ['多設計師時段排程', '施作項目計時加選', '防重複預約鎖定', '簡訊與 LINE 提醒'],
    mockupBg: '#FDF2F8',
    accentColor: '#DB2777'
  },
  {
    id: 'clinic-official',
    industry: '診所',
    kind: '示範作品',
    title: '[示範] 晨曦身心科診所 · 專業形象與門診表',
    tagline: '清晰傳遞溫暖專業感，讓病患第一時間找到看診時間',
    problem: '醫師代診與國定休診經常臨時異動，紙本或圖片公告難以搜尋',
    solution: '後台一鍵自主更新週門診時刻表、最新衛教公告、醫師資歷簡介',
    result: '符合 WCAG 2.1 AA 級無障礙閱讀規範，高齡友善大字體',
    highlights: ['自主更新門診動態', '醫療法規友善排版', '無障礙 AA 級標準', '在地 SEO 排名優化'],
    mockupBg: '#F0FDF4',
    accentColor: '#16A34A'
  },
  {
    id: 'photo-portfolio',
    industry: '工作室',
    kind: '示範作品',
    title: '[示範] 浮光映畫攝影工作室 · 作品集與方案詢價',
    tagline: '讓每一張光影作品以最高品質呈現，直接轉換成預約訂單',
    problem: '作品分散在 IG / FB 畫質被嚴重壓縮，客戶難以比較不同包套價格',
    solution: '瀑布流超高清作品集分類、拍攝方案線上即時試算、客製詢價單',
    result: '次世代 WebP/AVIF 自動壓縮圖床，首頁開啟小於 0.6 秒',
    highlights: ['極致無損圖片加載', '客製化方案試算器', '多維度作品分類標籤', '詢價意向自動收集'],
    mockupBg: '#F8FAFC',
    accentColor: '#0284C7'
  }
]

const filteredCases = computed(() => {
  if (activeFilter.value === '全部') return allCases
  return allCases.filter(c => c.industry === activeFilter.value)
})

const openDemo = (item: CaseItem) => {
  emit('select-case', item)
}
</script>

<template>
  <section id="cases" class="cases-section">
    <div class="container">
      <p class="section-label">03 / CASES</p>
      <h2 class="section-title">為不同產業打造的示範網站</h2>
      <p class="section-desc">
        以下是我們以真實產業需求為情境、完整開發的示範作品，每一個都可以實際操作。點進去試試看，你的網站上線後就會是這樣的品質。
      </p>

      <!-- Category Filter Pills -->
      <div class="filter-group" role="group" aria-label="依產業篩選作品">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="filter-pill"
          :class="{ active: activeFilter === cat }"
          @click="activeFilter = cat"
          :aria-pressed="activeFilter === cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Cases Grid -->
      <div class="cases-grid">
        <article
          v-for="item in filteredCases"
          :key="item.id"
          class="case-card"
        >
          <!-- Thumbnail illustration / mockup visual -->
          <div class="case-thumb" :style="{ backgroundColor: item.mockupBg }">
            <div class="thumb-browser-mockup">
              <div class="thumb-bar">
                <span></span><span></span><span></span>
              </div>
              <div class="thumb-content">
                <span class="thumb-tag">{{ item.industry }}</span>
                <div class="thumb-screen-text">{{ item.title.replace(/\[.*?\]\s*/, '') }}</div>
                <div class="thumb-metrics">⚡ {{ item.result.split('，')[0] }}</div>
              </div>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="case-body">
            <div class="case-badges">
              <span class="badge badge-accent">{{ item.industry }}</span>
              <span class="badge badge-muted">{{ item.kind }}</span>
            </div>

            <h3 class="case-title">{{ item.title }}</h3>

            <!-- Problem / Solution / Result Spec Table -->
            <div class="spec-grid">
              <span class="spec-key">解決什麼</span>
              <span class="spec-val">{{ item.problem }}</span>

              <span class="spec-key">功能規劃</span>
              <span class="spec-val">{{ item.solution }}</span>

              <span class="spec-key">技術亮點</span>
              <span class="spec-val spec-result">{{ item.result }}</span>
            </div>

            <button
              type="button"
              class="case-link-btn"
              @click="openDemo(item)"
            >
              <span>開啟示範網站</span>
              <span class="arrow-icon">→</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases-section {
  background: var(--bg-page);
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}

.filter-pill {
  min-height: 42px;
  padding: 8px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-medium);
  background: var(--bg-card);
  color: var(--text-main);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-pill:hover {
  border-color: var(--text-main);
  background: var(--bg-card-warm);
}

.filter-pill.active {
  background: var(--text-main);
  color: #FFFFFF;
  border-color: var(--text-main);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 28px;
}

@media (max-width: 640px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}

.case-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.case-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-medium);
  box-shadow: var(--shadow-md);
}

.case-thumb {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid var(--border-light);
}

.thumb-browser-mockup {
  background: #FFFFFF;
  width: 90%;
  max-width: 280px;
  border-radius: var(--radius-md);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.case-card:hover .thumb-browser-mockup {
  transform: scale(1.03);
}

.thumb-bar {
  background: var(--bg-muted);
  padding: 6px 10px;
  display: flex;
  gap: 4px;
}

.thumb-bar span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border-medium);
}

.thumb-content {
  padding: 16px 14px;
  text-align: center;
}

.thumb-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  background: var(--accent-light);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  margin-bottom: 6px;
}

.thumb-screen-text {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.thumb-metrics {
  font-size: 11px;
  color: #16A34A;
  font-weight: 600;
  margin-top: 6px;
}

.case-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.case-badges {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.case-title {
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.4;
}

.spec-grid {
  display: grid;
  grid-template-columns: 74px minmax(0, 1fr);
  gap: 8px 12px;
  font-size: 14.5px;
  margin-bottom: 24px;
  flex-grow: 1;
}

.spec-key {
  color: var(--text-muted);
  font-weight: 500;
}

.spec-val {
  color: var(--text-body);
  line-height: 1.5;
}

.spec-result {
  font-weight: 700;
  color: var(--text-main);
}

.case-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  font-weight: 600;
  font-size: 15px;
  color: var(--accent);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: auto;
  transition: var(--transition);
}

.case-link-btn:hover {
  color: var(--text-main);
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.case-link-btn:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
