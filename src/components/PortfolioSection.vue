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
  // 手機截圖，放在 public/works/<作品>/ 底下
  screens: Screen[]
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
          <figure v-for="s in w.screens" :key="s.src" class="phone">
            <div class="phone-frame">
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

@media (max-width: 900px) {
  .work-card {
    grid-template-columns: 1fr;
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

.phone figcaption {
  margin-top: 10px;
  text-align: center;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
}
</style>
