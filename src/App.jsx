import Button from './components/atoms/Button'
import SectionWrapper from './components/molecules/SectionWrapper'
import Footer from './components/organisms/Footer'
import HeroSection from './components/organisms/HeroSection'
import Navbar from './components/organisms/Navbar'
import siteContent from './content/siteContent'

function App() {
  const { navbar, hero, services, approach, footer } = siteContent

  return (
    <>
      <Navbar brand={navbar.brand} cta={navbar.cta} navLinks={navbar.navLinks} />
      <main>
        <HeroSection
          description={hero.description}
          eyebrow={hero.eyebrow}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          title={hero.title}
        />

        <SectionWrapper bgClassName="bg-white" id="services" intro={services.intro} title={services.title}>
          <div className="grid gap-6 md:grid-cols-3">
            {services.cards.map((service) => (
              <article className="rounded-lg border border-[#0B1F3A]/10 bg-[#F8F9FB] p-6" key={service.title}>
                <h3 className="mb-3 text-xl font-semibold tracking-wide text-[#0B1F3A]">{service.title}</h3>
                <p className="text-sm leading-7 text-[#1A1A1A]/85">{service.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper bgClassName="bg-[#F8F9FB]" id="approach" intro={approach.intro} title={approach.title}>
          <ol className="space-y-4">
            {approach.points.map((point) => (
              <li className="rounded-lg border border-[#0B1F3A]/10 bg-white p-5 text-sm leading-7 text-[#1A1A1A]" key={point}>
                {point}
              </li>
            ))}
          </ol>
        </SectionWrapper>

        <SectionWrapper bgClassName="bg-white" id="about" title="Ready to align strategy with evidence?">
          <p className="max-w-3xl text-base leading-7 text-[#1A1A1A]/85">
            RMCL helps organizations navigate complexity with credible analysis and practical advisory support.
            Let’s design a consulting engagement that is tailored to your context and goals.
          </p>
          <div className="mt-8">
            <Button href="#contact">Start a Conversation</Button>
          </div>
        </SectionWrapper>
      </main>
      <Footer columns={footer.columns} legalText={footer.legalText} />
    </>
  )
}

export default App
