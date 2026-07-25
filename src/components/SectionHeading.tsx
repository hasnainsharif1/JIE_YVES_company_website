import { Bracket } from "./Bracket";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, align = "left", light = false }: SectionHeadingProps) {
  const wrapperClasses = align === "center" ? "items-center text-center max-w-2xl mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col mb-12 ${wrapperClasses}`}>
      <div className="flex items-center gap-2 mb-3">
        <Bracket light={light} />
        <span className="uppercase tracking-[0.08em] text-red text-sm font-semibold">{eyebrow}</span>
      </div>
      <h2 className={`uppercase tracking-tight ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    </div>
  );
}
