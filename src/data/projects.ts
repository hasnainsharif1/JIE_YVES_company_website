// PLACEHOLDER — replace with real project photos + details.

export type ProjectCategory = "Contracting" | "Trading" | "Maintenance";

export interface Project {
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Industrial Warehouse Fit-Out (Placeholder)",
    category: "Contracting",
    location: "Doha, Qatar",
    image: "/images/project-1.jpg",
    description: "Civil works and site preparation for a new industrial warehouse facility.",
  },
  {
    title: "Bulk Material Supply Programme (Placeholder)",
    category: "Trading",
    location: "Ras Laffan, Qatar",
    image: "/images/project-2.jpg",
    description: "Ongoing supply of construction materials with accurate cost forecasting for a processing site.",
  },
  {
    title: "Plant Shutdown Maintenance (Placeholder)",
    category: "Maintenance",
    location: "Mesaieed, Qatar",
    image: "/images/project-3.jpg",
    description: "Planned shutdown maintenance covering plant systems and instrumentation checks.",
  },
  {
    title: "Commercial Site Development (Placeholder)",
    category: "Contracting",
    location: "Lusail, Qatar",
    image: "/images/project-4.jpg",
    description: "Contracting and documentation support across multiple phases of a commercial development.",
  },
  {
    title: "Equipment & Tools Supply (Placeholder)",
    category: "Trading",
    location: "Al Wakrah, Qatar",
    image: "/images/project-5.jpg",
    description: "Supply and logistics of equipment and tools for an active construction programme.",
  },
  {
    title: "Scaffolding & Structural Upkeep (Placeholder)",
    category: "Maintenance",
    location: "Al Khor, Qatar",
    image: "/images/project-6.jpg",
    description: "Scaffolding and steel fabrication support for routine structural maintenance.",
  },
];
