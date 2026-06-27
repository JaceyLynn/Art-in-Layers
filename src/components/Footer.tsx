export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="space-y-2">
          <p className="font-display text-lg font-bold">Art in Layers</p>
          <p className="max-w-md text-sm text-[var(--muted-text)]">
            A tactile art puzzle for museum shops and curious hands.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex gap-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted-text)]">
          <a href="#concept" className="hover:text-[var(--text)]">
            Concept
          </a>
          <a href="#gallery" className="hover:text-[var(--text)]">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[var(--text)]">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
