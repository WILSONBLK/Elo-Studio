import styles from './WhyItMatters.module.css'

const left = [
  'Static pages that rarely change',
  'Talks about the company',
  'Loses your content to time',
  "Rented from platforms you don't control",
  'Generic and forgettable',
  'Built once, then forgotten',
]

const right = [
  'Living ecosystem that grows with you',
  "Built around the founder's story",
  'Archives and organises everything you create',
  'Owned, controlled, and permanent',
  'Personal, unmistakable, and trusted',
  'Compounds in value over your career',
]

export default function WhyItMatters() {
  return (
    <section id="difference" className={styles.section}>
      <div className="container">

        <div className={styles.header} data-motion="from-bottom" data-motion-delay="0">
          <p className={styles.kicker}>The difference</p>
          <h2 className={styles.headline}>
            Algorithms change.<br />Platforms die.<br /><em>A Digital Home is yours.</em>
          </h2>
        </div>

        <div className={styles.table} data-motion="from-bottom" data-motion-delay="0.1">
          <div className={styles.col}>
            <p className={styles.colHead}>Traditional website</p>
            {left.map(item => (
              <div key={item} className={styles.row}>
                <span className={styles.cross} aria-hidden="true">—</span>
                <span className={styles.rowText}>{item}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.col} ${styles.colRight}`}>
            <p className={styles.colHead}>Founder's Digital Home</p>
            {right.map(item => (
              <div key={item} className={styles.row}>
                <span className={styles.check} aria-hidden="true">✦</span>
                <span className={styles.rowText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
