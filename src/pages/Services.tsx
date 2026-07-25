import { useState } from "react";
import {
  Boxes,
  Check,
  ClipboardList,
  Hammer,
  HardHat,
  Package,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { CornerBrackets } from "../components/Bracket";
import { services } from "../data/services";
import { categories } from "../data/categories";

const serviceIcons: Record<string, LucideIcon> = { HardHat, Package, Wrench };

const categoryIcons: Record<string, LucideIcon> = {
  "Project Management": ClipboardList,
  "Hardware & Consumables": Boxes,
  "Maintenance Work": Settings,
  Tools: Hammer,
};

const processSteps = [
  { number: "01", title: "Enquiry", text: "We listen to your requirements and scope the project together." },
  {
    number: "02",
    title: "Estimate & Planning",
    text: "Accurate costing and a clear plan for materials, labour and timeline.",
  },
  { number: "03", title: "Execution", text: "Skilled teams deliver the work to spec, on schedule and to code." },
  {
    number: "04",
    title: "Handover & Support",
    text: "Quality checks, documentation and ongoing support after handover.",
  },
];

function ServiceImage({ image, icon: Icon }: { image: string; icon: LucideIcon }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative rounded overflow-hidden aspect-[4/3] bg-graphite flex items-center justify-center">
        <CornerBrackets />
        <Icon className="text-white/30" size={64} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className="relative rounded overflow-hidden aspect-[4/3]">
      <CornerBrackets />
      <img src={image} alt="" onError={() => setHasError(true)} className="w-full h-full object-cover" />
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What We Do"
        subtitle="Contracting, trading and maintenance delivered to the highest standards of quality."
      />

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Our Approach" title="Committed To Quality And Craftsmanship" align="center" />
          <p className="text-steel text-center max-w-2xl mx-auto leading-relaxed">
            Our success is built on an unwavering commitment to quality, continuous investment in technology and
            modern methods, and the old-world values and craftsmanship that guide everything we build.
          </p>
        </Reveal>
      </Section>

      {services.map((service, index) => {
        const isImageFirst = index % 2 === 0;
        const bg = index % 2 === 0 ? "white" : "cloud";
        const Icon = serviceIcons[service.icon];
        const numberLabel = String(index + 1).padStart(2, "0");

        const imageBlock = <ServiceImage key="image" image={service.image} icon={Icon} />;
        const textBlock = (
          <div key="text">
            <p className="text-red uppercase text-sm font-semibold tracking-[0.08em] mb-3">{numberLabel}</p>
            <h3 className="text-ink mb-4">{service.title}</h3>
            <p className="text-steel leading-relaxed mb-6">{service.blurb}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-graphite">
                  <Check className="text-red flex-shrink-0" size={16} strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        );

        return (
          <Section key={service.title} bg={bg}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {isImageFirst ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            </Reveal>
          </Section>
        );
      })}

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="Also Offering" title="Additional Capabilities" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category.title];
              return (
                <div
                  key={category.title}
                  className="group relative bg-white border border-mist rounded p-6 transition-all hover:shadow-lg hover:border-graphite hover:-translate-y-1"
                >
                  <CornerBrackets hoverOnly size={20} />
                  <Icon className="text-red mb-4" size={24} strokeWidth={2} />
                  <h3 className="text-ink text-lg mb-2">{category.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{category.blurb}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Our Process" title="From Enquiry To Handover" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-mist">
            {processSteps.map((step) => (
              <div key={step.number} className="px-6 first:pl-0 last:pr-0 text-center md:text-left mb-8 md:mb-0">
                <div className="font-display text-4xl font-semibold text-red mb-3">{step.number}</div>
                <h3 className="text-ink text-lg mb-2">{step.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Have a project in mind?</h2>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
