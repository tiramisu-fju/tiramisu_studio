<script setup lang="ts">
import { ref } from 'vue'
import type { FaqItem } from '../types'

const faqs: FaqItem[] = [
  {
    q: '你們是新成立的工作室，品質有保障嗎？',
    a: '我們是新成立的工作室，但已累積約 5 年網站開發經驗。我們擅長把複雜的技術架構轉成白話說明，每個環節都讓你清楚知道在做什麼，並隨時回報進度。合約會明訂規格、驗收標準與專屬保固條款，讓你安心合作。'
  },
  {
    q: '網站做好之後，我可以自己改內容嗎？',
    a: '可以！網站可依需求附帶直覺的管理後台。包含文字、輪播 Banner、作品圖集、最新消息都能由你或員工自行更新，上線時會提供一對一視訊教學與錄影存檔。'
  },
  {
    q: '主機和網域是什麼？需要另外付錢嗎？',
    a: '「網域」就是你的網站網址（如 yourbrand.com），「主機」是存放網站程式與資料庫的雲端空間。每年有固定服務商費用，我們提供免費代辦設定，費用依官方發票實報實銷，且產權 100% 登記在你的名下。'
  },
  {
    q: '網站的所有權是誰的？日後會被綁架嗎？',
    a: '尾款結清後，網站的所有原始碼（Git 程式庫）、網域與多媒體資產 100% 歸你所有。我們絕不使用鎖死代碼的黑箱手法；日後即便不委託我們維護，也能隨時轉移給任何工程師接手。'
  },
  {
    q: '從開始到正式上線大概需要多久時間？',
    a: '輕量形象站約 2～3 週，品牌官網約 3～5 週，預約或電商整合系統約 4～8 週。確切時程會在合約中清楚約定各階段驗收里程碑，以確保如期上線。'
  },
  {
    q: '付款方式是什麼？可以分階段支付嗎？',
    a: '標準合作採三期付款：簽約啟動付訂 40%、視覺原型確認 30%、驗收部署上線 30%。支持公司銀行匯款。'
  },
  {
    q: '上線後如果網站發生問題或當機怎麼辦？',
    a: '合約保固期內，所有非人為因素造成的錯誤皆提供免費緊急除錯服務。保固期滿後，可依需求選擇輕量月費維護方案（含定期備份、資安修補），或以單次工時彈性計費。'
  }
]

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <p v-reveal class="section-label">05 / FAQ</p>
      <h2 v-reveal="80" class="section-title">第一次做網站常問的問題</h2>
      <p v-reveal="160" class="section-desc">
        我們將客戶最常關心的疑慮整理於此。如果您有其他特定問題，隨時歡迎加 LINE 詢問。
      </p>

      <div class="faq-list">
        <div
          v-for="(item, idx) in faqs"
          :key="idx"
          v-reveal="idx * 60"
          class="faq-item"
          :class="{ 'is-open': openIndex === idx }"
        >
          <button
            type="button"
            class="faq-question-btn"
            :aria-expanded="openIndex === idx"
            @click="toggleFaq(idx)"
          >
            <span class="faq-q-text">{{ item.q }}</span>
            <span class="faq-toggle-icon" aria-hidden="true">
              {{ openIndex === idx ? '−' : '+' }}
            </span>
          </button>

          <div v-show="openIndex === idx" class="faq-answer-wrap">
            <p class="faq-answer-text">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background: var(--bg-page);
  padding: 88px 24px;
}

.faq-container {
  max-width: 860px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-light);
  margin-top: 24px;
}

.faq-item {
  border-bottom: 1px solid var(--border-light);
  transition: var(--transition);
}

.faq-question-btn {
  width: 100%;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 0;
  background: none;
  border: none;
  font: inherit;
  font-size: 17px;
  font-weight: 600;
  color: var(--text-main);
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
}

.faq-question-btn:hover {
  color: var(--accent);
}

.faq-toggle-icon {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
}

.faq-item.is-open .faq-toggle-icon {
  background: var(--accent);
  color: #FFFFFF;
  border-color: var(--accent);
}

.faq-answer-wrap {
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-answer-text {
  margin: 0 0 24px;
  color: var(--text-body);
  font-size: 15.5px;
  line-height: 1.7;
  padding-right: 32px;
}
</style>
