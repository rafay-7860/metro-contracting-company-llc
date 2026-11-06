import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  const line = (text: string, highlight?: boolean, delay = 0) => (
    <motion.span
      className={`block ${highlight ? 'text-metro-red' : 'text-white'}`}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  )

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] max-h-[1200px] overflow-hidden bg-metro-charcoal"
      aria-label="Hero"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className={`absolute inset-0 ${reduced ? '' : 'animate-slow-zoom'}`}
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label="Architectural skyline photography — stock imagery for visual atmosphere, not a Metro project"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-metro-charcoal/90 via-metro-navy/70 to-metro-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-metro-charcoal/80 via-transparent to-metro-charcoal/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full container-metro flex flex-col justify-center pt-20"
      >
        <motion.p
          className="font-heading text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/80 mb-6 sm:mb-8"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          METRO CONTRACTING COMPANY LLC
          <span className="block sm:inline sm:before:content-['·'] sm:before:mx-3 text-white/60 mt-1 sm:mt-0">
            ABU DHABI, UNITED ARAB EMIRATES
          </span>
        </motion.p>

        <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-medium uppercase leading-[0.95] tracking-wide max-w-4xl">
          {line('BUILDING', false, 0.25)}
          {line('THE FUTURE.', true, 0.35)}
          {line('ENGINEERING', false, 0.45)}
          {line('EXCELLENCE.', true, 0.55)}
        </h1>

        <motion.p
          className="mt-8 max-w-lg text-white/75 text-base sm:text-lg leading-relaxed font-body"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Driven by professional execution, precision, and a commitment to construction excellence.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a href="#about" className="btn-primary">
            DISCOVER METRO
          </a>
          <Link to="/contact" className="btn-secondary">
            CONTACT OUR TEAM
          </Link>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <span className="font-heading text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className={reduced ? '' : 'animate-bounce'} size={20} />
      </motion.a>
    </section>
  )
}
