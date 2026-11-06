import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Reveal from './Reveal'

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80'

export default function CTA() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${CTA_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Construction site atmosphere — stock photography"
      />
      <div className="absolute inset-0 bg-metro-navy/85" />
      <div className="absolute top-0 left-0 w-1 h-full bg-metro-red" aria-hidden="true" />

      <div className="relative z-10 container-metro text-center">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-wide text-white leading-tight"
          >
            LET&apos;S BUILD{' '}
            <span className="text-metro-red">WHAT&apos;S NEXT.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-white/75 text-base sm:text-lg leading-relaxed">
            Connect with Metro Contracting Company LLC to discuss your requirements and explore
            potential opportunities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              CONTACT OUR TEAM
            </Link>
            <a href={company.phoneTel} className="btn-secondary">
              CALL METRO
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
