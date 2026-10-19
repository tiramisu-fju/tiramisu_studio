<script setup lang="ts">
interface Screen {
  src: string
  caption: string
}

interface Work {
  title: string
  category: string
  tagline: string
  desc: string
  features: string[]
  tags: string[]
  // 截圖放在 public/works/<作品>/ 底下
  screens: Screen[]
  // 截圖類型：手機直式（預設）或電腦橫式
  device?: 'mobile' | 'desktop'
  // 選填：網站或展示連結
  link?: string
}

const works: Work[] = [
  {
    title: 'Zhizhang7 記帳',
    category: '個人產品 · 手機記帳 App',
    tagline: '跟包包一起，輕鬆記帳',
    desc: '從介面、角色到前後端都由我們獨立完成的手機記帳 App。以吉祥物「包包」陪伴使用者，把枯燥的記帳變成每天想打開的小習慣。',
    features: [
      '月收支總覽與快速搜尋，幾秒鐘記一筆',
      '分類預算進度條，快超支時包包會提醒你',
      '預購清單追蹤訂金、尾款與到貨月份',
      '現金、銀行、信用卡多帳戶整合管理'
    ],
    tags: ['PWA', 'Google 登入', '角色設計', 'RWD'],
    screens: [
      { src: '/works/zhizhang7/08-splash.png', caption: '啟動畫面' },
      { src: '/works/zhizhang7/01-login.png', caption: '登入頁' },
      { src: '/works/zhizhang7/02-home.png', caption: '收支總覽' },
      { src: '/works/zhizhang7/03-budget.png', caption: '每月預算' },
      { src: '/works/zhizhang7/04-budget-categories.png', caption: '分類預算' },
      { src: '/works/zhizhang7/05-preorder.png', caption: '預購清單' },
      { src: '/works/zhizhang7/06-accounts.png', caption: '帳戶管理' },
      { src: '/works/zhizhang7/07-payment.png', caption: '收款單分享' }
    ]
  },
  {
    title: 'maomaoshu 寵物紀錄',
    category: '個人產品 · 寵物照護 App',
    tagline: '毛孩的大小事，一指記下',
    desc: '為飼主打造的寵物生活紀錄 App。餵食、如廁、體重、健康與保養一鍵快速記錄，再用時間軸、月曆與統計圖表看出毛孩的生活規律。',
    features: [
      '五大類快速記錄，常用份量一點就填好',
      '待辦提醒，完成時自動記一筆',
      '清單、月曆、統計三種檢視，一眼看出作息變化',
      '多隻寵物切換，邀請家人一起照顧'
    ],
    tags: ['PWA', '多人共享', '資料視覺化', '角色設計'],
    screens: [
      { src: '/works/maomaoshu7/01-home.png', caption: '首頁' },
      { src: '/works/maomaoshu7/02-feed.png', caption: '快速記錄' },
      { src: '/works/maomaoshu7/03-timeline.png', caption: '時間軸' },
      { src: '/works/maomaoshu7/04-calendar.png', caption: '月曆檢視' },
      { src: '/works/maomaoshu7/05-stats.png', caption: '統計圖表' },
      { src: '/works/maomaoshu7/06-pets.png', caption: '多寵物管理' }
    ]
  },
  {
    title: 'ClassCue',
    category: '個人產品 · 課堂互動系統',
    tagline: 'Hey! Raise your Hand',
    desc: '專為電腦教室設計的線上舉手系統，已在多個班級實際使用。學生依座位登記後，一鍵就能排隊問問題或請老師驗收，老師不用再滿教室找舉手的人。',
    features: [
      '依教室版型呈現座位表，可切換不同教室',
      '問問題與驗收分開排隊，狀態用顏色即時標示',
      '學號綁定座位，排隊順序一目了然',
      '首次使用有步驟教學，學生上手不需說明'
    ],
    tags: ['Web App', '即時狀態', '教育'],
    device: 'desktop',
    screens: [
      { src: '/works/classcue/01-seatmap.png', caption: '教室座位表' },
      { src: '/works/classcue/02-queue.png', caption: '登記座位與排隊' },
      { src: '/works/classcue/03-onboarding.png', caption: '新手教學' }
    ]
  }
]
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <p v-reveal class="section-label">03 / PORTFOLIO</p>
      <h2 v-reveal="80" class="section-title">作品集</h2>
      <p v-reveal="160" class="section-desc">
        從需求訪談到上線，每一個畫面都是我們親手規劃與開發的。
      </p>

      <article v-for="w in works" :key="w.title" v-reveal="200" class="work-card">
        <div class="work-info">
          <p class="work-category">{{ w.category }}</p>
          <h3 class="work-title">{{ w.title }}</h3>
          <p class="work-tagline">{{ w.tagline }}</p>
          <p class="work-desc">{{ w.desc }}</p>
          <ul class="work-features">
            <li v-for="f in w.features" :key="f">{{ f }}</li>
          </ul>
          <ul class="work-tags">
            <li v-for="t in w.tags" :key="t">{{ t }}</li>
          </ul>
          <a v-if="w.link" :href="w.link" target="_blank" rel="noopener" class="work-link">
            查看作品 <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="work-gallery" tabindex="0" :aria-label="`${w.title} 畫面截圖，可左右滑動`">
          <figure v-for="s in w.screens" :key="s.src" :class="w.device === 'desktop' ? 'desktop' : 'phone'">
            <div v-if="w.device === 'desktop'" class="desktop-bar" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div :class="w.device === 'desktop' ? 'desktop-frame' : 'phone-frame'">
              <img :src="s.src" :alt="`${w.title}：${s.caption}`" loading="lazy" decoding="async" />
            </div>
            <figcaption>{{ s.caption }}</figcaption>
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  background: var(--bg-page);
}

.work-card {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 40px;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-sm);
}

.work-card + .work-card {
  margin-top: 28px;
}

/* Alternate sides so stacked cards don't look repetitive */
.work-card:nth-of-type(even) {
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
}

.work-card:nth-of-type(even) .work-info {
  order: 2;
}

@media (max-width: 900px) {
  .work-card,
  .work-card:nth-of-type(even) {
    grid-template-columns: 1fr;
  }

  .work-card:nth-of-type(even) .work-info {
    order: 0;
  }

  .work-card {
    gap: 28px;
    padding: 28px 20px;
  }
}

.work-category {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.work-title {
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 700;
  color: var(--text-main);
}

.work-tagline {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-muted);
}

.work-desc {
  margin: 0 0 18px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-body);
}

.work-features {
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.work-features li {
  position: relative;
  padding-left: 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-body);
}

.work-features li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.6em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.work-tags li {
  font-size: 12.5px;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  background: var(--accent-light);
  color: var(--accent-deep);
}

.work-link {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  color: var(--accent);
  text-decoration: none;
}

.work-link:hover {
  color: var(--text-main);
}

/* Horizontally scrolling phone gallery */
.work-gallery {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px 4px 16px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-medium) transparent;
}

.work-gallery:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: var(--radius-md);
}

.phone {
  flex: 0 0 auto;
  width: 190px;
  margin: 0;
  scroll-snap-align: start;
}

@media (max-width: 640px) {
  .phone {
    width: 62vw;
    max-width: 220px;
  }
}

.phone-frame {
  aspect-ratio: 576 / 1260;
  border: 6px solid var(--bg-dark);
  border-radius: 26px;
  overflow: hidden;
  background: var(--bg-card-warm);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.phone:hover .phone-frame {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.phone-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Desktop screenshots: browser-style frame */
.desktop {
  flex: 0 0 auto;
  width: min(520px, 82vw);
  margin: 0;
  scroll-snap-align: start;
}

.desktop-bar {
  display: flex;
  gap: 6px;
  padding: 9px 12px;
  background: var(--bg-dark);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}

.desktop-bar span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.desktop-frame {
  aspect-ratio: 3794 / 1811;
  border: 4px solid var(--bg-dark);
  border-top: 0;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  overflow: hidden;
  background: var(--bg-card-warm);
  box-shadow: var(--shadow-md);
}

.desktop-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.phone figcaption,
.desktop figcaption {
  margin-top: 10px;
  text-align: center;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
}
</style>
