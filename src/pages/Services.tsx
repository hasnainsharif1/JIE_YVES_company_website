import { useState } from "react";
import { Boxes, Flame, Gauge, PaintBucket, Settings, ShieldCheck, Wrench, Zap, type LucideIcon } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { site } from "../data/site";
import { coreServices, productCategories } from "../data/services";
import { telHref } from "../utils/phone";

const categoryIcons: Record<string, LucideIcon> = {
  "Hardware Material": Boxes,
  "Electrical Supplies": Zap,
  "Safety Items": ShieldCheck,
  "Welding & Cutting Consumables": Flame,
  "Pipes & Fittings": Settings,
  "Lifting Tools": Gauge,
  "Hand Tools": Wrench,
  Paints: PaintBucket,
};

function ServiceImage({ image, title }: { image: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="aspect-[16/10] bg-graphite flex items-center justify-center p-4">
        <span className="font-display uppercase text-white text-center text-sm tracking-wide">{title}</span>
      </div>
    );
  }

  return (
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={title}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Contracting, trading and maintenance, backed by a full inventory of hardware and materials."
        image="/images/services_page_hero_section.png"
      />

      <Section bg="white" pattern>
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="One Partner For Every Requirement" align="center" />
          <p className="text-steel text-center max-w-2xl mx-auto leading-relaxed">
            We provide leading contracting and trading services for whatever you may need. We pride ourselves on
            top-quality service and customer satisfaction. Our clients span a wide range of industries, so we bring
            experience across a diverse set of projects, with complete flexibility on every job.
          </p>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="Core Services" title="Contracting, Maintenance & Trading" align="center" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <div className="h-full bg-white border border-mist rounded overflow-hidden">
                <ServiceImage image={service.image} title={service.title} />
                <div className="h-[3px] bg-red" />
                <div className="p-8">
                  <h3 className="text-ink mb-4">{service.title}</h3>
                  <p className="text-steel text-sm leading-relaxed mb-6">{service.desc}</p>
                  {service.disciplines.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.disciplines.map((discipline) => (
                        <span
                          key={discipline}
                          className="inline-flex items-center gap-2 border border-mist bg-cloud rounded-full px-3 py-1.5 text-xs font-semibold text-graphite"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                          {discipline}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="white" pattern patternSide="left">
        <Reveal>
          <SectionHeading eyebrow="Trading & Supply" title="Hardware & Materials We Supply" align="center" />
          <p className="text-steel text-center max-w-2xl mx-auto leading-relaxed mb-12">
            As a trading partner we supply a comprehensive range of hardware, electrical, safety, welding and
            maintenance materials.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, i) => {
            const Icon = categoryIcons[category.title];
            return (
              <Reveal key={category.title} delay={i * 90}>
                <div className="h-full bg-white border border-mist rounded p-6 transition-all hover:shadow-lg hover:border-graphite">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-red flex-shrink-0" size={22} strokeWidth={2} />
                    <h3 className="text-ink text-lg">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-steel leading-snug">
                        <span className="w-1 h-1 rounded-full bg-red mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl text-steel text-center max-w-3xl mx-auto leading-snug">
            Jie Yves Contracting & Trading exhibits the financial and technical strength to compete in challenging
            market conditions with only the highest standards of quality.
          </p>
        </Reveal>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Need a supplier or a contractor?</h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <a
                href={telHref(site.contact.phones[0])}
                className="font-display text-lg font-semibold text-white hover:text-red transition-colors"
              >
                {site.contact.phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
