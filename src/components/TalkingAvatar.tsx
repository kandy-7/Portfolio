import { useEffect, useRef, useState } from 'react'
import videoSrc from '../assets/videos/Portfolio-ai-final.mp4'

export function TalkingAvatar() {
  const video = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const currentVideo = video.current
    if (!currentVideo || reducedMotion) {
      currentVideo?.pause()
      return
    }

    currentVideo.muted = true

    const playVideo = () => {
      currentVideo.muted = true
      void currentVideo.play().catch((error: unknown) => {
        console.warn('Video autoplay was blocked:', error)
      })
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) playVideo()
      else currentVideo.pause()
    }, { threshold: 0.5 })

    currentVideo.addEventListener('loadeddata', playVideo)
    currentVideo.addEventListener('canplay', playVideo)
    observer.observe(currentVideo)

    return () => {
      observer.disconnect()
      currentVideo.removeEventListener('loadeddata', playVideo)
      currentVideo.removeEventListener('canplay', playVideo)
    }
  }, [reducedMotion])

  useEffect(() => {
    const currentVideo = video.current
    if (!currentVideo || reducedMotion) return

    const enableAudio = () => {
      currentVideo.muted = false
      void currentVideo.play().catch((error: unknown) => {
        console.warn('Video audio could not be enabled:', error)
      })
      window.removeEventListener('pointerdown', enableAudio)
      window.removeEventListener('keydown', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }

    window.addEventListener('pointerdown', enableAudio, { once: true })
    window.addEventListener('keydown', enableAudio, { once: true })
    window.addEventListener('touchstart', enableAudio, { once: true })

    return () => {
      window.removeEventListener('pointerdown', enableAudio)
      window.removeEventListener('keydown', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }
  }, [reducedMotion])

  return <div className="video-card">
    <div className="video-topline"><span className="eyebrow"><span className="live-dot" /> AI INTRO</span><span className="video-index">01 / 01</span></div>
    <div className="video-frame"><video ref={video} src={videoSrc} autoPlay muted loop playsInline controls={false} preload="metadata" aria-label="Animated profile portrait of Kanthimathinathan" /></div>
    <div className="video-footer"><span>Human interface / machine-assisted</span><span>Live profile signal</span></div>
  </div>
}