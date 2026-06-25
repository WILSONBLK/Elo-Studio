import type { Metadata } from 'next'
import './globals.css'

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
  },
  twitter: { card: 'summary_large_image' },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className="no-js">
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
      <body>{children}</body>
    </html>
  )
}
