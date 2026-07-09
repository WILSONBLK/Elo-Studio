'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MotionSystem from '@/components/MotionSystem'
import PageBack from '@/components/PageBack'
import styles from './contact.module.css'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('idle')
      alert('Something went wrong. Please try WhatsApp or email directly.')
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.split}>
              <div className={styles.left} data-motion="from-left" data-motion-delay="0">
                <PageBack href="/" label="Home" />
              <p className={styles.eyebrow}>Contact</p>
                <h1 className={styles.headline}>
                  Building something<br /><em>meaningful?</em>
                </h1>
                <p className={styles.sub}>Let's create your digital home.</p>
                <div className={styles.altContact}>
                  <a href="https://wa.me/447480139388" target="_blank" rel="noopener noreferrer" className={styles.altLink}>
                    WhatsApp us directly
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="11" height="11">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="mailto:mystudio.elo@gmail.com" className={styles.altLink}>
                    mystudio.elo@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.right} data-motion="from-right" data-motion-delay="0.1">
                {status === 'sent' ? (
                  <div className={styles.thanks}>
                    <h2 className={styles.thanksHead}>Thank you.</h2>
                    <p className={styles.thanksSub}>We'll be in touch within 48 hours.</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Name</label>
                      <input className={styles.input} id="name" name="name" type="text" required placeholder="Your name" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email</label>
                      <input className={styles.input} id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="website">Website <span className={styles.optional}>(optional)</span></label>
                      <input className={styles.input} id="website" name="website" type="url" placeholder="https://" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="message">Message</label>
                      <textarea className={`${styles.input} ${styles.textarea}`} id="message" name="message" required rows={5} placeholder="Tell us about yourself and what you're building..." />
                    </div>
                    <button type="submit" className="btn btn-home" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Build Your Digital Home'}
                      {status !== 'sending' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <MotionSystem />
    </>
  )
}
