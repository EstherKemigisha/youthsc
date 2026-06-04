import { useEffect, useState } from 'react'

const MOBILE_MEDIA_QUERY = '(max-width: 768px)'

type HeroVideoProps = {
  src: string
  mobileSrc?: string
}

export function HeroVideo({ src, mobileSrc }: HeroVideoProps) {
  const [videoSrc, setVideoSrc] = useState(() =>
    typeof window !== 'undefined' &&
      window.matchMedia(MOBILE_MEDIA_QUERY).matches &&
      mobileSrc
      ? mobileSrc
      : src,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)

    const syncSource = () => {
      setVideoSrc(mediaQuery.matches && mobileSrc ? mobileSrc : src)
    }

    syncSource()
    mediaQuery.addEventListener('change', syncSource)
    return () => mediaQuery.removeEventListener('change', syncSource)
  }, [src, mobileSrc])

  return (
    <div className="hero__bg" role="presentation">
      <video
        key={videoSrc}
        className="hero__video"
        src={videoSrc}
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
