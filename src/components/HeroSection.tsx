import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import productHeroAcrylic from '../assets/product-hero-acrylic.png'
import productHero from '../assets/product-hero.png'
import productHeroWalnut from '../assets/product-hero-walnut.png'

const heroFinishes = [
  {
    image: productHero,
    alt: 'Original finish of Art in Layers wooden relief puzzle with separated pieces and artwork card.',
  },
  {
    image: productHeroWalnut,
    alt: 'Walnut finish option of Art in Layers relief puzzle.',
  },
  {
    image: productHeroAcrylic,
    alt: 'Acrylic finish option of Art in Layers relief puzzle.',
  },
]

export function HeroSection() {
  const reducedMotion = useReducedMotion()
  const [finishIndex, setFinishIndex] = useState(0)

  const nextFinish = () => {
    setFinishIndex((index) => (index + 1) % heroFinishes.length)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden border-b border-[var(--border)]"
    >
      <motion.h1
        initial={reducedMotion ? { opacity: 1 } : { x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-5 top-[10vh] z-20 whitespace-nowrap text-left font-display text-[clamp(2.4rem,11vw,15rem)] font-black uppercase leading-[0.82] tracking-[0.02em] text-[var(--text)] sm:left-8"
      >
        ART IN LAYERS
      </motion.h1>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-5 pb-12 pt-28 sm:px-8 md:pb-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end lg:gap-12">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="relative mt-8 lg:mt-12 lg:justify-self-start"
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={heroFinishes[finishIndex].image}
                src={heroFinishes[finishIndex].image}
                alt={heroFinishes[finishIndex].alt}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -36 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-full max-w-[1180px] object-contain lg:max-h-[84vh]"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={nextFinish}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-right text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted-text)] transition-colors duration-300 hover:text-[var(--text)]"
            >
              SEE MORE FINISHES &gt;&gt;&gt;
            </button>
          </div>

          <p className="mt-3 text-[0.68rem] text-[var(--muted-text)]">
            Demonstrated with Johannes Vermeer, Mistress and Maid , c. 1666-67
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: reducedMotion ? 0 : 0.28 }}
          className="space-y-5 p-0 lg:self-end lg:pb-12"
        >
          <p className="text-sm leading-relaxed text-[var(--text)]">
            A relief puzzle for museum shops and curious hands.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#concept"
              className="inline-flex items-center justify-center border border-[var(--text)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[var(--text)] hover:text-[var(--surface)]"
            >
              View Concept
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
