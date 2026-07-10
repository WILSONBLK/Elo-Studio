import styles from './FeaturedConcepts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const concepts = [
  {
    slug: 'worth-the-table',
    name: 'Worth The Table',
    founder: 'Seyi Martins',
    industry: 'Food & Reviews',
    line: 'Honest reviews. Better decisions.',
    image: '/concepts/worth-the-table.png',
  },
  {
    slug: 'district',
    name: 'District',
    founder: 'Maya Eze',
    industry: 'Real Estate',
    line: 'Find the neighbourhood you\'ll still love ten years from now.',
    image: '/concepts/district.png',
  },
  {
    slug: 'passport-sunday',
    name: 'Passport Sunday',
    founder: 'Amara Okonkwo',
    industry: 'Travel',
    line: 'Collect stories, not stamps.',
    image: '/concepts/passport-sunday.png',
  },
]

export default function FeaturedConcepts() {
  return (
    <section id="concepts" className={styles.section}>
      <div className="container">
        <div className={styles.header} data-motion="from-bottom" data-motion-delay="0">
          <span className="label label-muted">Concepts</span>
          <Link href="/concepts" className="btn btn-outline">
            View All
          </Link>
        </div>

        <div className={styles.grid}>
          {concepts.map((c, i) => (
            <Link
              key={c.slug}
              href="/concepts"
              className={styles.card}
              data-motion="from-bottom"
              data-motion-delay={`${i * 0.1}`}
            >
              <div className={styles.image}>
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.imgOverlay} />
                <div className={styles.imgMeta}>
                  <span className={styles.industry}>{c.industry}</span>
                  <span className={styles.name}>{c.name}</span>
                  <p className={styles.line}>{c.line}</p>
                </div>
              </div>
              <p className={styles.founder}>{c.founder}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
