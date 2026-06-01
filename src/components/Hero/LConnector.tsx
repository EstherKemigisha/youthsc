import { useLayoutEffect, useState } from 'react'

type ConnectorState = {
  path: string
  width: number
  height: number
}

export function LConnector() {
  const [state, setState] = useState<ConnectorState | null>(null)

  useLayoutEffect(() => {
    const updatePath = () => {
      const hero = document.querySelector('.hero')
      const cultureLine = document.querySelector('.headline__title-line--culture')
      const buttonPanel = document.querySelector('.hero__cta-panel')
      const firstButton = document.querySelector('.hero__cta-panel .cta-btn')

      if (!hero || !cultureLine || !buttonPanel || !firstButton) return

      const heroRect = hero.getBoundingClientRect()
      const cultureRect = cultureLine.getBoundingClientRect()
      const panelRect = buttonPanel.getBoundingClientRect()
      const buttonRect = firstButton.getBoundingClientRect()

      // Horizontal starts just past “CULTURE” (gap so line never touches the word)
      const gapFromWord = Math.max(10, cultureRect.height * 0.08)
      const startX = cultureRect.right - heroRect.left + gapFromWord
      const startY =
        cultureRect.top - heroRect.top + cultureRect.height * 0.78
      const cornerX = panelRect.left - heroRect.left + panelRect.width / 2
      const gapFromButton = Math.max(12, buttonRect.height * 0.2)
      const endY = buttonRect.top - heroRect.top - gapFromButton

      setState({
        path: `M ${startX} ${startY} L ${cornerX} ${startY} L ${cornerX} ${endY}`,
        width: heroRect.width,
        height: heroRect.height,
      })
    }

    updatePath()
    window.addEventListener('resize', updatePath)

    const timer = setTimeout(updatePath, 150)

    return () => {
      window.removeEventListener('resize', updatePath)
      clearTimeout(timer)
    }
  }, [])

  if (!state) return null

  return (
    <svg
      className="hero__l-connector"
      viewBox={`0 0 ${state.width} ${state.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={state.path} className="hero__l-connector-path" />
    </svg>
  )
}
