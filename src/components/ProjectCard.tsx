import { useState } from "react";
import { MapPin } from "lucide-react";
import { CornerBrackets } from "./Bracket";
import type { Project } from "../data/projects";

function ProjectImage({ image, title }: { image: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-graphite flex items-center justify-center p-4">
        <span className="font-display uppercase text-white text-center text-sm tracking-wide">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white border border-mist rounded overflow-hidden transition-all hover:shadow-lg hover:border-graphite hover:-translate-y-1">
      <CornerBrackets hoverOnly />
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProjectImage image={project.image} title={project.title} />
        <div className="absolute inset-0 bg-graphite/50 group-hover:bg-graphite/20 transition-colors duration-300 pointer-events-none" />
        <span className="absolute top-3 left-3 bg-red text-white uppercase text-xs font-semibold tracking-[0.08em] px-3 py-1 rounded">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-ink mb-2">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-steel text-sm mb-3">
          <MapPin className="text-red flex-shrink-0" size={14} />
          {project.location}
        </div>
        <p className="text-steel text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
