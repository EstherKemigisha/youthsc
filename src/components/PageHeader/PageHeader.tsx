import { Link } from 'react-router-dom'
import { SiteLogo } from '../SiteLogo/SiteLogo'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { SiteMenu } from '../Hero/SiteMenu'
import '../Hero/SiteMenu.css'
import './PageHeader.css'

type PageHeaderProps = {
  backTo?: string
  backAriaLabel?: string
  logoTheme?: 'dark' | 'light'
}

export function PageHeader({
  backTo = '/#home',
  backAriaLabel = 'Back home',
  logoTheme,
}: PageHeaderProps) {
  return (
    <header className="page-header site-header-bar site-header-bar--page">
      <div className="site-header-bar__inner page-header__inner header__inner">
        <div className="header__col header__col--left">
          <SiteMenu variant="icon" />
        </div>

        <div className="header__col header__col--center">
          <Link
            to="/#home"
            className="page-header__logo site-header-logo"
            aria-label="YSC Home"
          >
            <SiteLogo
              className="page-header__logo-img site-logo-img"
              logoTheme={logoTheme}
            />
          </Link>
        </div>

        <div className="header__col header__col--right">
          <ThemeToggle variant="hero" />
          <Link
            to={backTo}
            className="page-header__back"
            aria-label={backAriaLabel}
          >
            ←
          </Link>
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
