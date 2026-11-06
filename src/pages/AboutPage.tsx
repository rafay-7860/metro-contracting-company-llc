import PageHero from '../components/PageHero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import CinematicBand from '../components/CinematicBand'
import CTA from '../components/CTA'
import { company } from '../data/company'
import Reveal from '../components/Reveal'

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT US"
        title="ABOUT METRO CONTRACTING"
        subtitle="A professional introduction to Metro Contracting Company LLC in Abu Dhabi, UAE."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8624?auto=format&fit=crop&w=2000&q=80"
      />
      <About />

      <section className="py-16 lg:py-20 bg-metro-light">
        <div className="container-metro">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <p className="section-label mb-3">Company</p>
                <p className="font-display text-xl text-metro-navy tracking-wide">
                  {company.name}
                </p>
              </div>
              <div>
                <p className="section-label mb-3">Location</p>
                <p className="text-metro-charcoal leading-relaxed">{company.address}</p>
              </div>
              <div>
                <p className="section-label mb-3">Contact</p>
                <a href={company.phoneTel} className="block text-metro-navy hover:text-metro-red">
                  {company.phone}
                </a>
                <a href={company.emailMailto} className="block text-metro-navy hover:text-metro-red mt-1 break-all">
                  {company.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <CinematicBand />
      <CTA />
    </>
  )
}
