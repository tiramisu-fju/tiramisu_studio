<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  contact: '',
  industry: '餐飲',
  budget: '3～6 萬',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

const industries = [
  '餐飲',
  '美業',
  '診所',
  '工作室／個人品牌',
  '電商零售',
  '其他'
]

const budgets = [
  '3 萬以下',
  '3～6 萬',
  '6～10 萬',
  '10 萬以上',
  '還不確定'
]

const handleSubmit = () => {
  if (!form.name.trim()) {
    errorMessage.value = '請填寫您的稱呼'
    return
  }
  if (!form.contact.trim()) {
    errorMessage.value = '請填寫 LINE ID 或 Email 以便我們回覆您'
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  // Simulate submission
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
  }, 700)
}

const resetForm = () => {
  form.name = ''
  form.contact = ''
  form.industry = '餐飲'
  form.budget = '3～6 萬'
  form.message = ''
  submitted.value = false
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container contact-container">
      <!-- Left Column: Contact info & Direct LINE -->
      <div class="contact-info">
        <p class="section-label">07 / CONTACT</p>
        <h2 class="section-title">聊聊你的網站需求</h2>
        <p class="contact-intro">
          還沒完全想清楚規格也完全沒關係，簡單描述您目前的生意現況與想解決的痛點，我們會在 <strong>2 小時內親自回覆</strong>，為您梳理最省成本的解法與建議。
        </p>

        <div class="direct-channels">
          <a
            href="https://line.me"
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
            <div class="channel-item">
              <span class="channel-label">專屬 Email：</span>
              <a href="mailto:hello@tiramisustudio.tw" class="channel-link">hello@tiramisustudio.tw</a>
            </div>
            <div class="channel-item">
              <span class="channel-label">PRO360 專家合作：</span>
              <a href="https://pro360.com.tw" target="_blank" rel="noopener noreferrer" class="channel-link">PRO360 官方驗證頁面連結 →</a>
            </div>
            <div class="channel-item">
              <span class="channel-label">服務時段：</span>
              <span class="channel-val">週一至週五 09:30 - 19:30（週末緊急技術留守）</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Form -->
      <div class="contact-form-card">
        <!-- Success State -->
        <div v-if="submitted" class="success-box">
          <div class="success-icon">✓</div>
          <h3 class="success-title">需求已成功送出！</h3>
          <p class="success-desc">
            感謝您的聯繫，我們兩位工程師已收到您的資訊。我們會在 <strong>2 小時內</strong> 透過您留下的 LINE 或 Email 與您接洽！
          </p>
          <button type="button" class="btn btn-secondary btn-sm" @click="resetForm">
            再填寫一筆需求
          </button>
        </div>

        <!-- Form Fields -->
        <form v-else @submit.prevent="handleSubmit" class="inquiry-form">
          <div class="form-title">填寫需求初步諮詢</div>

          <div v-if="errorMessage" class="error-banner">
            {{ errorMessage }}
          </div>

          <div class="form-group">
            <label for="f-name" class="form-label">怎麼稱呼你 <span class="required">*</span></label>
            <input
              id="f-name"
              v-model="form.name"
              type="text"
              placeholder="例如：王小姐 / 陳先生"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <label for="f-contact" class="form-label">LINE ID 或 Email <span class="required">*</span></label>
            <input
              id="f-contact"
              v-model="form.contact"
              type="text"
              placeholder="例如：tiramisu_studio 或 name@gmail.com"
              class="form-input"
              required
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="f-industry" class="form-label">所屬產業</label>
              <select id="f-industry" v-model="form.industry" class="form-select">
                <option v-for="ind in industries" :key="ind" :value="ind">{{ ind }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="f-budget" class="form-label">預算範圍</label>
              <select id="f-budget" v-model="form.budget" class="form-select">
                <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="f-msg" class="form-label">簡單描述目前需求或遇到的問題</label>
            <textarea
              id="f-msg"
              v-model="form.message"
              rows="4"
              placeholder="例如：我們是一間新開幕美睫沙龍，想做一個能線上預約、串接 LINE 通知的網站..."
              class="form-textarea"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary form-submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">傳送中...</span>
            <span v-else>送出詢問（兩小時內親自回覆）</span>
          </button>
        </form>
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

.contact-form-card {
  background: var(--bg-page);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  border: 1px solid var(--border-light);
}

.form-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-main);
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.error-banner {
  background: #FEE2E2;
  color: #DC2626;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  font-size: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
}

.required {
  color: #E11D48;
}

.form-input, .form-select, .form-textarea {
  min-height: 46px;
  padding: 0 14px;
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  background: var(--bg-card);
  color: var(--text-main);
  font-size: 15px;
  outline: none;
  transition: var(--transition);
}

.form-textarea {
  padding: 12px 14px;
  resize: vertical;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
}

.form-submit-btn {
  min-height: 50px;
  font-size: 16px;
  margin-top: 8px;
}

.success-box {
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #22C55E;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
}

.success-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: var(--text-main);
}

.success-desc {
  margin: 0;
  color: var(--text-body);
  font-size: 15px;
  max-width: 400px;
  line-height: 1.6;
}
</style>
