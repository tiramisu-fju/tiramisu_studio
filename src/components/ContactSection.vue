<template>
  <section id="contact" class="contact-section">
    <div class="container contact-container">
      <!-- Left Column: Contact info & Direct LINE -->
      <div class="contact-info">
        <p v-reveal class="section-label">07 / CONTACT</p>
        <h2 v-reveal="80" class="section-title">聊聊你的網站需求</h2>
        <p v-reveal="160" class="contact-intro">
          還沒完全想清楚規格也完全沒關係，簡單描述您目前的生意現況與想解決的痛點，我們會在<strong>營業時間 10 分鐘內親自回覆</strong>，為您梳理最省成本的解法與建議。
        </p>

        <div v-reveal="240" class="direct-channels">
          <a
            href="https://lin.ee/wAmRdNX"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-line btn-line-contact"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.628.629-.345 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.13-.033.199-.033.211 0 .391.09.51.25l2.44 3.315V8.108c0-.345.282-.63.63-.63.345 0 .629.285.629.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.626-.285-.626-.629V8.108c0-.345.281-.63.626-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.142h1.756c.348 0 .629.284.629.629 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            <span>加 LINE 官方帳號立即聊聊</span>
          </a>

          <div class="channel-list">
            <!-- <div class="channel-item">
              <span class="channel-label">專屬 Email：</span>
              <a href="mailto:hello@tiramisustudio.tw" class="channel-link">hello@tiramisustudio.tw</a>
            </div> -->
            <div class="channel-item">
              <span class="channel-label">PRO360 專家合作：</span>
              <a href="https://www.pro360.com.tw/service/724506" target="_blank" rel="noopener noreferrer" class="channel-link">PRO360 官方驗證頁面連結 →</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--bg-card);
  border-top: 1px solid var(--border-light);
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 48px;
  align-items: start;
}

.contact-intro {
  margin: 0 0 32px;
  color: var(--text-body);
  font-size: 16px;
  line-height: 1.7;
}

.contact-intro strong {
  color: var(--text-main);
}

.btn-line-contact {
  padding: 14px 28px;
  font-size: 16px;
  border-radius: var(--radius-md);
  margin-bottom: 28px;
  width: fit-content;
}

.channel-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.channel-item {
  font-size: 15px;
  color: var(--text-body);
}

.channel-label {
  color: var(--text-muted);
}

.channel-link {
  font-weight: 500;
  color: var(--accent);
}

.channel-link:hover {
  text-decoration: underline;
}

.channel-val {
  color: var(--text-main);
  font-weight: 500;
}
</style>
