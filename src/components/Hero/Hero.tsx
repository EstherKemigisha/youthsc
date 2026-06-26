import { Link } from 'react-router-dom'
import { Header } from './Header'
import { useHeroScroll } from './useHeroScroll'
import './Hero.css'

export function Hero() {
  const heroRef = useHeroScroll()

  return (
    <main className="landing-page">
      <section
        ref={heroRef}
        id="home"
        className="hero hero--video"
        aria-label="Landing page"
      >
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero/hero-landing-mobile.jpg"
          aria-hidden="true"
        >
          <source src="/Christ.mp4" type="video/mp4" />
        </video>

        <div className="hero__scrim" aria-hidden="true" />

        <Header />

        <Link to="/join" className="hero__join-button">
          JOIN US <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  )
}
