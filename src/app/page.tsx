import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Create from '@/components/Create'
import Story from '@/components/Story'
import Process from '@/components/Process'
import Work from '@/components/Work'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import MotionSystem from '@/components/MotionSystem'
import SectionNav from '@/components/SectionNav'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Create />
        <Story />
        <Process />
        <Work />
        <About />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <SectionNav />
      <MotionSystem />
    </>
  )
}
