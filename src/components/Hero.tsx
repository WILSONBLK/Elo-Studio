import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ambient} data-parallax="slow" />
      <div className={styles.grain} />

      {/* Top bar: drops from above */}
      <div className={`${styles.top} container`} data-motion="from-top" data-motion-delay="0">
        <span className={styles.kicker}>Strategic Storytelling Studio</span>
        <div className={styles.topLinks}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#cta">Contact</a>
        </div>
      </div>

      <div className={styles.scene}>
        {/* frag elements carry CSS perspective transforms — fade-in only to avoid conflict */}
        <div className={`${styles.frag} ${styles.fragA}`} data-motion="fade-in" data-motion-delay="0.4">
          <div className={styles.fragFloat}>
            <span className={styles.indexLabel}>001 — Digital Presence</span>
          </div>
        </div>

        <div className={`${styles.frag} ${styles.fragB}`} data-motion="fade-in" data-motion-delay="0.1">
          <h1 className={styles.fragFloat}>
            Your Business<br />Has a Story.
          </h1>
        </div>

        {/* Logo: scales into place — no CSS transform conflict */}
        <div className={styles.logoWrap} data-motion="scale-up" data-motion-delay="0.05">
          <div className={styles.logoGlow} />
          <div className={styles.logoMark}>
            <span className={styles.logoElo}>ELO</span><span className={styles.logoSlash}>/</span><span className={styles.logoSub}>STUDIO</span>
          </div>
        </div>

        <div className={`${styles.frag} ${styles.fragC}`} data-motion="fade-in" data-motion-delay="0.28">
          <div className={styles.fragFloat}>
            <em>Most Websites<br />Never Tell It.</em>
          </div>
        </div>

        <div className={`${styles.frag} ${styles.fragD}`} data-motion="fade-in" data-motion-delay="0.5">
          <div className={styles.fragFloat}>
            We help businesses uncover their story and build a digital
            presence people trust.
          </div>
        </div>
      </div>

      {/* scrollIndicator has translateX(-50%) — fade-in avoids transform conflict */}
      <div className={styles.scrollIndicator} aria-label="Scroll to begin" data-motion="fade-in" data-motion-delay="0.85">
        <span className={styles.scrollText}>Scroll to begin</span>
        <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

      <div className={styles.marqueeBar} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeText}>YOUR STORY&nbsp;&nbsp;·&nbsp;&nbsp;START A CONVERSATION&nbsp;&nbsp;·&nbsp;&nbsp;ELO/STUDIO&nbsp;&nbsp;·&nbsp;&nbsp;STRATEGIC STORYTELLING&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span className={styles.marqueeText}>YOUR STORY&nbsp;&nbsp;·&nbsp;&nbsp;START A CONVERSATION&nbsp;&nbsp;·&nbsp;&nbsp;ELO/STUDIO&nbsp;&nbsp;·&nbsp;&nbsp;STRATEGIC STORYTELLING&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  )
}
