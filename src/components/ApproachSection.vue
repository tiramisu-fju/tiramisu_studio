<script setup lang="ts">
const keywords = ['品牌', '體驗', '技術', '擴充']

const principles = [
  {
    no: '01',
    title: '以品牌為核心',
    lead: '網站不只是資訊的集合，而是品牌與客戶接觸的第一個入口。',
    body: '我們從品牌特色、目標客群與企業形象出發，打造具有一致性與辨識度的網站。'
  },
  {
    no: '02',
    title: '兼顧美感與實用',
    lead: '我們重視視覺，也重視實際使用體驗。',
    body: '從版面配置、資訊層級到操作流程，讓網站不只「好看」，也能讓訪客快速找到需要的資訊。'
  },
  {
    no: '03',
    title: 'RWD 全裝置體驗',
    lead: '網站不只是在電腦上使用。',
    body: '我們針對桌機、平板與手機進行響應式設計，讓不同裝置都能保持良好的瀏覽體驗。'
  },
  {
    no: '04',
    title: '以使用者體驗出發',
    lead: '好的網站應該讓使用者「不用思考就知道下一步要做什麼」。',
    body: '從導覽架構、按鈕配置到頁面動線，我們重視每一個使用者操作細節。'
  },
  {
    no: '05',
    title: '設計與技術同步',
    lead: '我們不只關注畫面，也考慮網站實際的開發與後續維護。',
    body: '從 UI／UX、前後端開發，到資料庫、API 與伺服器部署，讓設計真正落地。'
  },
  {
    no: '06',
    title: '為未來保留擴充性',
    lead: '網站不應該只能使用現在的功能。',
    body: '我們在規劃系統架構時，會考慮未來功能擴充與資料成長，讓網站能隨著品牌與業務一起成長。'
  }
]
</script>

<template>
  <section id="approach" class="approach-section">
    <div class="container">
      <p v-reveal class="section-label">02 / APPROACH</p>
      <h2 v-reveal="80" class="section-title">我們的設計重點</h2>
      <p v-reveal="160" class="keywords">
        <template v-for="(k, i) in keywords" :key="k">
          <span v-if="i > 0" class="keyword-sep" aria-hidden="true">×</span>
          <span>{{ k }}</span>
        </template>
      </p>

      <div class="principles-grid">
        <article v-for="(p, i) in principles" :key="p.no" v-reveal="(i % 3) * 100" class="principle-card">
          <span class="principle-no">{{ p.no }}</span>
          <h3 class="principle-title">{{ p.title }}</h3>
          <p class="principle-lead">{{ p.lead }}</p>
          <p class="principle-body">{{ p.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approach-section {
  background: var(--bg-muted);
  border-bottom: 1px solid var(--border-light);
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0 0 38px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--cocoa-dark);
}

.keyword-sep {
  color: var(--accent);
  font-weight: 400;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 20px;
}

.principle-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 28px 28px 30px;
  transition: var(--transition);
}

.principle-card:hover {
  border-color: var(--accent-border);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.principle-no {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  color: var(--accent-border);
  transition: var(--transition);
}

.principle-card:hover .principle-no {
  color: var(--accent);
}

.principle-title {
  margin: 14px 0 12px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
}

.principle-lead {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--text-main);
}

.principle-body {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--text-body);
}
</style>
