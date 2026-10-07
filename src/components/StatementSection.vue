<script setup lang="ts">
import { computed, ref } from 'vue'
import { useScrollProgress, stickyProgress, clamp01 } from '../composables/useScrollProgress'

// Characters light up one by one as the visitor scrolls through the pinned section
const segments = [
  { text: '網站不只是資訊的集合，而是品牌與客戶接觸的第一個入口。' },
  { text: '從設計、開發到上線維護，我們' },
  { text: '一層一層', em: true },
  { text: '，陪你把網站做好。' }
]

const chars = segments.flatMap((s) => Array.from(s.text).map((c) => ({ c, em: !!s.em })))

const NAV_HEIGHT = 69
const scroller = ref<HTMLElement | null>(null)
const progress = useScrollProgress(scroller, stickyProgress(NAV_HEIGHT))

// Leave a little breathing room before the first and after the last character
const litCount = computed(() => Math.round(clamp01((progress.value - 0.08) / 0.8) * chars.length))
</script>

<template>
  <section ref="scroller" class="statement-section" aria-label="品牌理念">
    <div class="statement-sticky">
      <p class="statement-text">
        <span
          v-for="(ch, i) in chars"
          :key="i"
          class="char"
          :class="{ lit: i < litCount, em: ch.em }"
          aria-hidden="true"
        >{{ ch.c }}</span>
        <span class="sr-only">{{ segments.map((s) => s.text).join('') }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.statement-section {
  position: relative;
  height: 240vh;
  background: var(--bg-dark);
}

.statement-sticky {
  position: sticky;
  top: 69px;
  height: calc(100vh - 69px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}

.statement-text {
  margin: 0;
  max-width: 980px;
  font-size: clamp(30px, 4.6vw, 60px);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.char {
  color: #FFFFFF;
  opacity: 0.16;
  transition: opacity 0.25s ease;
}

.char.lit {
  opacity: 1;
}

.char.em {
  color: var(--ladyfinger);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .statement-section {
    height: 200vh;
  }
}
</style>
