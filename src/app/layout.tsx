import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Elo's Studio — We Help Businesses Tell Their Story",
  description:
    "Elo's Studio is a strategic storytelling and digital presence studio. We help founders, businesses, and brands uncover their story, clarify their identity, and build a digital presence that creates trust.",
  openGraph: {
    title: "Elo's Studio — We Help Businesses Tell Their Story",
    description:
      'We uncover your story, clarify your identity, and transform it into a digital presence people trust.',
    type: 'website',
    url: 'https://elos.studio/',
    images: [{ url: 'https://elos.studio/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://elos.studio/og-image.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://elos.studio/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`no-js ${cormorant.variable} ${jost.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs synchronously before first paint — sets theme + enables JS reveal class */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try{
    var t=localStorage.getItem('elos-theme')||
      (window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}
  document.documentElement.classList.replace('no-js','js');
})();
            `.trim(),
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
