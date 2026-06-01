import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { INTERVIEWS_CONTENT, type InterviewItem } from '../../data/interviewsContent'
import { useInView } from '../../hooks/useInView'
import { getVisibleSlideCount } from '../../utils/visibleSlides'
import './Interviews.css'

const SCROLL_SPEED_PX_S = 98
const USER_PAUSE_MS = 10000

type TrackMetrics = {
  step: number
  loopWidth: number
  slideWidth: number
}

export function Interviews() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const overlayVideoRef = useRef<HTMLVideoElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number | undefined>(undefined)
  const lastFrameRef = useRef(0)
  const isHoveringRef = useRef(false)
  const isPausedRef = useRef(false)
  const expandedIndexRef = useRef<number | null>(null)
  const prefersReducedMotionRef = useRef(false)
  const metricsRef = useRef<TrackMetrics>({ step: 0, loopWidth: 0, slideWidth: 0 })

  const [metrics, setMetrics] = useState<TrackMetrics>({
    step: 0,
    loopWidth: 0,
    slideWidth: 0,
  })
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const {
    watermark,
    eyebrow,
    title,
    description,
    pullQuote,
    sectionIntro,
    resourcesTitle,
    resourcesSubtitle,
    resourceLinks,
    backgroundImage,
    interviews,
  } = INTERVIEWS_CONTENT

  const slideCount = interviews.length
  const expandedInterview: InterviewItem | null =
    expandedIndex === null ? null : interviews[expandedIndex]

  const carouselSlides = useMemo(
    () => [...interviews, ...interviews, ...interviews],
    [interviews],
  )

  const applyTransform = useCallback((offset: number) => {
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(${-offset}px, 0, 0)`
  }, [])

  const syncActiveIndex = useCallback((offset: number) => {
    const { step, loopWidth, slideWidth } = metricsRef.current
    if (step <= 0 || loopWidth <= 0 || slideWidth <= 0) return

    const viewport = viewportRef.current
    const visibleCount = viewport ? getVisibleSlideCount(viewport.clientWidth) : 3
    const wrapped = ((offset % loopWidth) + loopWidth) % loopWidth
    const centerOffset = (step * (visibleCount - 1)) / 2
    const index = Math.floor((wrapped + centerOffset) / step) % slideCount

    setActiveIndex((prev) => (prev === index ? prev : index))
  }, [slideCount])

  const pauseScroll = useCallback((durationMs = USER_PAUSE_MS) => {
    isPausedRef.current = true
    window.setTimeout(() => {
      if (!isHoveringRef.current && expandedIndexRef.current === null) {
        isPausedRef.current = false
      }
    }, durationMs)
  }, [])

  const openVideo = useCallback((index: number) => {
    isPausedRef.current = true
    expandedIndexRef.current = index
    setExpandedIndex(index)
  }, [])

  const closeVideo = useCallback(() => {
    expandedIndexRef.current = null
    setExpandedIndex(null)
    if (!isHoveringRef.current) isPausedRef.current = false
    overlayVideoRef.current?.pause()
  }, [])

  const measureTrack = useCallback(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 16
    const viewportWidth = viewport.clientWidth
    const visibleCount = getVisibleSlideCount(viewportWidth)
    const slideWidth = (viewportWidth - gap * (visibleCount - 1)) / visibleCount
    const step = slideWidth + gap
    const loopWidth = step * slideCount

    viewport.style.setProperty('--interviews-slide-width', `${slideWidth}px`)

    const next: TrackMetrics = {
      step,
      loopWidth,
      slideWidth,
    }

    metricsRef.current = next
    setMetrics(next)

    if (loopWidth > 0 && offsetRef.current >= loopWidth) {
      offsetRef.current %= loopWidth
    }

    applyTransform(offsetRef.current)
    syncActiveIndex(offsetRef.current)
  }, [applyTransform, slideCount, syncActiveIndex])

  const snapToSlide = useCallback(
    (index: number, fromUser = false) => {
      const { step, loopWidth } = metricsRef.current
      if (step <= 0) return

      if (fromUser) pauseScroll()

      const target = ((index % slideCount) + slideCount) % slideCount
      const viewport = viewportRef.current
      const visibleCount = viewport ? getVisibleSlideCount(viewport.clientWidth) : 3
      const centerOffset = (step * (visibleCount - 1)) / 2
      offsetRef.current = Math.max(0, target * step - centerOffset)
      if (loopWidth > 0) {
        offsetRef.current = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth
      }

      applyTransform(offsetRef.current)
      syncActiveIndex(offsetRef.current)
    },
    [applyTransform, pauseScroll, slideCount, syncActiveIndex],
  )

  const nudgeSlide = useCallback(
    (direction: 1 | -1, fromUser = false) => {
      const { step, loopWidth } = metricsRef.current
      if (step <= 0 || loopWidth <= 0) return

      if (fromUser) pauseScroll()

      offsetRef.current += direction * step
      if (offsetRef.current >= loopWidth) offsetRef.current -= loopWidth
      if (offsetRef.current < 0) offsetRef.current += loopWidth

      applyTransform(offsetRef.current)
      syncActiveIndex(offsetRef.current)
    },
    [applyTransform, pauseScroll, syncActiveIndex],
  )

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  }, [])

  useEffect(() => {
    metricsRef.current = metrics
  }, [metrics])

  useEffect(() => {
    measureTrack()
    const viewport = viewportRef.current
    if (!viewport) return

    const observer = new ResizeObserver(measureTrack)
    observer.observe(viewport)
    window.addEventListener('resize', measureTrack)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measureTrack)
    }
  }, [measureTrack])

  useEffect(() => {
    const shouldRun =
      isInView &&
      !prefersReducedMotionRef.current &&
      metrics.loopWidth > 0

    if (!shouldRun) {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = undefined
      }
      return
    }

    const tick = (now: number) => {
      if (lastFrameRef.current === 0) lastFrameRef.current = now

      const elapsed = Math.min((now - lastFrameRef.current) / 1000, 0.05)
      lastFrameRef.current = now

      const paused =
        isPausedRef.current ||
        isHoveringRef.current ||
        expandedIndexRef.current !== null
      const { loopWidth } = metricsRef.current

      if (!paused && loopWidth > 0) {
        offsetRef.current += SCROLL_SPEED_PX_S * elapsed
        if (offsetRef.current >= loopWidth) {
          offsetRef.current -= loopWidth
        }
        applyTransform(offsetRef.current)
        syncActiveIndex(offsetRef.current)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    lastFrameRef.current = 0
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = undefined
      }
      lastFrameRef.current = 0
    }
  }, [isInView, metrics.loopWidth, applyTransform, syncActiveIndex])

  useEffect(() => {
    if (expandedIndex !== null) return

    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === activeIndex && isInView) {
        void video.play().catch(() => {})
      } else {
        video.pause()
        if (index !== activeIndex) video.currentTime = 0
      }
    })
  }, [activeIndex, isInView, expandedIndex])

  useEffect(() => {
    if (expandedIndex === null) return

    const overlay = overlayVideoRef.current
    if (!overlay) return

    void overlay.play().catch(() => {})

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
      overlay.pause()
    }
  }, [expandedIndex, closeVideo])

  return (
    <section
      ref={sectionRef}
      id="interviews"
      className={`interviews${isInView ? ' interviews--visible' : ''}${expandedIndex !== null ? ' interviews--expanded' : ''}`}
      aria-labelledby="interviews-title"
    >
      <div
        className="interviews__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="interviews__overlay" aria-hidden="true" />
      <p className="interviews__watermark" aria-hidden="true">
        {watermark}
      </p>

      <div className="interviews__inner">
        <p className="interviews__intro">{sectionIntro}</p>

        <div className="interviews__layout">
          <div
            className="interviews__carousel-block"
            onMouseEnter={() => {
              isHoveringRef.current = true
            }}
            onMouseLeave={() => {
              isHoveringRef.current = false
            }}
            onFocus={() => pauseScroll()}
          >
            <div className="interviews__carousel">
              <button
                type="button"
                className="interviews__nav interviews__nav--prev"
                onClick={() => nudgeSlide(-1, true)}
                aria-label="Previous interview"
              >
                ‹
              </button>

              <div ref={viewportRef} className="interviews__viewport">
                <div ref={trackRef} className="interviews__track interviews__track--continuous">
                  {carouselSlides.map((item, index) => {
                    const realIndex = index % slideCount
                    const isActive = realIndex === activeIndex
                    return (
                      <article
                        key={`${item.id}-${index}`}
                        className={`interviews__slide${isActive ? ' interviews__slide--active' : ''}`}
                        onClick={() => snapToSlide(realIndex, true)}
                      >
                        <div className="interviews__slide-inner">
                          <video
                            ref={(el) => {
                              videoRefs.current[realIndex] = el
                            }}
                            className="interviews__video"
                            src={item.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-hidden={expandedIndex === realIndex}
                            aria-label={item.title}
                          />
                          <div className="interviews__slide-overlay" aria-hidden="true" />
                          {isActive && (
                            <div className="interviews__slide-caption">
                              <button
                                type="button"
                                className="interviews__play"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  openVideo(realIndex)
                                }}
                                aria-label={`Play ${item.title}`}
                              >
                                <span aria-hidden="true">▶</span>
                              </button>
                              <h3 className="interviews__slide-title">{item.title}</h3>
                              <button
                                type="button"
                                className="interviews__slide-cta"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  openVideo(realIndex)
                                }}
                              >
                                {item.cta}
                              </button>
                            </div>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              <button
                type="button"
                className="interviews__nav interviews__nav--next"
                onClick={() => nudgeSlide(1, true)}
                aria-label="Next interview"
              >
                ›
              </button>
            </div>

            <div className="interviews__dots" role="tablist" aria-label="Interview videos">
              {interviews.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className={`interviews__dot${index === activeIndex ? ' interviews__dot--active' : ''}`}
                  aria-selected={index === activeIndex}
                  aria-label={`Go to ${item.title}`}
                  onClick={() => snapToSlide(index, true)}
                />
              ))}
            </div>
          </div>

          <aside className="interviews__copy">
            <p className="interviews__eyebrow">{eyebrow}</p>
            <h2 id="interviews-title" className="interviews__title">
              {title}
            </h2>
            <p className="interviews__description">{description}</p>
            <blockquote className="interviews__pull-quote">{pullQuote}</blockquote>
          </aside>
        </div>

        <div className="interviews__resources">
          <div className="interviews__resources-node" aria-hidden="true">
            <span className="interviews__resources-icon">✦</span>
          </div>
          <div className="interviews__resources-head">
            <h3 className="interviews__resources-title">{resourcesTitle}</h3>
            <p className="interviews__resources-subtitle">{resourcesSubtitle}</p>
          </div>
          <ul className="interviews__resources-grid">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a className="interviews__resource-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {expandedInterview && expandedIndex !== null && (
        <div
          className="interviews__lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="interviews-lightbox-title"
        >
          <button
            type="button"
            className="interviews__lightbox-backdrop"
            onClick={closeVideo}
            aria-label="Close video"
          />
          <div className="interviews__lightbox-panel">
            <button
              type="button"
              className="interviews__lightbox-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ×
            </button>
            <div className="interviews__lightbox-video-wrap">
              <video
                ref={overlayVideoRef}
                className="interviews__lightbox-video"
                src={expandedInterview.video}
                controls
                playsInline
                preload="auto"
              />
            </div>
            <div className="interviews__lightbox-meta">
              <h3 id="interviews-lightbox-title" className="interviews__lightbox-title">
                {expandedInterview.title}
              </h3>
              <p className="interviews__lightbox-cta">{expandedInterview.cta}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
