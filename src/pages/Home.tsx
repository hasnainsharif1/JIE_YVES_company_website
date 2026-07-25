import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Container from "../components/Container";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { Bracket, CornerBrackets } from "../components/Bracket";
import LogoTile from "../components/LogoTile";
import ProjectCard from "../components/ProjectCard";
import PersonPhoto from "../components/PersonPhoto";
import CountUpNumber from "../components/CountUpNumber";
import { site } from "../data/site";
import { services } from "../data/services";
import { stats } from "../data/stats";
import { categories } from "../data/categories";
import { clients } from "../data/clients";
import { projects } from "../data/projects";
import { chairman } from "../data/leadership";

const whyUs = [
  "Quality Control System",
  "100% Satisfaction Guarantee",
  "Highly Professional Staff",
  "Unrivalled Workmanship",
  "Accurate Testing Processes",
  "Professional & Qualified",
];

export default function Home() {
  return (
    <>
      <section
        className="relative flex items-center min-h-[85vh]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(47,49,51,0.6), rgba(47,49,51,0.45)), url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2F3133",
        }}
      >
        <Container className="py-20">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <Bracket light />
              <p className="text-red uppercase text-sm font-semibold tracking-[0.08em]">
                Contracting &bull; Trading &bull; Maintenance
              </p>
            </div>
            <h1 className="text-white max-w-3xl mb-6">Building Qatar's industrial backbone</h1>
            <p className="text-mist max-w-xl mb-10 text-lg">{site.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/services" variant="primary">
                Our Services
              </Button>
              <Button href="/clients" variant="outline-light">
                View Clients
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section bg="white" className="border-y border-mist">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-4xl md:text-5xl font-semibold text-graphite"
                />
                <div className="text-steel uppercase text-xs font-medium tracking-wide mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SectionHeading
              eyebrow="Who We Are"
              title="A significant player in Qatar's engineering & contracting sector"
              align="left"
            />
            <div>
              <p className="text-steel mb-4 leading-relaxed">
                {site.shortName} has grown into a significant player in Doha's engineering and contracting sector,
                delivering projects across the construction, trading, and maintenance disciplines.
              </p>
              <p className="text-steel mb-8 leading-relaxed">
                We bring the financial and technical strength to compete in challenging markets, holding every
                project to the highest standards of quality and safety.
              </p>
              <Button href="/about" variant="secondary">
                About Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="Our Services" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/services"
                className="group relative block bg-white border border-mist rounded p-8 pt-10 transition-all hover:shadow-lg hover:border-graphite hover:-translate-y-1"
              >
                <CornerBrackets hoverOnly />
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-red rounded-t" />
                <h3 className="text-ink mb-3">{service.title}</h3>
                <p className="text-steel text-sm leading-relaxed mb-5">{service.blurb}</p>
                <ul className="flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-graphite">
                      <span className="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <span
                key={category.title}
                className="border border-mist bg-white rounded-full px-4 py-2 text-xs uppercase font-semibold tracking-[0.08em] text-graphite"
              >
                {category.title}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Why Choose Us" title={`Why ${site.shortName}`} align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="text-red flex-shrink-0" size={22} strokeWidth={2.5} />
                <span className="font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="Our Clients" title="Trusted Across Qatar" align="center" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {clients.map((client) => (
              <LogoTile key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
          <div className="text-center">
            <Button href="/clients" variant="secondary">
              See All Clients
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/projects" variant="secondary">
              See All Projects
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bracket />
            </div>
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8">
              &ldquo;The pillars of our success remain our skilled, experienced and dedicated workforce.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <PersonPhoto photo={chairman.photo} name={chairman.name} size={56} />
              <div className="text-left">
                <p className="text-ink font-semibold">{chairman.name}</p>
                <p className="text-steel text-sm">{chairman.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">We help you build on your past and prepare for the future</h2>
            <p className="text-mist mb-8">
              Partner with a team that treats every project like it's the only one that matters.
            </p>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
