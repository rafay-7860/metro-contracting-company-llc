import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'

gsap.registerPlugin(ScrollTrigger)

const BAND_IMAGE =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80'

export default function CinematicBand() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-12%', '12%'])
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
      })
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-metro-charcoal"
      aria-labelledby="cinematic-heading"
    >
      <motion.div
        className="absolute inset-0 scale-110"
        style={{
          y,
          backgroundImage: `url(${BAND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Modern architectural structure — atmospheric stock photography"
      />
      <div className="absolute inset-0 bg-metro-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-metro-charcoal/60 to-transparent" />

      <div className="relative z-10 container-metro py-24">
        <Reveal>
          <div ref={lineRef} className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
          <h2
            id="cinematic-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase tracking-wide text-white leading-[1.05] max-w-3xl"
          >
            FROM VISION
            <br />
            <span className="text-metro-red">TO REALITY.</span>
          </h2>
          <p className="mt-8 max-w-md text-white/75 text-lg leading-relaxed">
            Every successful project begins with a clear vision and a professional approach.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
