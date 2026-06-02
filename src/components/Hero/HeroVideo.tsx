type HeroVideoProps = {
  src: string
  mobileSrc?: string
}

export function HeroVideo({ src, mobileSrc }: HeroVideoProps) {
  return (
    <div className="hero__bg" role="presentation">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        {mobileSrc && <source src={mobileSrc} media="(max-width: 768px)" />}
        <source src={src} />
      </video>
    </div>
  )
}
