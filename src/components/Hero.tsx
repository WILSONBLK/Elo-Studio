import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ambient} />
      <div className={styles.grain} />

      <div className={`${styles.top} container`}>
        <span className={styles.kicker}>Strategic Storytelling Studio</span>
        <div className={styles.topLinks}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#cta">Contact</a>
        </div>
      </div>

      <div className={`${styles.content} container`}>
        <div className={`${styles.index} reveal`}>001 — Digital Presence</div>

        <h1 className={`${styles.headline} reveal reveal-d1`}>
          Your Business Has a Story.<br />
          <em>Most Websites Never Tell It.</em>
        </h1>

        <div className={styles.body}>
          <p className={`${styles.sub} reveal reveal-d2`}>
            We help businesses uncover their story, clarify their identity, and transform it into
            a digital presence people trust.
          </p>
          <div className={`${styles.actions} reveal reveal-d3`}>
            <div className={styles.btnRow}>
              <a href="https://wa.me/2348143154972" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a Discovery Call
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#process" className="btn btn-outline-inv">See Our Process</a>
            </div>
            <div className={styles.scroll}>
              <span className={styles.scrollLine} />
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
