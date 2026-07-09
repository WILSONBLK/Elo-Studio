import type { Metadata } from 'next'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: "Privacy Policy — Elo Studio",
  robots: 'noindex',
}

export default function Privacy() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <a href="/" className={styles.back}>← Back to Elo Studio</a>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: July 2026</p>

        <p className={styles.body}>
          Elo Studio ("we", "us", "our") is a digital homes studio. We build founder-led digital
          presences and take your privacy seriously. This policy explains what information we
          collect, how we use it, and how we protect it.
        </p>

        <h2 className={styles.sectionTitle}>Information We Collect</h2>
        <p className={styles.body}>
          When you submit an enquiry through our contact form, we collect your name, email
          address, and the message you send us. If you choose to share a website URL, that is
          also collected. We do not collect any payment information on this website.
        </p>

        <h2 className={styles.sectionTitle}>How We Use It</h2>
        <p className={styles.body}>
          We use your contact details solely to respond to your enquiry and to follow up on
          potential project work. We will never sell, share, or distribute your information
          to third parties for marketing purposes.
        </p>

        <h2 className={styles.sectionTitle}>Email Communication</h2>
        <p className={styles.body}>
          Enquiry emails are delivered to our studio inbox via Resend, a transactional email
          service. Your information is held within that system only for the purposes of
          delivering the message. We do not subscribe you to any mailing list without your
          explicit consent.
        </p>

        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.body}>
          This website does not use tracking cookies or third-party analytics. Your theme
          preference (light or dark mode) may be saved locally in your browser's storage.
          That data never leaves your device.
        </p>

        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <p className={styles.body}>
          You have the right to request access to, correction of, or deletion of any personal
          data we hold about you. To make a request, contact us at{' '}
          <a href="mailto:mystudio.elo@gmail.com" className={styles.link}>
            mystudio.elo@gmail.com
          </a>
          . We will respond within 30 days.
        </p>

        <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
        <p className={styles.body}>
          We may update this policy from time to time. Any material changes will be reflected
          in the "Last updated" date above. Continued use of this website after an update
          constitutes acceptance of the revised policy.
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
