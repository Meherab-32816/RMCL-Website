import Button from '../atoms/Button'

function Navbar({ brand, navLinks, cta }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F3A]/10 bg-[#F8F9FB]/95 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="text-lg font-bold tracking-wide text-[#0B1F3A]" href="#home">
          {brand}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#0B1F3A]" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href={cta.href} variant="secondary">
          {cta.label}
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
