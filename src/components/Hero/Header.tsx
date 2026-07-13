import { Link } from 'react-router-dom'
import { SiteLogo } from '../SiteLogo/SiteLogo'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { SiteMenu } from './SiteMenu'
import './SiteMenu.css'

export function Header() {
  return (
    <header className="header site-header-bar site-header-bar--landing">
      <div className="site-header-bar__inner header__inner">
        <div className="header__col header__col--left">
          <SiteMenu variant="icon" />
        </div>

        <div className="header__col header__col--center">
          <Link
            to="/#home"
            className="site-header-logo header__logo"
            aria-label="YSC Home"
          >
            <SiteLogo className="logo__img site-logo-img" />
          </Link>
        </div>

        <div className="header__col header__col--right">
          <ThemeToggle variant="hero" />
        </div>
      </div>
    </header>
  )
}
