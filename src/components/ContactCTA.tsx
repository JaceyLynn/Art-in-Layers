import { motion, useReducedMotion } from 'framer-motion'

export function ContactCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="contact" className="border-b border-[var(--border)] py-20 sm:py-28">
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[1400px] space-y-8 px-5 sm:px-8"
      >
        <h2 className="max-w-4xl font-display text-[clamp(2.8rem,11vw,8rem)] font-black lowercase leading-[0.9] tracking-[-0.05em]">
          bring it to your shop
        </h2>

        <div className="max-w-2xl space-y-6">
          <p className="text-sm leading-relaxed text-[var(--muted-text)]">
            Interested in a custom museum edition?
            <br />
            Let&apos;s turn one artwork from your collection into a tactile object visitors can build and take
            home.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:jlynn.innov@gmail.com?subject=Request%20Museum%20Shop%20Pitch"
              className="inline-flex items-center justify-center border border-[var(--text)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[var(--text)] hover:text-[var(--surface)]"
            >
              Request Museum Shop Pitch
            </a>
          </div>

          <a href="mailto:jlynn.innov@gmail.com" className="block text-sm text-[var(--muted-text)] underline-offset-4 hover:underline">
            jlynn.innov@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  )
}
