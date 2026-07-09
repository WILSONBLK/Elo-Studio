import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MotionSystem from '@/components/MotionSystem'
import PageBack from '@/components/PageBack'
import styles from './concepts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const concepts = [
  {
    num: '007',
    name: 'Worth The Table.',
    founder: 'Seyi Martins',
    industry: 'Food & Reviews',
    image: '/concepts/worth-the-table.png',
    traditional: {
      label: 'Traditional food review website',
      desc: 'Static pages. General information. Hard to build trust. Hard to stand out.',
    },
    digital: {
      label: "Founder's digital home",
      desc: 'A living platform. Updated constantly. Built on trust, honesty and community.',
    },
    problem: 'Generic restaurant directories commoditise the reviewer — you become just another voice, indistinguishable from any other.',
    solution: 'A personal digital home built around Seyi\'s voice and editorial honesty. "Honest reviews. Better decisions." — a platform that grows with his credibility.',
    outcome: 'Readers who return not for restaurants, but for Seyi\'s perspective. Brand partnerships, community, and a media identity that compounds over time.',
    tagline: 'Honest reviews. Better decisions.',
  },
  {
    num: '007',
    name: 'District.',
    founder: 'Maya Eze',
    industry: 'Real Estate',
    image: '/concepts/district.png',
    traditional: {
      label: 'Traditional real estate website',
      desc: 'Static pages. General information. Hard to build trust. Hard to stand out.',
    },
    digital: {
      label: "Founder's digital home",
      desc: 'A living platform. Updated constantly. Built on stories, trust and community.',
    },
    problem: 'A property search site puts every agent on the same level. Maya\'s decade of deeply knowing Lagos neighbourhoods was invisible.',
    solution: 'A digital home built around her perspective — not listings, but neighbourhood knowledge. "Find the neighbourhood you\'ll still love ten years from now."',
    outcome: 'Clients who come in already trusting her judgement. Fewer cold pitches, more meaningful conversations about life decisions — not just property transactions.',
    tagline: 'Find the neighbourhood you\'ll still love ten years from now.',
  },
  {
    num: '007',
    name: 'Passport Sunday.',
    founder: 'Amara Okonkwo',
    industry: 'Travel',
    image: '/concepts/passport-sunday.png',
    traditional: {
      label: 'Traditional travel website',
      desc: 'Static pages. General information. Hard to build trust. Hard to stand out.',
    },
    digital: {
      label: "Founder's digital home",
      desc: 'A living platform. Updated constantly. Built on stories, trust and community.',
    },
    problem: 'Generic travel platforms compete on deals. Amara\'s value is her perspective — the lived experiences and honest cost breakdowns that no booking engine can replicate.',
    solution: 'A digital home around her travel philosophy: "Collect stories, not stamps." A living journal of journeys, communities, and real breakdowns — not destinations to book.',
    outcome: 'A loyal community that follows Amara, not destinations. Trip revenue, newsletter growth, and a media presence that turns travel into a sustainable creative business.',
    tagline: 'Collect stories, not stamps.',
  },
  {
    num: '008',
    name: 'The Workspace Archive.',
    founder: 'Mattia Di Lisio',
    industry: 'Creator / Productivity',
    image: '/concepts/workspace-archive.png',
    traditional: {
      label: 'What a normal creator website looks like',
      desc: 'Focused on links. Designed for redirection.',
    },
    digital: {
      label: "What a founder's digital home looks like",
      desc: 'Focused on knowledge. Designed for discovery.',
    },
    problem: 'A link-in-bio collects links. It cannot collect years of knowledge, recommendations, and evolving setups — the real value Mattia had built.',
    solution: 'A searchable digital archive. "Your workspace is more than a desk. It\'s a story that keeps evolving." — every setup documented, every product contextualised, everything findable.',
    outcome: 'A living home for years of content. Visitors don\'t just follow — they explore. Products get discovered through context, not just affiliate links. Trust compounds.',
    tagline: 'Your workspace is more than a desk. It\'s a story that keeps evolving.',
  },
]

export const metadata = {
  title: 'Concepts — Elo Studio',
  description: 'Founder digital homes — not projects. Vision made visible.',
}

export default function ConceptsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <PageBack href="/" label="Home" />
            <p className={styles.eyebrow}>Concepts</p>
            <h1 className={styles.headline}>
              Not websites.<br /><em>Digital homes.</em>
            </h1>
            <p className={styles.sub}>
              Each concept shows what a digital home could do for a specific founder — the thinking behind it, the story it tells, the opportunities it creates.
            </p>
          </div>
        </section>

        <section className={styles.list}>
          <div className="container">
            {concepts.map((c, i) => (
              <div key={`${c.name}-${i}`} className={styles.concept} data-motion="from-bottom" data-motion-delay={`${i * 0.08}`}>
                <div className={styles.conceptTop}>
                  <div className={styles.conceptMeta}>
                    <span className={styles.num}>Concept {c.num}</span>
                    <span className={styles.industry}>{c.industry}</span>
                  </div>
                  <div className={styles.conceptNames}>
                    <h2 className={styles.conceptName}>{c.name}</h2>
                    <span className={styles.founder}>{c.founder}</span>
                  </div>
                </div>

                <div className={styles.conceptImage}>
                  <Image
                    src={c.image}
                    alt={`${c.name} — ${c.founder}`}
                    width={1400}
                    height={900}
                    className={styles.conceptImg}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>

                <div className={styles.comparison}>
                  <div className={styles.compCol}>
                    <p className={styles.compLabel}>{c.traditional.label}</p>
                    <p className={styles.compDesc}>{c.traditional.desc}</p>
                  </div>
                  <div className={styles.arrow} aria-hidden="true">→</div>
                  <div className={`${styles.compCol} ${styles.compColRight}`}>
                    <p className={styles.compLabel}>{c.digital.label}</p>
                    <p className={styles.compDesc}>{c.digital.desc}</p>
                  </div>
                </div>

                <div className={styles.conceptGrid}>
                  <div>
                    <p className={styles.fieldLabel}>The problem</p>
                    <p className={styles.fieldText}>{c.problem}</p>
                  </div>
                  <div>
                    <p className={styles.fieldLabel}>The solution</p>
                    <p className={styles.fieldText}>{c.solution}</p>
                  </div>
                  <div>
                    <p className={styles.fieldLabel}>The outcome</p>
                    <p className={styles.fieldText}>{c.outcome}</p>
                  </div>
                </div>

                <blockquote className={styles.tagline}>"{c.tagline}"</blockquote>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <h2 className={styles.ctaHead}>Your story belongs here.</h2>
            <Link href="/contact" className="btn btn-home">
              Build Your Digital Home
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <MotionSystem />
    </>
  )
}
