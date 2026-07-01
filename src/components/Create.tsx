import Image from 'next/image'
import styles from './Create.module.css'

const items = [
  { title: 'Digital Storytelling Websites', desc: 'Full websites built around your narrative — your why, your journey, your philosophy, your work.' },
  { title: 'Founder Profiles', desc: 'Digital presences built for the person — for executives, consultants, and thought leaders.' },
  { title: 'Brand Narratives', desc: 'The articulation of what a brand believes, how it began, and why it exists.' },
  { title: 'Project Showcases', desc: 'Portfolio and case study systems that show the story behind the work, not just the outcome.' },
  { title: 'Company Timelines', desc: 'Visual histories of how a company evolved — a powerful trust-building tool.' },
  { title: 'Digital Portfolios', desc: 'Curated presentations of creative and professional work — designed with intention.' },
  { title: 'Trust-Building Content Systems', desc: 'Editorial systems — blogs, insights, articles — that communicate expertise over time.' },
]

export default function Create() {
  return (
    <section id="create" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="label" data-motion="from-right" data-motion-delay="0">What We Create</span>
            <h2 className="section-title" data-motion="from-top" data-motion-delay="0.1">
              Digital Experiences<br />Rooted in<br /><em>Truth &amp; Identity.</em>
            </h2>
            <div className="rule" data-motion="clip-left" data-motion-delay="0.2" />
            <p className={`body-p ${styles.intro}`} data-motion="from-bottom" data-motion-delay="0.3">
              Every deliverable is built from the inside out — starting with who you are, and
              working outward to how you're perceived.
            </p>

            <div className={styles.list}>
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className={styles.item}
                  data-motion="from-left"
                  data-motion-delay={`${i * 0.065}`}
                >
                  <span className={styles.num}>0{i + 1}</span>
                  <div>
                    <div className={styles.name}>{item.title}</div>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebar} data-motion="scale-up" data-motion-delay="0.1">
            <div className={styles.visual}>
              <Image
                src="/founder.jpg"
                alt="Elo, Founder of Elo's Studio"
                fill
                className={styles.founderImg}
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              <div className={styles.glow} />
              <div className={styles.visualText}>
                <div className={styles.quote}>
                  "Every business has a remarkable story. Most just haven't found the right way to
                  tell it yet."
                </div>
                <div className={styles.attr}>— Elo's Studio</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
