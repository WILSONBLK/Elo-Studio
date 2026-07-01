import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.split}>
          {/* Portrait: scales into place */}
          <div data-motion="scale-up" data-motion-delay="0">
            <div className={styles.portrait}>
              <Image
                src="/founder2.jpg"
                alt="Elo, Founder of Elo's Studio"
                fill
                className={styles.portraitImg}
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
              <div className={styles.portraitOverlay} />
              <div className={styles.portraitFooter}>
                <div className={styles.portraitName}>Elo</div>
                <div className={styles.portraitRole}>Founder, Elo's Studio</div>
              </div>
            </div>
          </div>

          <div>
            <span className="label" data-motion="from-right" data-motion-delay="0">About Elo's Studio</span>
            <h2 className={`section-title ${styles.title}`} data-motion="from-top" data-motion-delay="0.1">
              A Studio That Uncovers<br />Who You <em>Really Are.</em>
            </h2>
            <div className="rule" data-motion="clip-left" data-motion-delay="0.22" />

            <p className={styles.body} data-motion="from-bottom" data-motion-delay="0.3">
              Elo's Studio is a strategic storytelling and digital presence studio. We don't start
              with templates — we start with conversations, and build a digital presence that
              reflects who you really are.
            </p>

            <div className={styles.ethos} data-motion="from-right" data-motion-delay="0.28">
              <div className={styles.ethosText}>
                "The story already exists inside every business. Our work is to{' '}
                <em>find it</em>, <em>articulate it</em>, and give it a digital home that does
                it justice."
              </div>
            </div>

            <div className={styles.stats}>
              {[
                { num: '100%', label: 'Bespoke Work' },
                { num: 'Story', label: 'First Approach' },
                { num: 'Every', label: 'Project Is Personal' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={styles.stat}
                  data-motion="float-fade"
                  data-motion-delay={`${i * 0.08}`}
                >
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
