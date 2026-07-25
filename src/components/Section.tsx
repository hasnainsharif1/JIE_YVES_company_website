import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  bg?: "white" | "cloud" | "graphite";
  bgImage?: string;
  pattern?: boolean;
  patternSide?: "left" | "right";
  className?: string;
}

const bgClasses = {
  white: "bg-white",
  cloud: "bg-cloud",
  graphite: "bg-graphite text-white",
};

const overlayClasses = {
  white: "bg-white/92",
  cloud: "bg-cloud/92",
  graphite: "bg-graphite/92",
};

export default function Section({
  children,
  bg = "white",
  bgImage,
  pattern = false,
  patternSide = "right",
  className = "",
}: SectionProps) {
  const primaryCorner = patternSide === "right" ? "top-0 right-0 translate-x-1/3" : "top-0 left-0 -translate-x-1/3";
  const secondaryCorner =
    patternSide === "right" ? "bottom-0 left-0 -translate-x-1/4" : "bottom-0 right-0 translate-x-1/4";
  const bracketA = patternSide === "right" ? "top-8 left-8 border-t-[3px] border-l-[3px]" : "top-8 right-8 border-t-[3px] border-r-[3px]";
  const bracketB =
    patternSide === "right" ? "bottom-8 right-8 border-b-[3px] border-r-[3px]" : "bottom-8 left-8 border-b-[3px] border-l-[3px]";

  return (
    <section
      className={`relative py-20 md:py-28 ${bgClasses[bg]} ${pattern || bgImage ? "overflow-hidden" : ""} ${className}`}
    >
      {bgImage && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute -inset-4 scale-105 blur-sm"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className={`absolute inset-0 ${overlayClasses[bg]}`} />
        </div>
      )}
      {pattern && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage: "radial-gradient(#6a6e73 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
          <div className={`absolute -translate-y-1/3 ${primaryCorner} w-[420px] h-[420px] rotate-45 rounded-[3rem] bg-red-tint`} />
          <div
            className={`absolute -translate-y-1/3 ${primaryCorner} w-[420px] h-[420px] rotate-45 rounded-[3rem] border-2 border-red/30`}
          />
          <div className={`absolute translate-y-1/4 ${secondaryCorner} w-64 h-64 rotate-45 rounded-[2rem] bg-cloud border-2 border-graphite/10`} />
          <span className={`hidden md:block absolute w-16 h-16 border-graphite/30 ${bracketA}`} />
          <span className={`hidden md:block absolute w-16 h-16 border-red/40 ${bracketB}`} />
        </div>
      )}
      <Container className={pattern || bgImage ? "relative z-10" : ""}>{children}</Container>
    </section>
  );
}
