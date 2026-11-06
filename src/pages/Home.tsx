import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import WhyChooseUs from '../components/WhyChooseUs'
import CinematicBand from '../components/CinematicBand'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services limit={6} />
      <Projects limit={4} />
      <WhyChooseUs />
      <CinematicBand />
      <CTA />
      <Contact />
    </>
  )
}
