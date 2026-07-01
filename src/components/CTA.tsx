import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.inner}>
        <span className="label label-inv" data-motion="clip-bottom" data-motion-delay="0">Start the Conversation</span>
        <h2 className={styles.headline} data-motion="from-top" data-motion-delay="0.12">
          The Story Already Exists.
          <em>We Help You Tell It.</em>
        </h2>
        <p className={styles.sub} data-motion="from-bottom" data-motion-delay="0.26">
          Book a discovery call. No pitch, no pressure — just a genuine conversation about your
          business and what your digital presence could become.
        </p>
        <div className={styles.btns} data-motion="scale-up" data-motion-delay="0.42">
          <a href="https://wa.me/447480139388" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Start the Conversation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <p className={styles.email} data-motion="fade-in" data-motion-delay="0.58">
          Or email us at <a href="mailto:mystudio.elo@gmail.com">mystudio.elo@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
