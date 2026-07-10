import styles from './WhatIsHome.module.css'

export default function WhatIsHome() {
  return (
    <section id="what" className={styles.section}>
      <div className="container">

        <div className={styles.intro} data-motion="from-bottom" data-motion-delay="0">
          <p className={styles.kicker}>The problem</p>
          <h2 className={styles.headline}>
            Most founders have a presence.<br />
            <em>None of them have a home.</em>
          </h2>
        </div>

        <div className={styles.scattered} data-motion="from-bottom" data-motion-delay="0.1">
          {[
            'LinkedIn content', 'Instagram posts', 'YouTube videos', 'Podcasts',
            'Press features', 'Articles', 'Newsletters', 'Awards',
            'Old projects', 'Interviews', 'Products', 'Company updates',
          ].map(item => (
            <span key={item} className={styles.scatteredItem}>{item}</span>
          ))}
          <span className={styles.scatteredConclusion}>Everything exists. But nothing is connected.</span>
        </div>

        <div className={styles.questions} data-motion="from-bottom" data-motion-delay="0.14">
          <p className={styles.questionsLabel}>Someone discovering you today has to dig just to find out —</p>
          <div className={styles.questionsList}>
            {['Who are you?', 'Why do you do this?', 'What have you built?', 'Why should I trust you?', 'How do I work with you?'].map(q => (
              <span key={q} className={styles.questionItem}>{q}</span>
            ))}
          </div>
          <p className={styles.questionsConclude}>Most people leave before finding the answers.</p>
        </div>

        <div className={styles.answer} data-motion="from-bottom" data-motion-delay="0.2">
          <div className={styles.answerLeft}>
            <p className={styles.answerLabel}>The solution</p>
          </div>
          <div className={styles.answerRight}>
            <p className={styles.answerText}>
              We turn all of that scattered information into one organised digital home — a place where people can understand your story, explore your work, discover your expertise, and build trust fast. It grows with you. It works for you. And unlike social platforms, <span className={styles.ownItBox}>you own it.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
