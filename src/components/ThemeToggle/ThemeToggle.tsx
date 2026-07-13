import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

type ThemeToggleProps = {
  className?: string
  variant?: 'default' | 'hero'
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3.25v2.25M12 18.5v2.25M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M3.25 12h2.25M18.5 12h2.25M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ThemeToggle({ className = '', variant = 'default' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={[
        'theme-toggle',
        `theme-toggle--${variant}`,
        isDark ? 'theme-toggle--dark' : 'theme-toggle--light',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}
