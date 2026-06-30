'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { window.scrollTo(0, 0); return }

    const startY = window.scrollY
    const duration = Math.min(1100, Math.max(650, startY * 0.38))
    let startTime: number | null = null

    function step(ts: number) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = progress < 0.5 ? 8 * progress ** 4 : 1 - (-2 * progress + 2) ** 4 / 2
      window.scrollTo(0, startY * (1 - ease))
      if (progress < 1) requestAnimationFrame(step)
      else window.scrollTo(0, 0)
    }

    requestAnimationFrame(step)
  }

  return (
    <button
      className={`btt${visible ? ' visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
