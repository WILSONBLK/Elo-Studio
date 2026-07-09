import styles from './Closing.module.css'
import Link from 'next/link'

export default function Closing() {
  return (
    <section id="closing" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.kicker} data-motion="fade-in" data-motion-delay="0">Social platforms rent you an audience.</p>
          <h2 className={styles.headline} data-motion="from-bottom" data-motion-delay="0.1">
            A Digital Home lets you<br /><em>own your presence.</em>
          </h2>
          <p className={styles.sub} data-motion="from-bottom" data-motion-delay="0.2">
            Your story. Your knowledge. Your legacy. All in one place you control.
          </p>
          <Link href="/contact" className="btn btn-home" data-motion="fade-in" data-motion-delay="0.3">
            Build Your Digital Home
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
