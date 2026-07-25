import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { site } from "../data/site";

const visionPoints = [
  "Deliver high-quality project management and product supplies cost-effectively through a skilled, experienced workforce",
  "Satisfy customer needs",
  "Maintain strong relationships with clients, vendors and partners",
  "Provide value-added services and timely material supply",
];

const missionPoints = [
  "Build honest, transparent relationships that retain the trust of clients, partners and suppliers",
  "Foster continuous improvement through industry best practices",
  "Be an organisation where both nationals and expatriates aspire to work",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    text: "We operate honestly and openly in every relationship, earning the trust our clients and partners place in us.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    text: "We refine our processes and skills constantly, applying industry best practices to raise our own standard.",
  },
  {
    icon: Rocket,
    title: "Opportunity & Growth",
    text: "We pursue new opportunities with the financial and technical strength to grow responsibly and sustainably.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        subtitle="A significant player in Qatar's engineering and contracting sector."
        image="/images/about_page_hero_section.png"
      />

      <Section bg="white" pattern>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SectionHeading eyebrow="Our Story" title="Built On Fundamentals, Driven By Quality" align="left" />
            <div>
              <p className="text-steel mb-4 leading-relaxed">
                {site.name} has grown from a young enterprise into a significant player in Doha's engineering and
                contracting sector, built on a foundation of sound business fundamentals and a skilled, dedicated
                workforce.
              </p>
              <p className="text-steel mb-4 leading-relaxed">
                Today we deliver contracting, trading and maintenance services across civil works, plant
                maintenance, instrumentation, scaffolding, steel fabrication and material supply, working alongside
                clients on projects of every scale.
              </p>
              <p className="text-steel leading-relaxed">
                Our financial and technical strength allows us to compete confidently in challenging markets, and
                every project we take on is held to the highest standards of quality, safety and reliability.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Purpose" title="Vision & Mission" align="left" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0}>
            <div className="bg-cloud border border-mist border-l-4 border-l-red rounded p-8">
              <h3 className="text-ink mb-5">Our Vision</h3>
              <ul className="flex flex-col gap-3">
                {visionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-steel text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white border border-mist border-l-4 border-l-red rounded p-8">
              <h3 className="text-ink mb-5">Our Mission</h3>
              <ul className="flex flex-col gap-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-steel text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="white" pattern patternSide="left">
        <Reveal>
          <SectionHeading eyebrow="What Drives Us" title="Our Core Values" align="center" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="bg-cloud border border-mist rounded p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-red-tint flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-red" size={26} strokeWidth={2} />
                </div>
                <h3 className="text-ink mb-3">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Let's build something that lasts</h2>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
