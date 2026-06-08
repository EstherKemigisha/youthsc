import { HERO_CONTENT } from '../../data/heroContent'

export function HeroBackground() {
  const { heroImage } = HERO_CONTENT

  return (
    <div className="hero__bg" role="presentation">
      <img
        className="hero__bg-img"
        src={heroImage.src}
        alt=""
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}
