import styles from './Footer.module.css'

const nav = [
  { head: 'Studio',   links: [['/concepts','Concepts'],['/about','About'],['/contact','Contact']] },
  { head: 'Connect',  links: [['mailto:mystudio.elo@gmail.com','mystudio.elo@gmail.com'],['https://wa.me/447480139388','WhatsApp'],['https://www.linkedin.com/in/wilson-echetama-a49750248','LinkedIn']] },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.inner}>
        <div className="container">
        <div className={styles.top}>
          <div data-motion="from-left" data-motion-delay="0">
            <div className={styles.logo} aria-label="Elo Studio">
              <span className={styles.logoElo}>ELO</span>
              <span className={styles.logoSlashWrap} aria-hidden="true">
                <span className={styles.logoSlash} />
              </span>
              <span className={styles.logoStudioWrap}>
                <span className={styles.logoStudio}>STUDIO</span>
              </span>
            </div>
            <p className={styles.desc}>
              A digital homes studio. We help founders, creators, and businesses
              build one place that tells their story, organises their work, and earns trust.
            </p>
            <div className={styles.social}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/mystudioelo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/mystudio.elo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/447480139388" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {nav.map((col, i) => (
            <div key={col.head} data-motion="from-bottom" data-motion-delay={`${i * 0.08}`}>
              <div className={styles.colHead}>{col.head}</div>
              <ul className={styles.links}>
                {col.links.map(([href, label]) => (
                  <li key={href}>
                    <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom} data-motion="fade-in" data-motion-delay="0.2">
          <span className={styles.copy}>© {new Date().getFullYear()} Elo&apos;s Studio. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
