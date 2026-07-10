import styles from './Work.module.css'

const cases = [
  {
    num: '001', year: '2024', tag: 'Interior Design', name: 'Vixx Interiors',
    story: 'The founder had fifteen years of extraordinary work and a deep design philosophy, but her website just listed services. We spent three weeks learning her story and rebuilt the site to open with her philosophy — so visitors understand who she is before they see what she does.',
    link: 'https://vixxinteriors.com',
    clientType: 'Founder-led studio',
    clientName: 'Vixx Interiors',
    outcome: 'Visitors now understand who she is before they see what she does.',
  },
  {
    num: '002', year: '2025', tag: 'Urban Mobility', name: 'Ejago',
    story: 'Ejago sells affordable premium bikes for Nigerian urban life, but its income-earning angle — the thing that changed the entire value proposition — was invisible online. We rebuilt the site around that dual promise: not just a way to move, but a way to earn.',
    link: 'https://www.ejago.ng',
    clientType: 'Consumer startup',
    clientName: 'Ejago',
    outcome: 'The site now leads with the income opportunity, not the product specs.',
  },
  {
    num: '003', year: '2025', tag: 'Informal Commerce', name: 'Ulahia',
    story: 'Ulahia built a simple bookkeeping tool for small shop owners who\'ve never used accounting software and don\'t want to. We rewrote the site so every word felt like relief, not tech — the answer to a problem, not another piece of software to learn.',
    link: 'https://ulahia.vercel.app',
    clientType: 'Product startup',
    clientName: 'Ulahia',
    outcome: 'A product that now presents itself as a fix, not "accounting software."',
  },
]

// Alternates: odd cases enter from left, even from right — creates a woven feel
const CASE_MOTIONS = ['from-left', 'from-right', 'from-left'] as const

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label" data-motion="from-top" data-motion-delay="0">Case Studies</span>
            <h2 className="section-title" data-motion="from-left" data-motion-delay="0.1">
              Stories We've<br /><em>Helped Tell.</em>
            </h2>
          </div>
          <a href="#cta" className="btn btn-outline" data-motion="from-right" data-motion-delay="0.1">Start Your Project</a>
        </div>

        <div className={styles.cases}>
          {cases.map((c, i) => (
            <div
              key={c.num}
              className={styles.case}
              data-motion={CASE_MOTIONS[i]}
              data-motion-delay={`${i * 0.08}`}
            >
              <div className={styles.caseIndex}>
                <span className={styles.caseNum}>{c.num}</span>
                <span className={styles.caseYear}>{c.year}</span>
              </div>
              <div className={styles.caseMain}>
                <span className={styles.tag}>{c.tag}</span>
                <div className={styles.name}>{c.name}</div>
                <p className={styles.story}>{c.story}</p>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                )}
              </div>
              <div className={styles.caseMeta}>
                <div>
                  <div className={styles.clientType}>{c.clientType}</div>
                  <div className={styles.clientName}>{c.clientName}</div>
                </div>
                <p className={styles.outcome}>{c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
