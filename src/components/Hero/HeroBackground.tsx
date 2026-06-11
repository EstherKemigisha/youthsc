import { HERO_CONTENT } from '../../data/heroContent'

export function HeroBackground() {
  const { heroImage, heroMobileImage } = HERO_CONTENT

  return (
    <div className="hero__bg" role="presentation">
      <picture>
        <source media="(max-width: 768px)" srcSet={heroMobileImage.src} />
        <img
          className="hero__bg-img"
          src={heroImage.src}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  )
}
