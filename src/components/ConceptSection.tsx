import { motion, useReducedMotion } from 'framer-motion'
import productAssembled from '../assets/product-assembled.jpg'

export function ConceptSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="concept" className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-28">
      <motion.h2
        initial={reducedMotion ? { opacity: 1 } : { x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-5 top-2 z-20 text-left font-display text-[clamp(1.9rem,8.5vw,11rem)] font-black lowercase leading-none tracking-[0.02em] text-[var(--text)]/75 sm:left-8 sm:top-4"
      >
        concept
      </motion.h2>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <motion.img
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src={productAssembled}
          alt="Assembled puzzle beside its reference card in a museum-shop presentation style."
          className="w-full object-cover"
        />

        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: reducedMotion ? 0 : 0.15 }}
          className="space-y-5"
        >
          <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">A painting you can build.</h3>
          <p className="text-sm leading-relaxed text-[var(--muted-text)]">
            Art in Layers turns a flat museum image into a dimensional wooden relief. Visitors assemble the
            scene piece by piece, then keep it as a small sculptural object.
          </p>
          <a
            href="#layers"
            className="inline-flex items-center border-b border-[var(--text)] pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em]"
          >
            See the Layers
          </a>
        </motion.div>
      </div>
    </section>
  )
}
