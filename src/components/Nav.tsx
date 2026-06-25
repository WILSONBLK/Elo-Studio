'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('elos-theme')
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme((saved as 'light' | 'dark') || preferred)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('elos-theme', next)
  }, [theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            ELO<span className={styles.slash}>/</span><span className={styles.sub}>STUDIO</span>
          </a>

          <div className={styles.right}>
            <ul className={styles.links}>
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
            </ul>

            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
            >
              {/* Sun */}
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              {/* Moon */}
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>

            <a href="#cta" className={styles.cta}>Book a Call</a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        {[
          ['#problem', 'The Problem'],
          ['#approach', 'Approach'],
          ['#create', 'What We Create'],
          ['#process', 'The Process'],
          ['#work', 'Work'],
          ['#about', 'About'],
        ].map(([href, label]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <button className={styles.mobileTheme} onClick={toggleTheme}>
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <a href="#cta" onClick={closeMenu}>Book a Discovery Call →</a>
      </div>
    </>
  )
}
