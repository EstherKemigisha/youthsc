import { scrollToSection } from '../../utils/scrollToSection'
import './HeroAboutSeam.css'

export function HeroAboutSeam() {
  return (
    <div className="hero-about-seam">
      <button
        type="button"
        className="hero-about-seam__arrow-btn"
        onClick={() => scrollToSection('#about')}
        aria-label="Scroll to learn more"
      >
        <svg
          className="hero-about-seam__arrow"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 5v12M7 14l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
