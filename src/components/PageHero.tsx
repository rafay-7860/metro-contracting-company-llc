import { motion, useReducedMotion } from 'framer-motion'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  image: string
}

export default function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  const reduced = useReducedMotion()

  return (
    <section className="relative h-[50vh] min-h-[360px] max-h-[520px] overflow-hidden bg-metro-charcoal pt-[72px] lg:pt-[84px]">
      <div
        className={`absolute inset-0 ${reduced ? '' : 'animate-slow-zoom'}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Architectural photography — atmospheric stock imagery"
      />
      <div className="absolute inset-0 bg-metro-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-metro-charcoal/60 to-transparent" />

      <div className="relative z-10 h-full container-metro flex flex-col justify-end pb-12 lg:pb-16">
        <motion.p
          className="section-label !text-metro-red mb-3"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-wide text-white leading-tight max-w-3xl"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 max-w-xl text-white/70 text-base leading-relaxed"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
