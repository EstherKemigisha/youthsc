type HeroVideoProps = {
  src: string
}

export function HeroVideo({ src }: HeroVideoProps) {
  return (
    <div className="hero__bg" role="presentation">
      <video
        className="hero__video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
  )
}
