import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIsHome from '@/components/WhatIsHome'
import WhyItMatters from '@/components/WhyItMatters'
import TheEcosystem from '@/components/TheEcosystem'
import FeaturedConcepts from '@/components/FeaturedConcepts'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MotionSystem from '@/components/MotionSystem'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WhatIsHome />
        <WhyItMatters />
        <TheEcosystem />
        <FeaturedConcepts />
        <Closing />
      </main>
      <Footer />
      <BackToTop />
      <MotionSystem />
    </>
  )
}
