import { useState } from "react";
import { BadgeCheck, Clock, Handshake } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { CornerBrackets } from "../components/Bracket";
import LogoTile from "../components/LogoTile";
import { clients, type Client } from "../data/clients";

const trustPoints = [
  {
    icon: Clock,
    label: "On-time delivery",
    text: "Projects planned and executed to meet agreed deadlines.",
  },
  {
    icon: BadgeCheck,
    label: "Quality workmanship",
    text: "Every job held to strict quality and safety standards.",
  },
  {
    icon: Handshake,
    label: "Long-term partnerships",
    text: "Clients who return to us project after project.",
  },
];

function LogoBadge({ client }: { client: Client }) {
  const [hasError, setHasError] = useState(false);
  const initials = client.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (hasError) {
    return (
      <div className="w-12 h-12 rounded bg-cloud border border-mist text-graphite flex items-center justify-center font-display text-sm font-semibold flex-shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      onError={() => setHasError(true)}
      className="w-12 h-12 rounded border border-mist object-contain p-1.5 flex-shrink-0"
    />
  );
}

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted Across Qatar"
        subtitle="The operators and contractors who rely on Jie Yves to deliver."
      />

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="In Good Company" title="Clients We've Worked With" align="center" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client) => (
              <LogoTile key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="How We've Helped" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group relative bg-white border border-mist rounded overflow-hidden transition-all hover:shadow-lg hover:border-graphite hover:-translate-y-1"
              >
                <CornerBrackets hoverOnly />
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-red" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <LogoBadge client={client} />
                    <div>
                      <h3 className="text-ink">{client.name}</h3>
                      <p className="text-red uppercase text-xs font-semibold tracking-[0.08em]">{client.sector}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-mist">
                    <div>
                      <p className="text-steel uppercase text-xs font-medium tracking-wide mb-1">Sector</p>
                      <p className="text-ink text-sm font-medium">{client.sector}</p>
                    </div>
                    <div>
                      <p className="text-steel uppercase text-xs font-medium tracking-wide mb-1">Location</p>
                      <p className="text-ink text-sm font-medium">{client.location}</p>
                    </div>
                    <div>
                      <p className="text-steel uppercase text-xs font-medium tracking-wide mb-1">Period</p>
                      <p className="text-ink text-sm font-medium">{client.period ?? "Ongoing"}</p>
                    </div>
                  </div>
                  <p className="text-steel text-sm leading-relaxed">{client.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex flex-col items-start gap-3">
                <Icon className="text-red" size={28} strokeWidth={2} />
                <span className="font-semibold text-ink">{label}</span>
                <p className="text-steel text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Become our next success story</h2>
            <Button href="/contact" variant="primary">
              Work With Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
