import type { Metadata } from 'next'
import styles from '../privacy/privacy.module.css'

export const metadata: Metadata = {
  title: "Terms & Conditions — Elo Studio",
  robots: 'noindex',
}

export default function Terms() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Back to Elo Studio</a>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <p className={styles.updated}>Last updated: July 2026</p>

        <p className={styles.body}>
          By using the Elo Studio website or engaging with us about project work, you agree
          to the following terms. Please read them carefully.
        </p>

        <h2 className={styles.sectionTitle}>Who We Are</h2>
        <p className={styles.body}>
          Elo Studio is a digital homes studio that designs and builds bespoke digital
          presences for founders. Our services include strategy, design, and development.
          We are based in the UK and work with founders globally.
        </p>

        <h2 className={styles.sectionTitle}>Use of This Website</h2>
        <p className={styles.body}>
          The content on this website — including concepts, copy, visuals, and brand
          materials — is the intellectual property of Elo Studio. You may not reproduce,
          redistribute, or use any part of it without our prior written permission.
        </p>

        <h2 className={styles.sectionTitle}>Concept Work</h2>
        <p className={styles.body}>
          The concepts shown on this website are illustrative examples created by Elo Studio
          to demonstrate what a founder's digital home could look like. They are not live
          products and are not affiliated with any real persons or businesses unless
          explicitly stated.
        </p>

        <h2 className={styles.sectionTitle}>Project Engagements</h2>
        <p className={styles.body}>
          All project work is governed by a separate client agreement signed before any work
          begins. That agreement will detail scope, deliverables, timelines, payment terms,
          intellectual property transfer, and revision policy. These website terms do not
          constitute a contract for services.
        </p>

        <h2 className={styles.sectionTitle}>No Warranties</h2>
        <p className={styles.body}>
          This website is provided "as is". While we take care to keep information accurate,
          we make no warranties — express or implied — about the completeness or reliability
          of the content herein.
        </p>

        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
        <p className={styles.body}>
          To the fullest extent permitted by law, Elo Studio shall not be liable for any
          indirect, incidental, or consequential losses arising from your use of this website
          or from any engagement discussions that did not result in a signed agreement.
        </p>

        <h2 className={styles.sectionTitle}>Governing Law</h2>
        <p className={styles.body}>
          These terms are governed by the laws of England and Wales. Any disputes shall be
          subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <p className={styles.body}>
          Questions? Reach us at{' '}
          <a href="mailto:mystudio.elo@gmail.com" className={styles.link}>
            mystudio.elo@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
