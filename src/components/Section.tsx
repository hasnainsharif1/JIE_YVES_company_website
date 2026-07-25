import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  bg?: "white" | "cloud" | "graphite";
  className?: string;
}

const bgClasses = {
  white: "bg-white",
  cloud: "bg-cloud",
  graphite: "bg-graphite text-white",
};

export default function Section({ children, bg = "white", className = "" }: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${bgClasses[bg]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
