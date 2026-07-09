'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ─── Motion vocabulary ─────────────────────────────────────────────────────
// Each entry: from-state (hidden), to-state (visible), exit-state (leaving up).
// Entrance: fires when element scrolls into view from below.
// Exit:     fires when element scrolls out at the top.
// Both reverse naturally when the user scrolls the opposite direction.
interface MotionDef {
  from: gsap.TweenVars
  to: gsap.TweenVars
  exit: gsap.TweenVars
  ease: string
  exitEase: string
  dur: number
  exitDur: number
}

const DEFS: Record<string, MotionDef> = {
  'from-left': {
    from:    { x: -72, opacity: 0 },
    to:      { x: 0,   opacity: 1 },
    exit:    { x: 56,  opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.85, exitDur: 0.6,
  },
  'from-right': {
    from:    { x: 72,  opacity: 0 },
    to:      { x: 0,   opacity: 1 },
    exit:    { x: -56, opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.85, exitDur: 0.6,
  },
  'from-top': {
    from:    { y: -56, opacity: 0 },
    to:      { y: 0,   opacity: 1 },
    exit:    { y: -44, opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.75, exitDur: 0.55,
  },
  'from-bottom': {
    from:    { y: 64,  opacity: 0 },
    to:      { y: 0,   opacity: 1 },
    exit:    { y: 40,  opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.85, exitDur: 0.6,
  },
  'scale-up': {
    from:    { scale: 0.84, opacity: 0 },
    to:      { scale: 1,    opacity: 1 },
    exit:    { scale: 0.92, opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.9, exitDur: 0.65,
  },
  'rotate-left': {
    from:    { rotation: -6, x: -32, opacity: 0 },
    to:      { rotation: 0,  x: 0,   opacity: 1 },
    exit:    { rotation: 4,  x: 28,  opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.9, exitDur: 0.6,
  },
  'rotate-right': {
    from:    { rotation: 6,  x: 32,  opacity: 0 },
    to:      { rotation: 0,  x: 0,   opacity: 1 },
    exit:    { rotation: -4, x: -28, opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.9, exitDur: 0.6,
  },
  // clip-path types: CSS sets initial clip-path; opacity stays 1 throughout
  'clip-left': {
    from:    { clipPath: 'inset(0 100% 0 0)' },
    to:      { clipPath: 'inset(0 0% 0 0)'   },
    exit:    { clipPath: 'inset(0 0 0 100%)' },
    ease: 'power3.inOut', exitEase: 'power2.in', dur: 0.8, exitDur: 0.5,
  },
  'clip-bottom': {
    from:    { clipPath: 'inset(100% 0 0 0)' },
    to:      { clipPath: 'inset(0% 0 0 0)'   },
    exit:    { clipPath: 'inset(0 0 100% 0)' },
    ease: 'power3.inOut', exitEase: 'power2.in', dur: 0.8, exitDur: 0.55,
  },
  'float-fade': {
    from:    { y: 36,  opacity: 0, scale: 0.97 },
    to:      { y: 0,   opacity: 1, scale: 1    },
    exit:    { y: -24, opacity: 0, scale: 0.97 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 0.9, exitDur: 0.65,
  },
  'rise-expand': {
    from:    { y: 80,  scale: 0.88, opacity: 0 },
    to:      { y: 0,   scale: 1,    opacity: 1 },
    exit:    { y: -36, scale: 0.94, opacity: 0 },
    ease: 'power3.out', exitEase: 'power2.in', dur: 1.0, exitDur: 0.7,
  },
  // Safe for elements with existing CSS transforms (no x/y/scale added)
  'fade-in': {
    from:    { opacity: 0 },
    to:      { opacity: 1 },
    exit:    { opacity: 0 },
    ease: 'power2.out', exitEase: 'power2.in', dur: 1.0, exitDur: 0.7,
  },
}

export default function MotionSystem() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      document.querySelectorAll<HTMLElement>('[data-motion]').forEach(el => {
        el.style.removeProperty('opacity')
        el.style.removeProperty('transform')
        el.style.removeProperty('clip-path')
      })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const triggers: ReturnType<typeof ScrollTrigger.create>[] = []
    const tweens: gsap.core.Tween[] = []

    document.querySelectorAll<HTMLElement>('[data-motion]').forEach(el => {
      const type = el.dataset.motion!
      const def = DEFS[type]
      if (!def) return

      const delay = parseFloat(el.dataset.motionDelay || '0')

      // Position element in its "from" state immediately
      gsap.set(el, def.from)

      // ── Enter: element scrolls in from below; stays visible once in
      const enterST = ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(el, {
            ...def.to,
            duration: def.dur * 0.75,
            ease: def.ease,
            delay,
            overwrite: 'auto',
          })
        },
        onLeaveBack: () => {
          gsap.to(el, {
            ...def.from,
            duration: def.dur * 0.4,
            ease: def.exitEase,
            delay: 0,
            overwrite: 'auto',
          })
        },
      })

      triggers.push(enterST)
    })

    // ── Ambient parallax elements (data-parallax="slow"|"medium")
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
      const travel = el.dataset.parallax === 'slow' ? -60 : -100
      const section = el.closest('section') || el.parentElement || el

      const tween = gsap.to(el, {
        y: travel,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      tweens.push(tween)
    })

    return () => {
      triggers.forEach(t => t.kill())
      tweens.forEach(t => t.kill())
    }
  }, [])

  return null
}
