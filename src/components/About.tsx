import Reveal from './Reveal'
import ImageReveal from './ImageReveal'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white" aria-labelledby="about-heading">
      <div className="container-metro">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left">
            <ImageReveal
              src={ABOUT_IMAGE}
              alt="Contemporary architectural structure — atmospheric stock photography, not a Metro project"
              className="aspect-[4/5] lg:aspect-[3/4] w-full"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="section-label mb-4">ABOUT METRO</p>
              <div className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
              <h2 id="about-heading" className="section-heading mb-8 text-balance">
                BUILDING WITH CONFIDENCE.{' '}
                <span className="text-metro-red">MOVING FORWARD</span> WITH PURPOSE.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-metro-muted text-base sm:text-lg leading-relaxed mb-6">
                Metro Contracting Company LLC is based in Musaffah, Abu Dhabi, United Arab Emirates.
                This website provides a professional introduction to the company, its business
                information, and a platform for visitors to explore its verified services and contact
                its team.
              </p>
              <p className="text-metro-muted text-base leading-relaxed mb-8">
                Built around a clear corporate identity — Metro red, deep navy, and clean white —
                this digital presence reflects a commitment to professionalism, precision, and
                construction excellence in the United Arab Emirates.
              </p>
              <p className="font-heading text-xs tracking-[0.2em] uppercase text-metro-navy/60">
                Brand mark references ESTD. 1993
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
