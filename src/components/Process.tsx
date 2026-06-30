import styles from './Process.module.css'

const phases = [
  { title: 'Discover', body: 'Initial conversations, research, and intake to understand your world fully.' },
  { title: 'Understand', body: 'Deep dives into your history, values, clients, and landscape. We listen before we design.' },
  { title: 'Extract', body: 'We draw out your story — the origin, the beliefs, the differentiators that make you you.' },
  { title: 'Structure', body: 'We architect the narrative — deciding what story is told, in what order, and to whom.' },
  { title: 'Design', body: 'Every visual decision serves the story. Premium, editorial design that reflects your identity.' },
  { title: 'Launch', body: 'Your digital presence goes live — refined, tested, ready to make the right first impression.' },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" data-parallax="slow" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label label-inv" data-motion="from-right" data-motion-delay="0">Our Process</span>
            <h2 className="section-title title-inv" data-motion="from-top" data-motion-delay="0.1">
              From Understanding<br />to<br /><em>Digital Experience.</em>
            </h2>
            <div className="rule rule-inv" data-motion="clip-left" data-motion-delay="0.22" />
          </div>
          <p className="body-p body-p-inv" data-motion="from-left" data-motion-delay="0.32">
            Six deliberate phases. Each one deepens our understanding of who you are before we
            build a single page — because clarity of identity is what makes great design possible.
          </p>
        </div>

        <div className={styles.phases}>
          {phases.map((p, i) => (
            <div
              key={p.title}
              className={styles.phase}
              data-motion="from-bottom"
              data-motion-delay={`${i * 0.07}`}
            >
              <span className={styles.num}>0{i + 1}</span>
              <div className={styles.title}>{p.title}</div>
              <p className={styles.body}>{p.body}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
