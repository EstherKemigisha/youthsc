import { useEffect, useRef, useState } from 'react'

type UseScrollSectionOptions = {
  cssVar?: string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollSection({
  cssVar = '--section-scroll',
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  triggerOnce = true,
}: UseScrollSectionOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    let frame = 0

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)))
      section.style.setProperty(cssVar, progress.toFixed(4))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsInView(true)
        if (triggerOnce) observer.disconnect()
      },
      { threshold, rootMargin },
    )

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateScroll)
    }

    observer.observe(section)
    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [cssVar, rootMargin, threshold, triggerOnce])

  return { ref, isInView }
}
