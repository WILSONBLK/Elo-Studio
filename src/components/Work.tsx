import styles from './Work.module.css'

const cases = [
  {
    num: '001', year: '2024', tag: 'Interior Design', name: 'Vixx Interiors',
    challenge: 'The founder had fifteen years of extraordinary work and a deep philosophy about space, light, and how interiors shape how people feel. None of it was visible online. The website listed services.',
    story: 'We spent three weeks in deep conversation — learning the founder\'s design philosophy, her early influences, her vision for what interior design could mean for a client\'s life. The result was a site that felt like stepping into her world before ever meeting her.',
    link: 'https://vixxinteriors.com',
    clientType: 'Founder-led studio',
    clientName: 'Vixx Interiors',
    outcome: 'The site now opens with her philosophy — not her services. Visitors understand who she is before they see what she does.',
  },
  {
    num: '002', year: '2025', tag: 'Urban Mobility', name: 'Ejago',
    challenge: 'A product built for a real, underserved need — affordable premium bikes for Nigerian urban life — presented online like any other bike shop. The income-earning angle, which changed the entire value proposition, was almost invisible.',
    story: 'We rebuilt the narrative around the dual promise at Ejago\'s core: not just a way to move, but a way to earn. Every section was structured to help young urban Nigerians see a bike as a financial decision — flexible ownership, delivery gig work, a better daily life.',
    link: 'https://www.ejago.ng',
    clientType: 'Consumer startup',
    clientName: 'Ejago',
    outcome: 'The site now leads with the income opportunity, not the product specs. Visitors arrive understanding what a bike can change — not just what it costs.',
  },
  {
    num: '003', year: '2025', tag: 'Informal Commerce', name: 'Ulahia',
    challenge: 'Millions of small shop owners across Nigeria track their books in their heads, on scraps of paper, or not at all. Ulahia built a simple solution for them — but the product\'s plainness was both its greatest strength and its hardest thing to communicate.',
    story: 'We had to speak to people who\'ve never used accounting software and don\'t want to. The language couldn\'t sound like tech. Every word had to feel like relief — like someone finally understood their problem and fixed it without asking them to change how they work.',
    link: 'https://ulahia.vercel.app',
    clientType: 'Product startup',
    clientName: 'Ulahia',
    outcome: 'A product that now presents itself honestly: not "accounting software" — but the answer to a problem 90% of small sellers in Nigeria live with every day.',
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
                <p className={styles.challenge}>{c.challenge}</p>
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
