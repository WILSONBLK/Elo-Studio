import styles from './TheEcosystem.module.css'

const items = [
  { label: 'Story',            desc: 'Who you are and why you do this.' },
  { label: 'Journal',          desc: 'Thoughts, essays, and ideas over time.' },
  { label: 'Content Archive',  desc: 'Years of posts, made searchable and discoverable.' },
  { label: 'Knowledge Base',   desc: 'Everything you\'ve learned, organised.' },
  { label: 'Work & Projects',  desc: 'Current and past ventures, told with depth.' },
  { label: 'Resource Library', desc: 'Tools, books, and recommendations you stand behind.' },
  { label: 'Media',            desc: 'Podcasts, interviews, press, and speaking.' },
  { label: 'Community',        desc: 'Ways for people to be part of your journey.' },
  { label: 'Opportunities',    desc: 'Work with me. Invest. Hire. Collaborate.' },
]

export default function TheEcosystem() {
  return (
    <section id="ecosystem" className={styles.section}>
      <div className="container">

        <div className={styles.header} data-motion="from-bottom" data-motion-delay="0">
          <p className={styles.kicker}>What it contains</p>
          <h2 className={styles.headline}>
            A Digital Home is not a page.<br /><em>It's an ecosystem.</em>
          </h2>
          <p className={styles.sub}>
            Built from whatever you create. Organised so nothing gets lost.
            Designed so everything earns trust.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={item.label} className={styles.item} data-motion="from-bottom" data-motion-delay={`${i * 0.05}`}>
              <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.itemLabel}>{item.label}</span>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
