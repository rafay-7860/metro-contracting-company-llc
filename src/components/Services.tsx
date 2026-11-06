import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import Reveal from './Reveal'

interface ServicesProps {
  limit?: number
  showCta?: boolean
}

export default function Services({ limit, showCta = true }: ServicesProps) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section id="services" className="py-20 lg:py-28 bg-metro-light" aria-labelledby="services-heading">
      <div className="container-metro">
        <Reveal>
          <div className="max-w-3xl mb-14 lg:mb-16">
            <p className="section-label mb-4">OUR EXPERTISE</p>
            <div className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
            <h2 id="services-heading" className="section-heading">
              PROFESSIONAL SOLUTIONS.{' '}
              <span className="text-metro-red">ENGINEERING</span> EXCELLENCE.
            </h2>
            <p className="mt-6 text-sm text-metro-muted">
              Proposed service categories — editable and subject to confirmation. Not presented as
              verified company offerings until confirmed.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {list.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <article className="group relative bg-white overflow-hidden h-full flex flex-col border border-transparent hover:border-metro-navy/10 transition-colors duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} — atmospheric stock photography`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-metro-navy/20 group-hover:bg-metro-navy/10 transition-colors" />
                  <span className="absolute top-4 left-4 font-display text-3xl text-white/90 tracking-wider">
                    {service.number}
                  </span>
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl tracking-wide text-metro-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-metro-muted leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-heading text-[11px] font-semibold tracking-[0.18em] uppercase text-metro-red hover:gap-3 transition-all"
                  >
                    Learn More <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link to="/services" className="btn-outline-navy">
                VIEW ALL SERVICES
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
