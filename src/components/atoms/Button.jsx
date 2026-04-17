const variantClasses = {
  primary: 'bg-[#0B1F3A] text-white border-[#0B1F3A] hover:bg-[#102a4d]',
  secondary: 'bg-transparent text-[#0B1F3A] border-[#C8A96A] hover:bg-[#C8A96A]/10',
}

function Button({ children, variant = 'primary', href, onClick, type = 'button' }) {
  const className = `inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantClasses[variant]}`

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
