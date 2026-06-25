import styles from './Footer.module.css'

const nav = [
  { head: 'Navigate', links: [['#problem','The Problem'],['#approach','Our Approach'],['#create','What We Create'],['#process','The Process']] },
  { head: 'Studio',   links: [['#work','Case Studies'],['#about','About Us'],['#story','Why Story Matters']] },
  { head: 'Contact',  links: [['mailto:hello@elos.studio','hello@elos.studio'],['#cta','Book a Discovery Call']] },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>
              ELO<span className={styles.slash}>/</span><span className={styles.sub}>STUDIO</span>
            </div>
            <p className={styles.desc}>
              A strategic storytelling and digital presence studio. We help businesses
              communicate who they are, not just what they sell.
            </p>
            <div className={styles.social}>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:hello@elos.studio" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {nav.map(col => (
            <div key={col.head}>
              <div className={styles.colHead}>{col.head}</div>
              <ul className={styles.links}>
                {col.links.map(([href, label]) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 Elo's Studio. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
