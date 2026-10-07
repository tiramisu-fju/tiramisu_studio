<script setup lang="ts">
import type { StepItem } from '../types'

const steps: StepItem[] = [
  {
    no: '01',
    title: '需求洽談',
    desc: '了解品牌背景、網站需求、目標客群與預期功能。',
    flow: ['了解你的需求', '找出真正需要解決的問題']
  },
  {
    no: '02',
    title: '需求分析與規劃',
    desc: '整理網站架構、功能需求與頁面內容，規劃整體網站方向。',
    flow: ['網站架構', '功能規劃', '使用者流程']
  },
  {
    no: '03',
    title: 'UI／UX 設計',
    desc: '依照品牌調性與使用者需求，進行網站介面與使用體驗設計。',
    flow: ['Wireframe', 'UI 設計', 'RWD 響應式設計']
  },
  {
    no: '04',
    title: '網站／系統開發',
    desc: '將設計轉化為實際可運作的網站與系統，完成前後端功能及資料串接。',
    flow: ['前端開發', '後端開發', 'API／資料庫整合']
  },
  {
    no: '05',
    title: '測試與優化',
    desc: '進行不同裝置、瀏覽器與功能測試，確保網站穩定且操作順暢。',
    flow: ['功能測試', 'RWD 測試', '效能優化', 'Bug 修正']
  },
  {
    no: '06',
    title: '部署上線',
    desc: '完成正式環境建置、網域與 SSL 設定，讓網站正式與使用者見面。',
    flow: ['主機部署', '網域設定', 'SSL', '正式上線']
  },
  {
    no: '07',
    title: '維護與持續優化',
    desc: '網站上線後持續提供維護、更新與技術支援。',
    flow: ['持續維護', '功能更新', '效能優化', '陪伴品牌成長']
  }
]

const guarantees = [
  {
    title: '簽約保障',
    desc: '明確載明專案範疇、修改次數、交付時程與驗收標準，雙方權益有保障。'
  },
  {
    title: '三期付款',
    desc: '簽約訂金 40%、設計稿確認 30%、上線驗收 30%，依階段付款最安心。'
  },
  {
    title: '進度透明',
    desc: '每週主動同步開發進度，提供專屬 Staging 測試網址隨時可操作查看。'
  },
  {
    title: '上線不失聯',
    desc: '保固期內非人為問題免費除錯，由原班開發工程師親自回覆支援。'
  }
]
</script>

<template>
  <section id="process" class="process-section">
    <div class="container">
      <p class="section-label-dark">03 / PROCESS</p>
      <h2 class="section-title-dark">合作流程</h2>
      <p class="flow-summary">洽談 → 規劃 → 設計 → 開發 → 測試 → 上線 → 維護</p>
      <p class="section-desc-dark">
        每一個階段都清楚可見，不讓你的專案陷入資訊黑洞。
      </p>

      <!-- 7 Steps Timeline -->
      <ol class="steps-list">
        <li v-for="s in steps" :key="s.no" class="step-item">
          <div class="step-no">{{ s.no }}</div>
          <div class="step-main">
            <h3 class="step-title">{{ s.title }}</h3>
            <p class="step-desc">{{ s.desc }}</p>
          </div>
          <div class="step-flow">
            <template v-for="(f, i) in s.flow" :key="f">
              <span v-if="i > 0" class="flow-arrow" aria-hidden="true">→</span>
              <span class="flow-chip">{{ f }}</span>
            </template>
          </div>
        </li>
      </ol>

      <!-- 4 Guarantees Grid -->
      <div class="guarantees-grid">
        <div v-for="g in guarantees" :key="g.title" class="guarantee-card">
          <div class="guarantee-title">
            <svg class="guarantee-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>{{ g.title }}</span>
          </div>
          <div class="guarantee-desc">{{ g.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  background: var(--bg-dark);
  color: var(--text-white);
}

.section-label-dark {
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: var(--ladyfinger);
}

.section-title-dark {
  margin: 8px 0 12px;
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 700;
  line-height: 1.3;
  color: #FFFFFF;
}

.flow-summary {
  margin: 0 0 10px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ladyfinger);
}

.section-desc-dark {
  margin: 0 0 44px;
  color: var(--text-light);
  font-size: 16px;
  max-width: 720px;
}

.steps-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.step-item {
  position: relative;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 8px 28px;
  padding: 22px 0;
  border-top: 1px solid var(--border-dark);
}

.step-item:last-child {
  border-bottom: 1px solid var(--border-dark);
}

.step-no {
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  color: var(--ladyfinger);
}

.step-title {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  color: #FFFFFF;
}

.step-desc {
  margin: 6px 0 0;
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.step-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 8px;
}

.flow-chip {
  font-size: 13px;
  font-weight: 600;
  color: var(--ladyfinger);
  background: var(--bg-dark-card);
  border: 1px solid var(--border-dark);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.flow-arrow {
  font-size: 13px;
  color: var(--text-muted);
}

@media (max-width: 860px) {
  .step-item {
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: start;
  }
  .step-no {
    font-size: 26px;
  }
  .step-flow {
    grid-column: 2;
    margin-top: 6px;
  }
}

.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 60px;
}

.guarantee-card {
  border: 1px solid var(--border-dark);
  background: var(--bg-dark-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: var(--transition);
}

.guarantee-card:hover {
  border-color: #6B4530;
  transform: translateY(-2px);
}

.guarantee-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
}

.guarantee-icon {
  color: var(--ladyfinger);
}

.guarantee-desc {
  color: var(--text-light);
  font-size: 14.5px;
  margin-top: 10px;
  line-height: 1.6;
}
</style>
