'use client'

import { useEffect, useRef, useCallback } from 'react'
import styles from './SectionNav.module.css'

const SECTIONS = ['hero', 'problem', 'approach', 'create', 'story', 'process', 'work', 'about', 'cta']
const LAST = SECTIONS.length - 1

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2
}

export default function SectionNav() {
  const indexRef    = useRef(0)      // source of truth for current/intended index
  const animating   = useRef(false)
  const cancelAnim  = useRef<(() => void) | undefined>(undefined)
  const btnUp       = useRef<HTMLButtonElement>(null)
  const btnDown     = useRef<HTMLButtonElement>(null)

  const syncButtons = useCallback((i: number) => {
    if (btnUp.current)   btnUp.current.disabled   = i === 0
    if (btnDown.current) btnDown.current.disabled = i === LAST
  }, [])

  const scrollTo = useCallback((targetY: number, onDone?: () => void) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { window.scrollTo(0, targetY); onDone?.(); return }

    const startY = window.scrollY
    const diff   = targetY - startY
    if (Math.abs(diff) < 2) { window.scrollTo(0, targetY); onDone?.(); return }

    const duration = Math.min(1100, Math.max(650, Math.abs(diff) * 0.38))
    let start: number | null = null
    let raf: number

    const done = () => {
      window.scrollTo(0, targetY)   // guarantee exact landing
      animating.current = false
      cancelAnim.current = undefined
      onDone?.()
    }

    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      window.scrollTo(0, startY + diff * easeInOutQuart(p))
      if (p < 1) raf = requestAnimationFrame(step)
      else done()
    }

    raf = requestAnimationFrame(step)
    cancelAnim.current = () => {
      cancelAnimationFrame(raf)
      animating.current = false
      cancelAnim.current = undefined
    }
  }, [])

  const go = useCallback((dir: 1 | -1) => {
    cancelAnim.current?.()

    const next = Math.max(0, Math.min(LAST, indexRef.current + dir))
    if (next === indexRef.current) return

    indexRef.current = next
    syncButtons(next)
    animating.current = true

    const targetY = next === 0
      ? 0
      : (document.getElementById(SECTIONS[next])?.getBoundingClientRect().top ?? 0) + window.scrollY

    scrollTo(targetY)
  }, [scrollTo, syncButtons])

  useEffect(() => {
    const detect = () => {
      const mid = window.innerHeight / 2
      let closest = 0
      let closestDist = Infinity
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - mid)
        if (dist < closestDist) { closestDist = dist; closest = i }
      })
      return closest
    }

    const onScroll = () => {
      if (animating.current) return   // ignore scroll events during our own animation
      const found = detect()
      if (found !== indexRef.current) {
        indexRef.current = found
        syncButtons(found)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    const initial = detect()
    indexRef.current = initial
    syncButtons(initial)
    return () => window.removeEventListener('scroll', onScroll)
  }, [syncButtons])

  return (
    <div className={styles.nav} aria-label="Section navigation">
      <button ref={btnUp} className={styles.btn} onClick={() => go(-1)} disabled aria-label="Previous section">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="11" height="11">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
      <button ref={btnDown} className={styles.btn} onClick={() => go(1)} aria-label="Next section">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="11" height="11">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
    </div>
  )
}
