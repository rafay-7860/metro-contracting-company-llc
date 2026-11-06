import { motion, useReducedMotion } from 'framer-motion'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  delay?: number
}

export default function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  delay = 0,
}: ImageRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName}`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover scale-105 ${imgClassName}`}
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  )
}
