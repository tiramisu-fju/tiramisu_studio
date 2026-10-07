<script setup lang="ts">
// Team member profiles (no personal names by request; details from each member's résumé)
const members = [
  {
    role: '全端開發 ＆ 系統規劃',
    icon: 'code',
    // [main, tail] — the tail never wraps on its own
    badge: ['輔仁大學', '資訊管理碩士'],
    bio: '負責網站的前後端開發與系統規劃。從需求訪談、系統分析、資料庫設計到介面開發都能獨立完成，擅長把抽象的技術概念整理成清楚的流程圖與畫面，讓你在每個階段都看得懂網站正在長成什麼樣子。',
    experiences: [
      {
        org: '上市遊戲公司',
        role: '全端工程師（現職）',
        desc: '獨立開發遊戲後台管理系統（Vue.js + FastAPI）、參與官方網站前端開發，並導入 Docker、AWS 部署與 CI/CD 自動化流程'
      },
      {
        org: '輔仁大學',
        role: '前端工程師助理・系統分析',
        desc: '校內行政系統翻新：使用者訪談、流程圖與 ER 圖分析，以 Vue + Quasar 打造元件化 RWD 介面'
      },
      {
        org: '個人產品',
        role: '獨立開發',
        desc: '課堂互動系統（已在多個班級實際使用）、AI RAG 對話系統、記帳與飲食管理系統，從需求分析到部署皆獨立完成'
      },
      {
        org: '輔仁大學',
        role: '專題技術指導',
        desc: '擔任程式課程助教，每學期指導約 20 位學生進行專題開發，協助系統架構設計與技術選型'
      }
    ],
    skills: ['Vue.js', 'TypeScript', 'FastAPI', 'ASP.NET MVC', 'MySQL／SQL Server', 'Docker', 'AWS', 'GitLab CI/CD', 'Figma']
  },
  {
    role: '雲端架構 ＆ 資安維運',
    icon: 'shield',
    badge: ['持有 AWS・GCP・Azure', '共 9 張雲端證照'],
    bio: '負責網站背後的雲端架構、部署與資安。熟悉三大雲端平台，從架構設計、上線部署到備份與災難復原都有實戰經驗，並習慣在開發初期就把資安納入設計，而不是上線後才補救。',
    experiences: [
      {
        org: '萬里雲 CloudMile',
        role: '雲端工程師實習',
        desc: '數十 TB 級資料備份還原與災難復原 PoC、Kubernetes 錯誤模擬、GCP MySQL 效能測試'
      },
      {
        org: '伊雲谷 eCloudvalley',
        role: '開發暨維護專案',
        desc: '將客戶的 IoT 架構從 AWS 遷移至 Azure'
      },
      {
        org: 'Intecular（美國）',
        role: 'Cloud Engineer',
        desc: '智慧插座雲端基礎設施、AWS IoT Core、MQTT／WebSocket API 與裝置授權認證'
      },
      {
        org: '物流管理系統',
        role: '獨立接案',
        desc: '從架構設計、開發、容器化部署到維護一手包辦'
      }
    ],
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Python／FastAPI', 'Vue／Node.js', 'Linux 維運']
  }
]
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <p v-reveal class="section-label">05 / ABOUT</p>
      <h2 v-reveal="80" class="section-title">接你案子的，就是這兩個人</h2>
      <p v-reveal="160" class="section-desc">
        我們是兩人組成的網站工作室，累積約 5 年網站開發經驗。比起堆砌技術名詞，我們更擅長把複雜的系統架構拆解成你聽得懂的白話，讓你清楚每一個決定背後的原因。刻意維持精簡編制：沒有業務轉述時的資訊失真、沒有層層轉包的抽成灌水。你說的需求與痛點，直接由寫程式的人第一手聽到並實現。
      </p>

      <div class="team-list">
        <article v-for="m in members" :key="m.role" v-reveal class="member-card">
          <div class="member-intro">
            <div class="member-head">
              <div class="member-avatar" aria-hidden="true">
                <svg v-if="m.icon === 'code'" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <svg v-else width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div>
                <h3 class="member-role">{{ m.role }}</h3>
                <span class="member-badge">{{ m.badge[0] }} <span class="nowrap">{{ m.badge[1] }}</span></span>
              </div>
            </div>

            <p class="member-bio">{{ m.bio }}</p>

            <div class="skills-row">
              <span v-for="skill in m.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>

          <ul class="exp-list" aria-label="經歷">
            <li v-for="(e, i) in m.experiences" :key="i" class="exp-item">
              <div class="exp-head">
                <span class="exp-org">{{ e.org }}</span>
                <span class="exp-role">{{ e.role }}</span>
              </div>
              <p class="exp-desc">{{ e.desc }}</p>
            </li>
          </ul>
        </article>
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

.team-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.member-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 48px;
  padding: 36px;
  background: var(--bg-card-warm);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
}

@media (max-width: 860px) {
  .member-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 28px 22px;
  }
}

.member-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.member-avatar {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: var(--accent-light);
  color: var(--accent);
}

.member-role {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-main);
}

.member-badge {
  display: inline-block;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
}

.nowrap {
  white-space: nowrap;
}

.member-bio {
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-body);
}

.skills-row {
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

/* Experience timeline */
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

.exp-role {
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
</style>
