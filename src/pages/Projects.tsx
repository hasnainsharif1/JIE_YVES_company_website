import { useState } from "react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import CountUpNumber from "../components/CountUpNumber";
import { projects, type ProjectCategory } from "../data/projects";

const filters: (ProjectCategory | "All")[] = ["All", "Contracting", "Trading", "Maintenance"];

const projectStats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Sectors Served" },
  { value: 70, suffix: "%", label: "Repeat Clients" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Work That Speaks For Itself"
        subtitle="A selection of projects delivered across Qatar."
      />

      <Section bg="white">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="Recent Projects" align="center" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded px-5 py-2 uppercase text-xs font-semibold tracking-[0.08em] border transition-colors ${
                    isActive
                      ? "bg-red text-white border-red"
                      : "bg-white text-graphite border-mist hover:border-graphite"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat) => (
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

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">Ready to start your project?</h2>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
