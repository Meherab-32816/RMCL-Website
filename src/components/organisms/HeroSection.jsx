import Button from '../atoms/Button'

function HeroSection({ eyebrow, title, description, primaryCta, secondaryCta }) {
  return (
    <section className="border-b border-[#0B1F3A]/10 bg-[#F8F9FB]" id="home">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-wide text-[#0B1F3A] lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#1A1A1A]/85">{description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
