import styles from './Problem.module.css'

const pairs = [
  { bad: ['Most Websites Say', 'What services the company offers'], good: ['Yours Should Explain', 'Why the company exists'] },
  { bad: ['Most Websites Show', 'A list of features and deliverables'], good: ['Yours Should Reveal', 'What the founder truly believes'] },
  { bad: ['Most Websites Present', 'Generic calls to action'], good: ['Yours Should Communicate', 'How the business evolved and why it matters'] },
  { bad: ['Most Websites Create', 'A transaction, not a relationship'], good: ['Yours Should Build', 'Trust before the first conversation'] },
  { bad: ['Most Websites Forget', 'The human being behind the business'], good: ['Yours Should Center', 'The founder, their story, and their why'] },
]

export default function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="label reveal">The Problem</span>
            <h2 className="section-title reveal reveal-d1">
              Most Businesses Are<br /><em>Understood Poorly.</em>
            </h2>
            <div className="rule reveal reveal-d1" />
            <p className={`${styles.intro} reveal reveal-d2`}>
              Many companies have <strong>years of experience</strong>, unique values, remarkable
              journeys, and incredible work.<br /><br />
              Yet their websites communicate none of it.<br /><br />
              Visitors see services. They never see the story.
            </p>
            <div className={`${styles.pullquote} reveal reveal-d3`}>
              <blockquote>
                A website that doesn't tell your story isn't a digital presence — it's a digital
                brochure.
              </blockquote>
              <cite>— Elo's Studio</cite>
            </div>
          </div>

          <div className="reveal reveal-d2">
            <div className={styles.pairs}>
              {pairs.map(({ bad, good }, i) => (
                <div key={i} className={styles.pair}>
                  <div className={`${styles.col} ${styles.colBad}`}>
                    <div className={styles.colHead}>{bad[0]}</div>
                    <p>{bad[1]}</p>
                  </div>
                  <div className={`${styles.col} ${styles.colGood}`}>
                    <div className={`${styles.colHead} ${styles.colHeadGood}`}>{good[0]}</div>
                    <p className={styles.goodText}>{good[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
