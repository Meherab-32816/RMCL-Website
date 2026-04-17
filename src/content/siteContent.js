const siteContent = {
  navbar: {
    brand: 'RMCL',
    navLinks: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Approach', href: '#approach' },
    ],
    cta: { label: 'Contact Us', href: '#contact' },
  },
  hero: {
    eyebrow: 'Research and Management Consultants Ltd',
    title: 'Evidence-driven consulting for policy, strategy, and sustainable growth.',
    description:
      'RMCL partners with public institutions, development programs, and private sector leaders to deliver practical research, strategic advisory, and implementation support that improves outcomes.',
    primaryCta: { label: 'Discuss Your Project', href: '#contact' },
    secondaryCta: { label: 'Explore Services', href: '#services' },
  },
  services: {
    title: 'Core Consulting Services',
    intro:
      'Our multidisciplinary teams combine analytical depth with field experience to help organizations make confident, accountable decisions.',
    cards: [
      {
        title: 'Policy & Program Research',
        description:
          'Applied research, baseline studies, and impact assessments that strengthen policy design and program effectiveness.',
      },
      {
        title: 'Strategy & Organizational Advisory',
        description:
          'Strategic planning, operational diagnostics, and performance frameworks aligned with institutional priorities.',
      },
      {
        title: 'Monitoring, Evaluation & Learning',
        description:
          'Results frameworks, evaluation systems, and learning agendas that turn data into actionable improvements.',
      },
    ],
  },
  approach: {
    title: 'How We Work',
    intro:
      'We follow a collaborative delivery model focused on context, rigor, and measurable value.',
    points: [
      'Co-define objectives and success metrics with your stakeholders.',
      'Use mixed-method research to produce reliable, decision-ready insights.',
      'Translate findings into implementation plans with clear ownership.',
    ],
  },
  footer: {
    columns: [
      {
        title: 'RMCL',
        items: [
          { label: 'About Us', href: '#about' },
          { label: 'Our Services', href: '#services' },
          { label: 'Delivery Approach', href: '#approach' },
        ],
      },
      {
        title: 'Practice Areas',
        items: [
          { label: 'Public Policy' },
          { label: 'Development Programs' },
          { label: 'Institutional Strengthening' },
        ],
      },
      {
        title: 'Contact',
        items: [
          { label: 'info@rmcl.global', href: 'mailto:info@rmcl.global' },
          { label: '+880 1711-000000', href: 'tel:+8801711000000' },
          { label: 'Dhaka, Bangladesh' },
        ],
      },
      {
        title: 'Regional Office',
        items: [
          { label: 'Nairobi, Kenya' },
          { label: 'Partnership Inquiries', href: 'mailto:partnerships@rmcl.global' },
        ],
      },
    ],
    legalText: '© 2026 Research and Management Consultants Ltd. All rights reserved.',
  },
}

export default siteContent
