import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <div className="reveal">
            <div className={styles.portrait}>
              <Image
                src="/founder.jpg"
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

          <div className="reveal reveal-d2">
            <span className="label">About Elo's Studio</span>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              A Studio That Uncovers<br />Who You <em>Really Are.</em>
            </h2>
            <div className="rule" />

            <p className={styles.body}>
              Elo's Studio is a strategic storytelling and digital presence studio. We help
              founders, businesses, creatives, and professionals uncover their story, communicate
              their value, and build a digital presence that creates genuine trust.
            </p>
            <p className={styles.body}>
              We are not a traditional web design agency. We don't start with templates or colour
              palettes. We start with conversations, questions, and a deep curiosity about the
              human beings and businesses we work with.
            </p>

            <div className={styles.ethos}>
              <div className={styles.ethosText}>
                "The story already exists inside every business. Our work is to{' '}
                <em>find it</em>, <em>articulate it</em>, and give it a digital home that does
                it justice."
              </div>
            </div>

            <p className={styles.body}>
              Every client is a collaboration. Every project begins with understanding. Every
              website we build is a reflection of a real identity — not a constructed marketing
              persona.
            </p>

            <div className={styles.stats}>
              {[
                { num: '100%', label: 'Bespoke Work' },
                { num: 'Story', label: 'First Approach' },
                { num: 'Every', label: 'Project Is Personal' },
              ].map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
