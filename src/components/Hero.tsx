import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.ambient} aria-hidden="true" />

      {/* Logo — dead centre */}
      <div className={styles.logoWrap} data-motion="fade-in" data-motion-delay="0">
        <div className={styles.logoMark} aria-label="Elo Studio">
          <span className={styles.logoElo}>ELO</span>
          <span className={styles.logoSlashWrap} aria-hidden="true">
            <span className={styles.logoSlash} />
          </span>
          <span className={styles.logoStudioWrap}>
            <span className={styles.logoStudio}>STUDIO</span>
          </span>
        </div>

        <p className={styles.tagline} data-motion="fade-in" data-motion-delay="0.2">
          A Digital Homes Studio.
        </p>
      </div>

      {/* Animated scroll arrow */}
      <a href="#what" className={styles.scrollArrow} aria-label="Scroll to learn more">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-elo)" strokeWidth="1.6">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        <span className={styles.scrollDot} />
      </a>
    </section>
  )
}
