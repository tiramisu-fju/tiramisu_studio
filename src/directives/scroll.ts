import type { Directive } from 'vue'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs `onEnter` once, the first time the element scrolls into view
const observeOnce = (el: Element, onEnter: () => void) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect()
        onEnter()
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  )
  observer.observe(el)
}

/**
 * v-reveal — fade + rise in when scrolled into view.
 * Optional value is a stagger delay in ms, e.g. v-reveal="i * 80".
 * Uses the Web Animations API with fill: 'backwards', so once finished it
 * leaves no styles behind and the element's own hover transforms keep working.
 * Reduced motion: opacity-only fade.
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return

    el.style.opacity = '0'
    observeOnce(el, () => {
      const keyframes = prefersReducedMotion()
        ? [{ opacity: 0 }, { opacity: 1 }]
        : [
            { opacity: 0, transform: 'translateY(28px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ]
      el.animate(keyframes, {
        duration: 700,
        delay: binding.value ?? 0,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'backwards'
      })
      el.style.opacity = ''
    })
  }
}

/**
 * v-count-up — counts every number in the text up from 0 when scrolled into
 * view, keeping the surrounding text, e.g. "3～6 個月" → "0～0 個月" … "3～6 個月".
 * Value is the final text.
 */
export const vCountUp: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return

    const finalText = binding.value
    const render = (progress: number) =>
      finalText.replace(/\d+/g, (n) => String(Math.round(Number(n) * progress)))

    el.textContent = render(0)
    observeOnce(el, () => {
      const duration = 1400
      const start = performance.now()
      const tick = (now: number) => {
        // rAF timestamps can precede `start` slightly, so clamp to [0, 1]
        const t = Math.min(Math.max((now - start) / duration, 0), 1)
        const eased = 1 - Math.pow(1 - t, 3)
        el.textContent = t < 1 ? render(eased) : finalText
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }
}

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof vReveal
    vCountUp: typeof vCountUp
  }
}
