import styles from './Story.module.css'

const pillars = [
  { title: 'People Trust People', body: 'Behind every great company is a human being with a reason. When visitors understand the person, they trust the business.' },
  { title: 'People Remember Stories', body: 'Facts are forgotten. Experiences fade. But a story that resonates becomes the reason someone refers you to everyone they know.' },
  { title: 'People Buy What They Understand', body: 'Confusion kills conversion. When someone fully understands what you do and why you do it, saying yes becomes easy.' },
]

// Pillars cycle through three distinct entrance directions
const PILLAR_MOTIONS = ['rotate-left', 'float-fade', 'rotate-right'] as const

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.center}>
          <span className="label label-muted" data-motion="from-left" data-motion-delay="0">Why Story Matters</span>
          <h2 className="section-title" data-motion="rise-expand" data-motion-delay="0.1">
            A Website Should Communicate<br />
            <em>More Than Services.</em><br />
            It Should Communicate <em>Identity.</em>
          </h2>
        </div>

        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={styles.pillar}
              data-motion={PILLAR_MOTIONS[i]}
              data-motion-delay={`${i * 0.1}`}
            >
              <span className={styles.pillarNum}>0{i + 1}</span>
              <div className={styles.pillarTitle}>{p.title}</div>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
