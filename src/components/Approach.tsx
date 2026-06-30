import styles from './Approach.module.css'

const steps = [
  'Discovery Interviews',
  'Founder Conversations',
  'Business Questionnaires',
  'Brand Analysis',
  'Customer Perspective',
  'Story Extraction',
  'Digital Experience Design',
]

export default function Approach() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label label-inv" data-motion="clip-bottom" data-motion-delay="0">Our Approach</span>
            <h2 className="section-title title-inv" data-motion="rotate-left" data-motion-delay="0.1">
              We Start With<br /><em>Understanding.</em>
            </h2>
            <div className="rule rule-inv" data-motion="clip-left" data-motion-delay="0.22" />
          </div>
          <p className="body-p body-p-inv" data-motion="from-bottom" data-motion-delay="0.32">
            Before a single pixel is placed, we spend significant time learning who you are —
            through interviews, conversations, analysis, and listening. The result is a digital
            experience rooted in truth, not assumption.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((title, i) => (
            <div
              key={title}
              className={styles.step}
              data-motion="scale-up"
              data-motion-delay={`${i * 0.065}`}
            >
              <span className={styles.num}>0{i + 1}</span>
              <div className={styles.title}>{title}</div>
              <div className={styles.line} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
