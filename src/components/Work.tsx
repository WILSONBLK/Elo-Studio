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
    num: '002', year: '2024', tag: 'Professional Services', name: 'Strategic Consulting Firm',
    challenge: 'Two decades of results in organizational transformation — presented as a PowerPoint deck online. Frameworks, diagrams, process charts. Nothing about the human expertise and judgment behind it.',
    story: 'Through founder interviews and client testimonials, we extracted the real story: a practice built on hard-won wisdom, on being in the room when decisions mattered. The new site led with that conviction.',
    link: null,
    clientType: 'Professional services',
    clientName: 'Consulting practice',
    outcome: 'A digital presence that communicates depth and judgment — not just methodology. Prospects arrive already persuaded.',
  },
  {
    num: '003', year: '2025', tag: 'Architecture', name: 'Architecture & Design Practice',
    challenge: 'A small practice doing remarkable, thoughtful work — but online, they looked identical to every other firm. Beautiful photos, no story behind them. Impressive buildings, no context.',
    story: 'We built a site structured around the firm\'s design principles — the beliefs that inform every project. Each case study opened with the brief, the constraints, and the thinking, not just the finished images.',
    link: null,
    clientType: 'Creative practice',
    clientName: 'Architecture firm',
    outcome: 'Work that was always exceptional became legible. Clients now understand the intelligence behind the aesthetics.',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label reveal">Case Studies</span>
            <h2 className="section-title reveal reveal-d1">
              Stories We've<br /><em>Helped Tell.</em>
            </h2>
          </div>
          <a href="#cta" className="btn btn-outline reveal">Start Your Project</a>
        </div>

        <div className={`${styles.cases} reveal reveal-d1`}>
          {cases.map((c) => (
            <div key={c.num} className={styles.case}>
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
    </section>
  )
}
