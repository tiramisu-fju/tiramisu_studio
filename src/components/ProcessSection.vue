<script setup lang="ts">
import { computed, ref } from 'vue'
import type { StepItem } from '../types'
import { useScrollProgress, stickyProgress } from '../composables/useScrollProgress'

const NAV_HEIGHT = 69

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

// Desktop scroll-driven stepper: progress through the pinned section picks the active step
const scroller = ref<HTMLElement | null>(null)
const progress = useScrollProgress(scroller, stickyProgress(NAV_HEIGHT))
const activeIndex = computed(() => Math.min(steps.length - 1, Math.floor(progress.value * steps.length)))

const goToStep = (i: number) => {
  const el = scroller.value
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  const pinnedDistance = el.offsetHeight - (window.innerHeight - NAV_HEIGHT)
  window.scrollTo({
    top: top - NAV_HEIGHT + ((i + 0.5) / steps.length) * pinnedDistance,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section id="process" class="process-section">
    <!-- Desktop: the section pins while scrolling and steps through each stage -->
    <div ref="scroller" class="process-scroller" :style="{ '--steps': steps.length }">
      <div class="process-sticky">
        <div class="process-container">
          <p v-reveal class="section-label-dark">03 / PROCESS</p>
          <h2 v-reveal="80" class="section-title-dark">合作流程</h2>
          <p v-reveal="160" class="flow-summary">洽談 → 規劃 → 設計 → 開發 → 測試 → 上線 → 維護</p>
          <p v-reveal="240" class="section-desc-dark">
            每一個階段都清楚可見，不讓你的專案陷入資訊黑洞。
          </p>

          <div class="process-stage">
            <!-- Step rail with scroll progress (desktop only) -->
            <div class="step-rail">
              <span class="rail-fill" :style="{ transform: `scaleY(${progress})` }"></span>
              <button
                v-for="(s, i) in steps"
                :key="s.no"
                type="button"
                class="rail-item"
                :class="{ active: i === activeIndex, done: i < activeIndex }"
                @click="goToStep(i)"
              >
                <span class="rail-no">{{ s.no }}</span>
                <span>{{ s.title }}</span>
              </button>
            </div>

            <!-- Steps: stacked and cross-faded on desktop, a plain list on mobile -->
            <ol class="steps-list">
              <li
                v-for="(s, i) in steps"
                :key="s.no"
                class="step-item"
                :class="{ 'is-active': i === activeIndex }"
                :aria-current="i === activeIndex ? 'step' : undefined"
              >
                <div class="step-no">{{ s.no }}</div>
                <div class="step-main">
                  <h3 class="step-title">{{ s.title }}</h3>
                  <p class="step-desc">{{ s.desc }}</p>
                </div>
                <div class="step-flow">
                  <template v-for="(f, j) in s.flow" :key="f">
                    <span v-if="j > 0" class="flow-arrow" aria-hidden="true">→</span>
                    <span class="flow-chip">{{ f }}</span>
                  </template>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 Guarantees Grid -->
    <div class="guarantees-container">
      <div class="guarantees-grid">
        <div v-for="(g, i) in guarantees" :key="g.title" v-reveal="i * 100" class="guarantee-card">
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

.process-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 0;
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
  margin: 0 0 36px;
  color: var(--text-light);
  font-size: 16px;
  max-width: 720px;
}

/* ---------- Mobile / base: plain list ---------- */
.step-rail {
  display: none;
}

.steps-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.step-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  align-items: start;
  gap: 8px 20px;
  padding: 22px 0;
  border-top: 1px solid var(--border-dark);
}

.step-item:last-child {
  border-bottom: 1px solid var(--border-dark);
}

.step-no {
  font-family: var(--font-mono);
  font-size: 26px;
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
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 8px;
  margin-top: 6px;
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

/* ---------- Desktop: pinned, scroll-driven stage ---------- */
@media (min-width: 861px) {
  .process-scroller {
    height: calc(100vh - 69px + var(--steps) * 42vh);
  }

  .process-sticky {
    position: sticky;
    top: 69px;
    height: calc(100vh - 69px);
    display: flex;
    align-items: center;
  }

  .process-container {
    width: 100%;
    padding: 0 24px;
  }

  .process-stage {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 72px;
    align-items: start;
  }

  .step-rail {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 22px;
    border-left: 2px solid var(--border-dark);
  }

  .rail-fill {
    position: absolute;
    left: -2px;
    top: 0;
    width: 2px;
    height: 100%;
    background: var(--ladyfinger);
    transform-origin: top;
  }

  .rail-item {
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding: 8px 0;
    background: none;
    border: none;
    text-align: left;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .rail-item:hover,
  .rail-item.done {
    color: var(--text-light);
  }

  .rail-item.active {
    color: #FFFFFF;
  }

  .rail-no {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--ladyfinger);
    opacity: 0.6;
  }

  .rail-item.active .rail-no {
    opacity: 1;
  }

  .steps-list {
    display: block;
    position: relative;
    min-height: 330px;
  }

  .step-item {
    position: absolute;
    inset: 0;
    display: block;
    padding: 0;
    border: none;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.5s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .step-item:last-child {
    border: none;
  }

  .step-item.is-active {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .step-no {
    font-size: clamp(72px, 8vw, 112px);
    letter-spacing: -0.03em;
  }

  .step-title {
    margin-top: 18px;
    font-size: clamp(28px, 3vw, 38px);
    font-weight: 800;
  }

  .step-desc {
    margin-top: 12px;
    font-size: 17px;
    max-width: 560px;
  }

  .step-flow {
    margin-top: 26px;
  }

  .flow-chip {
    font-size: 14px;
    padding: 6px 14px;
  }
}

/* Short desktop windows: trim the header so the stage still fits */
@media (min-width: 861px) and (max-height: 760px) {
  .flow-summary,
  .section-desc-dark {
    display: none;
  }
  .section-title-dark {
    margin-bottom: 24px;
  }
  .step-no {
    font-size: 64px;
  }
}

@media (min-width: 861px) and (prefers-reduced-motion: reduce) {
  .step-item {
    transform: none;
  }
}

/* ---------- Guarantees ---------- */
.guarantees-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

@media (min-width: 861px) {
  .guarantees-container {
    padding: 24px 24px 92px;
  }
}

.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
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
