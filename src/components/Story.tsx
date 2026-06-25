import styles from './Story.module.css'

const pillars = [
  { title: 'People Trust People', body: 'Behind every great company is a human being with a reason. When visitors understand the person, they trust the business.' },
  { title: 'People Remember Stories', body: 'Facts are forgotten. Experiences fade. But a story that resonates becomes the reason someone refers you to everyone they know.' },
  { title: 'People Buy What They Understand', body: 'Confusion kills conversion. When someone fully understands what you do and why you do it, saying yes becomes easy.' },
]

const truths = [
  'Most visitors decide within seconds whether they trust a business. Story is what earns that trust.',
  "Your competitors have services pages. A story-driven site gives you something they can never copy.",
  "The right digital experience doesn't just inform — it moves people. It makes them feel something.",
]

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className="container">
        <div className={styles.center}>
          <span className="label label-muted reveal">Why Story Matters</span>
          <h2 className="section-title reveal reveal-d1">
            A Website Should Communicate<br />
            <em>More Than Services.</em><br />
            It Should Communicate <em>Identity.</em>
          </h2>
        </div>

        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <div key={i} className={`${styles.pillar} reveal${i === 1 ? ' reveal-d1' : i === 2 ? ' reveal-d2' : ''}`}>
              <span className={styles.pillarNum}>0{i + 1}</span>
              <div className={styles.pillarTitle}>{p.title}</div>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.truth} reveal`}>
          <div className={styles.truthHeadline}>
            Your digital presence isn't just a marketing asset.<br />
            It's the first chapter of a relationship —{' '}
            <strong>and it should read like one.</strong>
          </div>
          <div className={styles.truthRight}>
            {truths.map((t, i) => (
              <div key={i} className={styles.truthPoint}>
                <div className={styles.dot} />
                <p className={styles.truthText}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
