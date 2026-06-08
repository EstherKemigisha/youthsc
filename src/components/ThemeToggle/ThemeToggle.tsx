import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

type ThemeToggleProps = {
  className?: string
  variant?: 'default' | 'hero'
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3.25v2.1M12 18.65v2.1M4.75 12h2.1M17.15 12h2.1M6.4 6.4l1.48 1.48M16.12 16.12l1.48 1.48M6.4 17.6l1.48-1.48M16.12 7.88l1.48-1.48"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.2 4.1a7.25 7.25 0 1 0 4.7 11.45A6.25 6.25 0 0 1 15.2 4.1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
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
      <span className="theme-toggle__indicator" aria-hidden="true" />
      <span className="theme-toggle__option theme-toggle__option--sun" aria-hidden="true">
        <SunIcon />
      </span>
      <span className="theme-toggle__option theme-toggle__option--moon" aria-hidden="true">
        <MoonIcon />
      </span>
    </button>
  )
}
