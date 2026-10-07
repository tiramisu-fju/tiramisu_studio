<script setup lang="ts">
import type { PricingPlan } from '../types'

const plans: PricingPlan[] = [
  {
    id: 'landing',
    name: '輕量形象站',
    price: '28,000',
    unit: '起',
    description: '適合剛起步的店家、個人品牌或實體店面宣傳',
    features: [
      '單頁式精緻響應式架構（5～6 個區塊）',
      '設計風格客製化，修改確認 3 次',
      'RWD 全尺寸適配、基礎在地 SEO 設定',
      '極致載入速度調校（Lighthouse 90+）',
      '上線後 3 個月免費錯誤修正保固'
    ],
    ctaText: '諮詢此方案'
  },
  {
    id: 'brand',
    name: '品牌官網',
    price: '58,000',
    unit: '起',
    popular: true,
    description: '適合中小企業、診所、需要自主發布與更新內容的品牌',
    features: [
      '5～8 個獨立頁面（含最新消息／專欄文章）',
      '專屬直覺管理後台，可自改文字更換圖片',
      '設計稿全真細緻驗收，修改確認 3 次',
      'Google Analytics 4 流量追蹤與 Search Console',
      '上線後 6 個月免費完整技術支援與保固'
    ],
    ctaText: '選擇推薦方案'
  },
  {
    id: 'custom',
    name: '預約／電商網站',
    price: '98,000',
    unit: '起',
    description: '適合想把線上預約、下單購物、金物流完全整合的店家',
    features: [
      '即時線上時段預約或購物車、綠界/藍新金流',
      'LINE 官方帳號 / Email 自動觸發通知',
      '客戶訂單與預約後台管理儀表板',
      '會員系統、自訂優惠券或預收訂金機制',
      '上線後 6 個月免費架構維運與功能保固'
    ],
    ctaText: '諮詢客製系統'
  }
]
</script>

<template>
  <section id="pricing" class="pricing-section">
    <div class="container">
      <p class="section-label">04 / PRICING</p>
      <h2 class="section-title">價格透明，報價前就看得懂</h2>
      <p class="section-desc">
        以下為參考起價，實際依專案規格透明報價；報價單會逐項拆解列出，絕對沒有隱藏或後續追加費用。
      </p>

      <div class="pricing-grid">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="pricing-card"
          :class="{ 'is-popular': plan.popular }"
        >
          <!-- Popular Highlight Badge -->
          <span v-if="plan.popular" class="popular-badge">推薦首選方案</span>

          <div class="plan-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price-row">
              <span class="currency">NT$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="unit">{{ plan.unit }}</span>
            </div>
            <p class="plan-desc">{{ plan.description }}</p>
          </div>

          <div class="plan-divider"></div>

          <ul class="plan-features">
            <li v-for="feat in plan.features" :key="feat">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <a
            href="#contact"
            class="btn plan-cta"
            :class="plan.popular ? 'btn-primary' : 'btn-secondary'"
          >
            {{ plan.ctaText }}
          </a>
        </div>
      </div>

      <!-- Trust & Inclusions Box -->
      <div class="inclusions-banner">
        <div class="inclusions-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="inclusions-text">
          <strong>所有方案皆享有最高透明度保證：</strong>
          網站原始碼與網域 100% 歸你所有 · 主機網域免費代辦（費用實報實銷無轉手差價）· 上線附專屬錄影與操作教學
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 24px;
  align-items: stretch;
}

.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: var(--transition);
}

.pricing-card:hover {
  border-color: var(--border-medium);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.pricing-card.is-popular {
  border: 2px solid var(--accent);
  box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.12);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 32px;
  background: var(--accent);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  padding: 3px 14px;
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 10px rgba(var(--accent-rgb), 0.3);
}

.plan-header {
  margin-bottom: 24px;
}

.plan-name {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-main);
}

.plan-price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
}

.currency {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
}

.amount {
  font-family: var(--font-mono);
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
  line-height: 1;
}

.unit {
  color: var(--text-muted);
  font-size: 15px;
}

.plan-desc {
  margin: 0;
  color: var(--text-muted);
  font-size: 14.5px;
  line-height: 1.5;
}

.plan-divider {
  height: 1px;
  background: var(--border-light);
  margin-bottom: 24px;
}

.plan-features {
  list-style: none;
  margin: 0 0 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14.5px;
  color: var(--text-body);
  line-height: 1.5;
}

.check-icon {
  color: var(--accent);
  margin-top: 3px;
  flex-shrink: 0;
}

.plan-cta {
  width: 100%;
  padding: 14px 20px;
  font-size: 15px;
}

.inclusions-banner {
  margin-top: 32px;
  background: var(--bg-page);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border-light);
}

.inclusions-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.inclusions-text {
  font-size: 14.5px;
  color: var(--text-body);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .inclusions-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
