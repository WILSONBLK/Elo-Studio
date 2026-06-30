import type { Metadata } from 'next'
import styles from '../privacy/privacy.module.css'

export const metadata: Metadata = {
  title: "Terms & Conditions — Elo's Studio",
  robots: 'noindex',
}

export default function Terms() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Back to Elo's Studio</a>
        <h1 className={styles.title}>Terms &amp; Conditions</h1>
        <p className={styles.updated}>Last updated: June 2026</p>

        <p className={styles.body}>
          Elo's Studio is a strategic storytelling and digital presence studio. Our full terms
          and conditions will be published here shortly.
        </p>
        <p className={styles.body}>
          If you have any questions in the meantime, please reach us at{' '}
          <a href="mailto:mystudio.elo@gmail.com" className={styles.link}>
            mystudio.elo@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
