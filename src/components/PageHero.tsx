import Container from "./Container";
import { Bracket } from "./Bracket";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="bg-graphite text-white py-24 md:py-32">
      <Container>
        <div className="flex items-center gap-2 mb-4">
          <Bracket light />
          {eyebrow && <p className="uppercase tracking-[0.08em] text-red text-sm font-semibold">{eyebrow}</p>}
        </div>
        <h1 className="text-white uppercase tracking-tight mb-4">{title}</h1>
        {subtitle && <p className="text-mist max-w-xl text-lg">{subtitle}</p>}
      </Container>
    </section>
  );
}
