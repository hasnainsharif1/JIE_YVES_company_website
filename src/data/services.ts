export interface Service {
  title: string;
  blurb: string;
  points: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    title: "Contracting Services",
    blurb:
      "We take up contracting for projects and support clients with documentation and legal requirements, following strict guidelines across all construction activities.",
    points: ["Civil works", "Project documentation", "Site preparation", "Compliance & permits", "Manpower supply"],
    icon: "HardHat",
    image: "/images/service-contracting.jpg",
  },
  {
    title: "Trading Services",
    blurb:
      "We execute at pace using advanced tools and technology, and forecast your material and labour costs with accurate construction cost estimates.",
    points: ["Material supply", "Cost forecasting", "Equipment rental", "Logistics", "Transportation"],
    icon: "Package",
    image: "/images/service-trading.jpg",
  },
  {
    title: "Maintenance Services",
    blurb:
      "Quality is our strategic principle: we deliver efficiency and reliability across every service, focused on our clients' needs.",
    points: ["Plant maintenance", "Instrumentation", "Scaffolding", "Steel fabrication"],
    icon: "Wrench",
    image: "/images/service-maintenance.jpg",
  },
];
