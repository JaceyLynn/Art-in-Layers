import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import productExploded from '../assets/product-exploded.png'

export function ExplodedLayersSection() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [14, -14])

  return (
    <section
      id="layers"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-28"
    >
      <motion.h2
        initial={reducedMotion ? { opacity: 1 } : { x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.05, ease: 'easeOut' }}
        className="pointer-events-none absolute left-5 top-2 z-20 text-left font-display text-[clamp(1.9rem,8.5vw,11rem)] font-black lowercase leading-none tracking-[0.02em] text-[var(--text)]/75 sm:left-8 sm:top-4"
      >
        layers
      </motion.h2>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-9 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <motion.div style={{ y }} className="relative mx-auto w-full max-w-[920px]">
          <img
            src={productExploded}
            alt="Exploded arrangement of Art in Layers wooden puzzle pieces around the base panel."
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-5"
        >
          <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">Flat artwork. Dimensional memory.</h3>
          <p className="text-sm leading-relaxed text-[var(--muted-text)]">
            Each cut piece becomes a layer of the image, revealing depth, composition, and gesture through
            touch.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-text)]">
            Part puzzle. Part relief. Part keepsake.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
