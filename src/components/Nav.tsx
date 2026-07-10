'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/concepts', label: 'Concepts' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [theme, setTheme]         = useState<'light' | 'dark'>('light')
  const pathname = usePathname()

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

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Elo Studio">
            <span className={styles.logoElo}>ELO</span>
            <span className={styles.logoSlashWrap} aria-hidden="true">
              <span className={styles.logoSlash} />
            </span>
            <span className={styles.logoStudioWrap}>
              <span className={styles.logoStudio}>STUDIO</span>
            </span>
          </Link>

          <div className={styles.right}>
            <ul className={styles.links}>
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={pathname === l.href ? styles.active : ''}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>

            <Link href="/contact" className={styles.cta}>Build Your Home</Link>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <button className={styles.mobileTheme} onClick={toggleTheme}>
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Link href="/contact" onClick={() => setMenuOpen(false)} className={styles.mobileCta}>
          Build Your Home →
        </Link>
      </div>
    </>
  )
}
