import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

export const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1)

/**
 * Tracks a 0–1 progress value for `target` while the page scrolls.
 * `compute` receives the element's bounding rect and the viewport height and
 * returns the raw progress; it runs at most once per animation frame.
 */
export function useScrollProgress(
  target: Ref<HTMLElement | null>,
  compute: (rect: DOMRect, viewportHeight: number) => number
) {
  const progress = ref(0)
  let frame = 0

  const update = () => {
    frame = 0
    if (!target.value) return
    progress.value = clamp01(compute(target.value.getBoundingClientRect(), window.innerHeight))
  }

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (frame) cancelAnimationFrame(frame)
  })

  return progress
}

/** Progress through a tall wrapper whose child is `position: sticky` */
export const stickyProgress = (stickyTop = 0) => (rect: DOMRect, vh: number) => {
  const pinnedDistance = rect.height - (vh - stickyTop)
  return pinnedDistance > 0 ? (stickyTop - rect.top) / pinnedDistance : 0
}
