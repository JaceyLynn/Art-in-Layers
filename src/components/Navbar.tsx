const navItems = [
  { label: 'Concept', href: '#concept' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-center px-5 py-4 sm:px-8">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 sm:gap-9">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-text)] transition-colors duration-300 hover:text-[var(--text)] focus-visible:text-[var(--text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
