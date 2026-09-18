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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void currentVideo.play().catch(() => undefined)
      else currentVideo.pause()
    }, { threshold: 0.5 })
    observer.observe(currentVideo)
    return () => observer.disconnect()
  }, [reducedMotion])

  return <div className="video-card">
    <div className="video-topline"><span className="eyebrow"><span className="live-dot" /> AI INTRO</span><span className="video-index">01 / 01</span></div>
    <div className="video-frame"><video ref={video} src={videoSrc} autoPlay={!reducedMotion} muted={false} loop={!reducedMotion} playsInline preload="metadata" aria-label="Animated profile portrait of Kanthimathinathan" /></div>
    <div className="video-footer"><span>Human interface / machine-assisted</span><span>Live profile signal</span></div>
  </div>
}