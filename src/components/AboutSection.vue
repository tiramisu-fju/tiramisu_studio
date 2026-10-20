<script setup lang="ts">
// What the studio can build in-house, end to end
const capabilities = [
  {
    icon: 'code',
    title: '前後端開發',
    desc: '從介面、API 到資料庫，整套程式從頭寫到尾，架構一致、日後好維護。'
  },
  {
    icon: 'flow',
    title: '系統規劃',
    desc: '需求訪談、系統分析到資料庫設計，先把流程圖與畫面整理清楚，再開始動工。'
  },
  {
    icon: 'cloud',
    title: '雲端架構',
    desc: '熟悉 AWS、GCP、Azure 三大平台，持有 9 張雲端證照，依規模選擇合適又不浪費的架構。'
  },
  {
    icon: 'shield',
    title: '資安維運',
    desc: '開發初期就把資安納入設計，上線後定期備份與修補，並具備災難復原實戰經驗。'
  }
]

// Real projects behind those capabilities
const cases = [
  {
    org: '上市遊戲公司',
    scope: '後台系統與官網',
    desc: '遊戲後台管理系統（Vue.js + FastAPI）與官方網站前端，並導入 Docker、AWS 部署與 CI/CD 自動化'
  },
  {
    org: '萬里雲 CloudMile',
    scope: '備份與災難復原',
    desc: '數十 TB 級資料備份還原與災難復原 PoC、Kubernetes 錯誤模擬、GCP MySQL 效能測試'
  },
  {
    org: '伊雲谷 eCloudvalley',
    scope: '跨雲遷移',
    desc: '將客戶的 IoT 架構從 AWS 遷移至 Azure'
  },
  {
    org: 'Intecular（美國）',
    scope: 'IoT 雲端基礎設施',
    desc: '智慧插座雲端基礎設施、AWS IoT Core、MQTT／WebSocket API 與裝置授權認證'
  },
  {
    org: '物流管理系統',
    scope: '完整交付',
    desc: '從架構設計、開發、容器化部署到維護一手包辦'
  },
  {
    org: '自有產品',
    scope: '從零到上線',
    desc: '課堂互動系統（已在多個班級實際使用）、AI 智慧助教對話系統、記帳系統'
  }
]

const stack = [
  { group: '前端', items: ['Vue.js', 'TypeScript', 'Figma'] },
  { group: '後端', items: ['Python／FastAPI', 'ASP.NET', 'Node.js'] },
  { group: '資料庫', items: ['MySQL', 'SQL Server', 'PostgreSQL'] },
  { group: '雲端與維運', items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitLab CI/CD', 'Linux'] }
]
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <p v-reveal class="section-label">05 / ABOUT</p>
      <h2 v-reveal="80" class="section-title">從程式到雲端，技術都在自己手上</h2>
      <p v-reveal="160" class="section-desc">
        累積約 5 年網站開發經驗，前後端、資料庫、雲端部署到資安維運都由團隊內部完成，不需要外包任何一個環節。比起堆砌技術名詞，我們更擅長把複雜的系統架構拆解成你聽得懂的白話，讓你清楚每一個決定背後的原因。
      </p>

      <div class="cap-grid">
        <article v-for="(c, i) in capabilities" :key="c.title" v-reveal="i * 80" class="cap-card">
          <div class="cap-icon" aria-hidden="true">
            <svg v-if="c.icon === 'code'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <svg v-else-if="c.icon === 'flow'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              <path d="M6.5 10v4a3 3 0 0 0 3 3H14"></path>
            </svg>
            <svg v-else-if="c.icon === 'cloud'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
          </div>
          <h3 class="cap-title">{{ c.title }}</h3>
          <p class="cap-desc">{{ c.desc }}</p>
        </article>
      </div>

      <div v-reveal class="proof-card">
        <div class="proof-col">
          <h3 class="proof-heading">實戰經驗</h3>
          <ul class="exp-list">
            <li v-for="e in cases" :key="e.org" class="exp-item">
              <div class="exp-head">
                <span class="exp-org">{{ e.org }}</span>
                <span class="exp-scope">{{ e.scope }}</span>
              </div>
              <p class="exp-desc">{{ e.desc }}</p>
            </li>
          </ul>
        </div>

        <div class="proof-col">
          <h3 class="proof-heading">技術棧</h3>
          <dl class="stack-list">
            <div v-for="s in stack" :key="s.group" class="stack-row">
              <dt class="stack-group">{{ s.group }}</dt>
              <dd class="stack-items">
                <span v-for="item in s.items" :key="item" class="skill-tag">{{ item }}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

/* Capabilities */
.cap-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

@media (max-width: 960px) {
  .cap-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .cap-grid {
    grid-template-columns: 1fr;
  }
}

.cap-card {
  padding: 26px 24px;
  background: var(--bg-card-warm);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
}

.cap-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: var(--radius-md);
  background: var(--accent-light);
  color: var(--accent);
}

.cap-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
}

.cap-desc {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--text-body);
}

/* Experience + stack */
.proof-card {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 48px;
  padding: 36px;
  background: var(--bg-card-warm);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
}

@media (max-width: 860px) {
  .proof-card {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 28px 22px;
  }
}

.proof-heading {
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
}

.exp-list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 22px;
  border-left: 2px solid var(--border-light);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.exp-item {
  position: relative;
}

.exp-item::before {
  content: '';
  position: absolute;
  left: -29px;
  top: 7px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-card-warm);
  border: 2px solid var(--accent);
}

.exp-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
}

.exp-org {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-main);
}

.exp-scope {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
}

.exp-desc {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-body);
}

.stack-list {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.stack-group {
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--accent);
}

.stack-items {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background: var(--bg-card);
  color: var(--text-muted);
  font-size: 12.5px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}
</style>
