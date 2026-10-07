<script setup lang="ts">
const pillars = ['設計', '開發', '整合', '部署', '維護']

const services = [
  {
    no: '01',
    title: '品牌網站設計',
    desc: '從品牌定位與視覺風格出發，打造符合企業形象、兼具美感與使用體驗的網站。',
    features: [
      '品牌形象官網',
      '企業／公司網站',
      '店家／門市介紹網站',
      '產品介紹頁',
      '課程／服務銷售頁',
      '一頁式活動頁',
      'RWD 響應式網站',
      '網站 UI／UX 設計'
    ],
    icon: 'layout'
  },
  {
    no: '02',
    title: '網站改版與優化',
    desc: '讓既有網站擺脫過時的設計與使用體驗，重新整理網站架構與視覺呈現。',
    features: [
      '舊網站全面改版',
      '手機版／平板版優化',
      '網站視覺重新設計',
      '網站架構重新規劃',
      '指定頁面重新設計',
      '使用者體驗優化',
      '網站效能優化'
    ],
    icon: 'refresh'
  },
  {
    no: '03',
    title: '客製化系統開發',
    desc: '不只是製作網站，而是依照實際營運需求，打造專屬的數位系統。',
    features: [
      '會員／登入系統',
      '後台管理系統',
      '預約／報名系統',
      '商品／訂單管理',
      '資料管理系統',
      '權限管理',
      '客製化功能開發',
      'API 串接'
    ],
    icon: 'code'
  },
  {
    no: '04',
    title: '第三方服務整合',
    desc: '串接網站與日常使用的數位工具，讓不同服務可以互相連動。',
    features: [
      'LINE 官方帳號／LINE Bot',
      '金流／物流串接',
      'Google 服務',
      '第三方登入',
      'Email／通知系統',
      'AI 功能導入',
      '第三方 API 串接',
      '自動化流程'
    ],
    icon: 'link'
  },
  {
    no: '05',
    title: '安全部署與網站維運',
    desc: '從開發完成到正式上線，我們處理網站背後的技術環境，並把資安防護放在第一位，讓網站與客戶資料都安心。',
    features: [
      '網域／DNS 設定',
      'SSL／HTTPS 加密',
      '主機／雲端部署',
      'CDN 與 DDoS 防護',
      'Docker／CI/CD',
      '防火牆／WAF 設定',
      '帳號權限控管',
      '弱點掃描與修補',
      '備份與災難復原',
      '網站效能優化'
    ],
    icon: 'cloud'
  },
  {
    no: '06',
    title: '長期維護與技術支援',
    desc: '網站上線不是終點，持續維護與更新，讓網站保持穩定運作。',
    features: [
      '網站內容更新',
      '功能調整',
      'Bug 修復',
      '系統更新',
      '伺服器維護',
      '定期備份',
      'SEO 基礎優化',
      '長期技術支援'
    ],
    icon: 'shield'
  }
]
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <p v-reveal class="section-label">01 / SERVICES</p>
      <h2 v-reveal="80" class="section-title">服務內容</h2>
      <p v-reveal="160" class="section-desc">
        從網站設計、客製系統開發到部署上線與長期維護，全程由同一組工程師負責到底。
      </p>

      <div v-reveal="240" class="pillars" aria-label="服務範疇">
        <template v-for="(p, i) in pillars" :key="p">
          <span v-if="i > 0" class="pillar-sep" aria-hidden="true">｜</span>
          <span class="pillar">{{ p }}</span>
        </template>
      </div>

      <div class="services-grid">
        <div v-for="(s, i) in services" :key="s.no" v-reveal="(i % 3) * 100" class="service-card">
          <div class="service-header">
            <span class="service-no">{{ s.no }}</span>
            <div class="service-icon-wrap">
              <svg v-if="s.icon === 'layout'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <svg v-else-if="s.icon === 'refresh'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <svg v-else-if="s.icon === 'code'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <svg v-else-if="s.icon === 'link'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <svg v-else-if="s.icon === 'cloud'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 16 12 12 8 16"></polyline>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              </svg>
              <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>

          <h3 class="service-title">{{ s.title }}</h3>
          <p class="service-desc">{{ s.desc }}</p>

          <ul class="service-features">
            <li v-for="item in s.features" :key="item">
              <svg class="check-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.pillars {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin: -14px 0 32px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--cocoa-dark);
}

.pillar-sep {
  color: var(--accent-border);
  font-weight: 400;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 24px;
}

.service-card {
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  transition: var(--transition);
}

.service-card:hover {
  border-color: var(--border-medium);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.service-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.service-no {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
}

.service-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  transition: var(--transition);
}

.service-card:hover .service-icon-wrap {
  background: var(--accent-light);
  color: var(--accent);
}

.service-title {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-main);
}

.service-desc {
  margin: 0 0 24px;
  color: var(--text-body);
  font-size: 15px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  margin: auto 0 0;
  padding: 20px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 12px;
  border-top: 1px solid var(--border-light);
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 14px;
  line-height: 1.45;
  color: var(--text-body);
}

.check-icon {
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
