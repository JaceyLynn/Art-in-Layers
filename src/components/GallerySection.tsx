import { motion, useReducedMotion } from 'framer-motion'
import { galleryItems } from '../data/galleryItems'

function ratioClasses(ratio: (typeof galleryItems)[number]['ratio']) {
  return ratio === 'square' ? 'aspect-square' : 'aspect-[3/2]'
}

export function GallerySection() {
  const reducedMotion = useReducedMotion()
  const squareItems = galleryItems.filter((item) => item.ratio === 'square')
  const landscapeItems = galleryItems.filter((item) => item.ratio === 'landscape')

  return (
    <section id="gallery" className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-28">
      <motion.h2
        initial={reducedMotion ? { opacity: 1 } : { x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.05, ease: 'easeOut' }}
        className="pointer-events-none absolute left-5 top-2 z-20 text-left font-display text-[clamp(1.9rem,8.5vw,11rem)] font-black lowercase leading-none tracking-[0.02em] text-[var(--text)]/75 sm:left-8 sm:top-4"
      >
        gallery
      </motion.h2>

      <div className="mx-auto w-full max-w-[1400px] space-y-10 px-5 pt-20 sm:px-8 sm:pt-24">

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {squareItems.map((item, index) => (
              <motion.figure
                key={item.caption}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: reducedMotion ? 0 : index * 0.09 }}
                className="group m-0"
              >
                <div className={`${ratioClasses(item.ratio)} overflow-hidden border border-[var(--border)] bg-[var(--surface)]`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted-text)]">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {landscapeItems.map((item, index) => (
              <motion.figure
                key={item.caption}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: reducedMotion ? 0 : index * 0.09 }}
                className="group m-0"
              >
                <div className={`${ratioClasses(item.ratio)} overflow-hidden border border-[var(--border)] bg-[var(--surface)]`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted-text)]">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
