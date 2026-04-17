if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.reveal-hero h1, .reveal-hero h2, .reveal-hero .btn', {
    opacity: 0,
    y: 32,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
  });

  gsap.from('.logo-item', {
    scrollTrigger: {
      trigger: '.trust',
      start: 'top 75%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    stagger: 0.12,
  });

  const cards = gsap.utils.toArray('.capability-card');
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      y: 20,
      duration: 0.8,
      delay: 0.1,
      ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
  });

  gsap.from('.authority .ceo-image, .authority .quote-block', {
    scrollTrigger: {
      trigger: '.authority',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    stagger: 0.15,
  });
} else if (typeof IntersectionObserver !== 'undefined') {
  const animatedSelectors = [
    '.reveal-hero h1, .reveal-hero h2, .reveal-hero .btn',
    '.logo-item',
    '.capability-card',
    '.authority .ceo-image, .authority .quote-block',
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translate3d(0,0,0)';
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(animatedSelectors.join(',')).forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 24px, 0)';
    el.style.transition =
      'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    el.style.transitionDelay = `${Math.min(index * 0.03, 0.3)}s`;
    observer.observe(el);
  });
}
