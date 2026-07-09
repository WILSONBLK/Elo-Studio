'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MotionSystem from '@/components/MotionSystem'
import PageBack from '@/components/PageBack'
import Link from 'next/link'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className="container">
            <PageBack href="/" label="Home" />
            <p className={styles.eyebrow}>About Elo Studio</p>
            <h1 className={styles.headline}>
              We don't build websites.<br />
              <em>We build digital homes.</em>
            </h1>
            <p className={styles.heroSub}>
              Structured, living ecosystems that tell your story, organise your work,
              and turn trust into opportunity.
            </p>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className={styles.belief}>
          <div className="container">
            <div className={styles.split}>
              <div data-motion="from-left" data-motion-delay="0">
                <p className={styles.sideLabel}>The problem</p>
              </div>
              <div>
                <p className={styles.beliefText} data-motion="from-bottom" data-motion-delay="0.06">
                  Most founders, creators, and businesses have their presence scattered everywhere —
                  Instagram posts, LinkedIn content, YouTube videos, podcasts, press features,
                  newsletters, old projects. Everything exists. <strong>But nothing is connected.</strong>
                </p>
                <p className={styles.beliefText} data-motion="from-bottom" data-motion-delay="0.12">
                  Someone who discovers you today has to dig through years of content just to understand
                  who you are, why you do what you do, what you've built, and whether to trust you.
                  Most people leave before finding the answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What a Digital Home is ── */}
        <section className={styles.what}>
          <div className="container">
            <div className={styles.split}>
              <div data-motion="from-left" data-motion-delay="0">
                <p className={styles.sideLabel}>What we do</p>
              </div>
              <div>
                <p className={styles.whatIntro} data-motion="from-bottom" data-motion-delay="0.06">
                  We turn scattered presence into one organised digital home.
                </p>
                <div className={styles.compareRow} data-motion="from-bottom" data-motion-delay="0.12">
                  <div className={styles.compareCol}>
                    <p className={styles.compareHead}>A traditional website says</p>
                    {['Here are our services.', 'Here are our products.', 'Contact us.'].map(t => (
                      <p key={t} className={styles.compareItem}><span className={styles.dash}>—</span>{t}</p>
                    ))}
                  </div>
                  <div className={`${styles.compareCol} ${styles.compareColRight}`}>
                    <p className={styles.compareHead}>A digital home says</p>
                    {["Here's who we are.", "Here's why we exist.", "Here's everything we've built.", "Here's our thinking.", "Here's why people trust us."].map(t => (
                      <p key={t} className={styles.compareItem}><span className={styles.dot}>+</span>{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className={styles.philosophy}>
          <div className="container">
            <div className={styles.philosophyInner} data-motion="from-bottom" data-motion-delay="0">
              <p className={styles.sideLabel}>Our philosophy</p>
              <blockquote className={styles.quote}>
                People trust people.<br />
                People buy from people.<br />
                <em>People remember stories.</em>
              </blockquote>
              <p className={styles.quoteBody}>
                The internet is full of businesses talking about what they sell. Very few explain
                why they exist, who is behind it, what they believe, and how they got here.
                That's where trust comes from. And trust creates opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who we build for ── */}
        <section className={styles.who}>
          <div className="container">
            <div className={styles.split}>
              <div data-motion="from-left" data-motion-delay="0">
                <p className={styles.sideLabel}>Who we build for</p>
              </div>
              <div className={styles.whoGrid} data-motion="from-bottom" data-motion-delay="0.08">
                {[
                  ['Founders', 'People building companies and personal brands.'],
                  ['Creators', 'People with years of content spread across platforms.'],
                  ['Consultants', 'People whose expertise is their product.'],
                  ['Executives', 'People who need a strong digital presence.'],
                  ['Businesses', 'Companies that want a more human, trustworthy experience.'],
                  ['Startups', 'Teams that need authority and credibility fast.'],
                ].map(([title, desc]) => (
                  <div key={title} className={styles.whoItem}>
                    <p className={styles.whoTitle}>{title}</p>
                    <p className={styles.whoDesc}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── The founder ── */}
        <section className={styles.founder}>
          <div className="container">
            <div className={styles.split}>
              <div data-motion="from-left" data-motion-delay="0">
                <p className={styles.sideLabel}>The founder</p>
              </div>
              <div data-motion="from-bottom" data-motion-delay="0.08">
                <h2 className={styles.founderName}>Built by Elo.</h2>
                <p className={styles.founderBio}>
                  A designer and storyteller obsessed with how founders present themselves online.
                  Elo Studio exists because there wasn't a studio doing this work the way it needed
                  to be done — with depth, intention, and craft.
                </p>
                <p className={styles.founderBio}>
                  Every digital home we build is a long-term asset. Something that grows with you,
                  preserves your story, and keeps working for you — even when you're asleep.
                </p>
                <div className={styles.founderLinks}>
                  <a href="https://www.linkedin.com/in/wilson-echetama-a49750248" target="_blank" rel="noopener noreferrer" className={styles.founderLink}>
                    LinkedIn
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="11" height="11">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/mystudio.elo" target="_blank" rel="noopener noreferrer" className={styles.founderLink}>
                    Instagram
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="11" height="11">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.cta}>
          <div className="container">
            <p className={styles.ctaEyebrow}>Ready to own your presence?</p>
            <h2 className={styles.ctaHead}>
              One destination. One story.<br />
              <em>One digital home.</em>
            </h2>
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
