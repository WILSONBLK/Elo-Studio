import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.ambient} />
      <div className={styles.inner}>
        <span className="label label-inv reveal">Start the Conversation</span>
        <h2 className={`${styles.headline} reveal reveal-d1`}>
          The Story Already Exists.
          <em>We Help You Tell It.</em>
        </h2>
        <p className={`${styles.sub} reveal reveal-d2`}>
          Book a discovery call. No pitch, no pressure — just a genuine conversation about your
          business and what your digital presence could become.
        </p>
        <div className={`${styles.btns} reveal reveal-d3`}>
          <a href="https://wa.me/2348143154972" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Start the Conversation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#work" className="btn btn-outline-inv">See Our Work First</a>
        </div>
      </div>
    </section>
  )
}
