import type { Metadata } from 'next'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: "Privacy Policy — Elo's Studio",
  robots: 'noindex',
}

export default function Privacy() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Back to Elo's Studio</a>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 2026</p>

        <p className={styles.body}>
          Elo's Studio is a strategic storytelling and digital presence studio. We take your
          privacy seriously. This page will contain our full privacy policy shortly.
        </p>
        <p className={styles.body}>
          In the meantime, if you have any questions about how we handle your data, please
          contact us at{' '}
          <a href="mailto:mystudio.elo@gmail.com" className={styles.link}>
            mystudio.elo@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
