import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { CornerBrackets } from "./Bracket";
import type { Project } from "../data/projects";

const SLIDE_INTERVAL = 3500;

function ProjectSlide({ image, title, isActive }: { image: string; title: string; isActive: boolean }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`absolute inset-0 bg-graphite flex items-center justify-center p-4 transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-display uppercase text-white text-center text-sm tracking-wide">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setHasError(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function ProjectImageSlider({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [images.length, prefersReducedMotion]);

  return (
    <>
      {images.map((image, i) => (
        <ProjectSlide key={image} image={image} title={title} isActive={i === active} />
      ))}
    </>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white border border-mist rounded overflow-hidden transition-all hover:shadow-lg hover:border-2 hover:border-red hover:-translate-y-1">
      <CornerBrackets hoverOnly />
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProjectImageSlider images={project.images} title={project.title} />
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
        <p className="text-steel text-sm leading-relaxed mb-4">{project.description}</p>
        {(project.client || project.date || project.status) && (
          <div className="flex items-end justify-between gap-3 pt-4 border-t border-mist">
            <div className="text-xs text-steel leading-relaxed">
              {project.client && <p className="font-medium text-graphite">{project.client}</p>}
              {project.date && <p>{project.date}</p>}
            </div>
            {project.status && (
              <span
                className={`flex-shrink-0 uppercase text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full ${
                  project.status === "Completed" ? "bg-cloud text-graphite" : "bg-red-tint text-red"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
