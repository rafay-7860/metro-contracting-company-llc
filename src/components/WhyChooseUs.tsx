import { principles } from '../data/principles'
import Reveal from './Reveal'

export default function WhyChooseUs() {
  return (
    <section id="why-metro" className="py-20 lg:py-28 bg-metro-light" aria-labelledby="why-heading">
      <div className="container-metro">
        <Reveal>
          <div className="max-w-3xl mb-14 lg:mb-16">
            <p className="section-label mb-4">WHY METRO</p>
            <div className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
            <h2 id="why-heading" className="section-heading">
              THE PRINCIPLES BEHIND{' '}
              <span className="text-metro-red">EVERY PROJECT.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.1}>
              <article className="bg-white p-8 lg:p-9 h-full border-t-[3px] border-metro-red">
                <span className="font-display text-4xl text-metro-red tracking-wider">
                  {item.number}
                </span>
                <h3 className="font-display text-2xl text-metro-navy tracking-wide mt-5 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-metro-muted leading-relaxed">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
