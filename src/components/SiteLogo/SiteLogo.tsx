import { useTheme } from '../../context/ThemeContext'

const SITE_LOGO = {
  dark: '/ysc-logo-transparent.png',
  light: '/ysc-logo-hero-light.png',
} as const

type SiteLogoProps = {
  className?: string
  variant?: 'default' | 'on-dark'
  logoTheme?: keyof typeof SITE_LOGO
}

export function SiteLogo({
  className = 'site-logo-img',
  variant = 'default',
  logoTheme,
}: SiteLogoProps) {
  const { theme } = useTheme()
  const resolvedTheme = logoTheme ?? theme
  const src = variant === 'on-dark' ? SITE_LOGO.dark : SITE_LOGO[resolvedTheme]

  return (
    <img
      className={className}
      src={src}
      alt=""
      width={144}
      height={144}
      decoding="async"
    />
  )
}
