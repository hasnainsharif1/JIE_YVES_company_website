import Container from "./Container";
import Reveal from "./Reveal";
import { Bracket } from "./Bracket";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, eyebrow, image }: PageHeroProps) {
  return (
    <section
      className="relative bg-graphite text-white py-24 md:py-32 overflow-hidden"
      style={
        image
          ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {image && (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(to bottom right, rgba(47,49,51,0.75), rgba(47,49,51,0.55))" }}
        />
      )}
      <Container className="relative z-10">
        <Reveal duration={450}>
          <div className="flex items-center gap-2 mb-4">
            <Bracket light />
            {eyebrow && <p className="uppercase tracking-[0.08em] text-red text-sm font-semibold">{eyebrow}</p>}
          </div>
        </Reveal>
        <Reveal delay={90} duration={450}>
          <h1 className="text-white uppercase tracking-tight mb-4">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={180} duration={450}>
            <p className="text-mist max-w-xl text-lg">{subtitle}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
