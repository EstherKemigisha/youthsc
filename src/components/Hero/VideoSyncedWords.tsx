import { useEffect, useRef, useState } from 'react'
import type { VideoWordSegment } from '../../data/heroContent'

type VideoSyncedWordsProps = {
  segments: readonly VideoWordSegment[]
}

function getIndexForTime(time: number, segments: readonly VideoWordSegment[]) {
  let elapsed = 0

  for (let i = 0; i < segments.length; i += 1) {
    const isLast = i === segments.length - 1
    const segmentEnd = elapsed + segments[i].duration

    if (isLast || time < segmentEnd) {
      return i
    }

    elapsed = segmentEnd
  }

  return segments.length - 1
}

export function VideoSyncedWords({ segments }: VideoSyncedWordsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const indexRef = useRef(0)
  const transitioningRef = useRef(false)

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>('.hero__video')
    if (!video || segments.length === 0) return

    const switchToIndex = (next: number) => {
      if (next === indexRef.current || transitioningRef.current) return

      transitioningRef.current = true
      setVisible(false)

      window.setTimeout(() => {
        indexRef.current = next
        setActiveIndex(next)
        setVisible(true)
        transitioningRef.current = false
      }, 380)
    }

    const syncToVideoTime = () => {
      const next = getIndexForTime(video.currentTime, segments)

      if (next !== indexRef.current) {
        switchToIndex(next)
      }
    }

    video.addEventListener('timeupdate', syncToVideoTime)
    video.addEventListener('loadedmetadata', syncToVideoTime)
    video.addEventListener('seeked', syncToVideoTime)

    syncToVideoTime()

    return () => {
      video.removeEventListener('timeupdate', syncToVideoTime)
      video.removeEventListener('loadedmetadata', syncToVideoTime)
      video.removeEventListener('seeked', syncToVideoTime)
    }
  }, [segments])

  return (
    <div className="video-words" aria-live="polite">
      <p
        className={
          visible ? 'video-words__text video-words__text--visible' : 'video-words__text'
        }
      >
        {segments[activeIndex].label}
      </p>
    </div>
  )
}
