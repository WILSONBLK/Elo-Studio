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
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label label-inv reveal">Our Approach</span>
            <h2 className="section-title title-inv reveal reveal-d1">
              We Start With<br /><em>Understanding.</em>
            </h2>
            <div className="rule rule-inv reveal reveal-d1" />
          </div>
          <p className="body-p body-p-inv reveal reveal-d2">
            Before a single pixel is placed, we spend significant time learning who you are —
            through interviews, conversations, analysis, and listening. The result is a digital
            experience rooted in truth, not assumption.
          </p>
        </div>

        <div className={`${styles.steps} reveal reveal-d1`}>
          {steps.map((title, i) => (
            <div key={i} className={styles.step}>
              <span className={styles.num}>0{i + 1}</span>
              <div className={styles.title}>{title}</div>
              <div className={styles.line} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
