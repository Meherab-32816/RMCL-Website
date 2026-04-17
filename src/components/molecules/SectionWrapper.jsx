function SectionWrapper({ id, title, intro, children, bgClassName = 'bg-white' }) {
  return (
    <section className={bgClassName} id={id}>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <header className="mb-8 max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold tracking-wide text-[#0B1F3A] lg:text-4xl">{title}</h2>
          {intro ? <p className="text-base leading-7 text-[#1A1A1A]/85">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
