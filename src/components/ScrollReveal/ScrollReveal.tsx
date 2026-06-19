import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import './ScrollReveal.css'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

function useRevealOnScroll({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  triggerOnce = true,
}: RevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        if (triggerOnce) observer.disconnect()
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, visible }
}

type RevealLineProps = {
  children: ReactNode
  index?: number
  delay?: number
  className?: string
  as?: ElementType
}

export function RevealLine({
  children,
  index = 0,
  delay = 0,
  className = '',
  as: Tag = 'span',
}: RevealLineProps) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.12 })

  return (
    <Tag
      ref={ref}
      className={`reveal-line${visible ? ' reveal-line--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-i': index, '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      <span className="reveal-line__inner">{children}</span>
    </Tag>
  )
}

type RevealLinesProps = {
  lines: readonly string[]
  className?: string
  lineClassName?: string
  as?: ElementType
  baseDelay?: number
}

export function RevealLines({
  lines,
  className = '',
  lineClassName = '',
  as: Wrapper = 'div',
  baseDelay = 0,
}: RevealLinesProps) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.1 })

  return (
    <Wrapper
      ref={ref}
      className={className}
    >
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className={`reveal-line${visible ? ' reveal-line--visible' : ''}${lineClassName ? ` ${lineClassName}` : ''}`}
          style={
            {
              '--reveal-i': index,
              '--reveal-delay': `${baseDelay}s`,
            } as CSSProperties
          }
        >
          <span className="reveal-line__inner">{line}</span>
        </span>
      ))}
    </Wrapper>
  )
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: FadeInProps) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.12 })

  return (
    <Tag
      ref={ref}
      className={`fade-in${visible ? ' fade-in--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--fade-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

type ListRevealProps = {
  children: ReactNode
  index?: number
  className?: string
  as?: ElementType
}

export function ListReveal({
  children,
  index = 0,
  className = '',
  as: Tag = 'li',
}: ListRevealProps) {
  const { ref, visible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: '0px 0px -4% 0px',
  })

  return (
    <Tag
      ref={ref}
      className={`list-reveal${visible ? ' list-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--list-i': index } as CSSProperties}
    >
      <div className="list-reveal__inner">{children}</div>
    </Tag>
  )
}
