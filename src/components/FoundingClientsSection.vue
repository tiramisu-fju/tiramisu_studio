<script setup lang="ts">
const benefits = [
  {
    tag: '85 折',
    title: '首批專屬特惠價',
    desc: '換取你在 PRO360 留下真實客戶評價，並同意我們將完成網站列為公開作品案例。'
  },
  {
    tag: '+3 個月',
    title: '延長技術保固',
    desc: '比一般保固多出整整 3 個月的免費系統維護、技術諮詢與程式錯誤修復保障。'
  },
  {
    tag: '設計滿意',
    title: '才進入程式開發',
    desc: '首期設計稿驗收若未達預期且雙方無共識，依合約退回設計期訂金，零風險試作。'
  }
]
</script>

<template>
  <section id="early" class="early-section">
    <div class="container">
      <p v-reveal class="section-label">04 / FOUNDING CLIENTS</p>
      <h2 v-reveal="80" class="section-title">首批合作客戶方案</h2>
      <p v-reveal="160" class="section-desc">
        工作室剛成立，我們想用最認真、最無微不至的態度雕琢前幾個案子。限量前 5 位合作客戶，享有以下誠意條件：
      </p>

      <div class="benefits-grid">
        <div v-for="(b, i) in benefits" :key="b.title" v-reveal="i * 100" class="benefit-card">
          <div class="benefit-tag">{{ b.tag }}</div>
          <h3 class="benefit-title">{{ b.title }}</h3>
          <p class="benefit-desc">{{ b.desc }}</p>
        </div>
      </div>

      <!-- Trust note / Future review showcase banner -->
      <div v-reveal class="review-hint-banner">
        <div class="hint-icon">💬</div>
        <div class="hint-content">
          <strong>真實口碑共同成長：</strong>
          我們注重長遠聲譽而非一次性交易。若你在 PRO360 找到我們，亦可直接在平台上發起詢價，享受平台第三方託管與履約保障機制。
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.early-section {
  background: var(--bg-page);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.benefit-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.benefit-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-medium);
  box-shadow: var(--shadow-md);
}

.benefit-tag {
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 700;
  color: var(--accent);
  line-height: 1.1;
  margin-bottom: 12px;
}

.benefit-title {
  margin: 0 0 10px;
  font-size: 19px;
  font-weight: 700;
  color: var(--text-main);
}

.benefit-desc {
  margin: 0;
  color: var(--text-body);
  font-size: 14.5px;
  line-height: 1.6;
}

.review-hint-banner {
  margin-top: 24px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px dashed var(--border-medium);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14.5px;
  color: var(--text-body);
}

.hint-icon {
  font-size: 24px;
  flex-shrink: 0;
}
</style>
