function Footer({ columns, legalText }) {
  return (
    <footer className="bg-[#0B1F3A] text-white" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        {columns.map((column) => (
          <section key={column.title}>
            <h2 className="mb-4 text-lg font-semibold tracking-wide text-[#C8A96A]">{column.title}</h2>
            <ul className="space-y-2 text-sm leading-6 text-white/85">
              {column.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a className="transition-colors hover:text-[#C8A96A]" href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-white/20 px-6 py-5 text-center text-xs text-white/80">{legalText}</div>
    </footer>
  )
}

export default Footer
