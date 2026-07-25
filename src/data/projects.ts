export type ProjectCategory = "Contracting" | "Trading" | "Maintenance";
export type ProjectStatus = "Completed" | "Ongoing";

export interface Project {
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
  client?: string;
  date?: string;
  status?: ProjectStatus;
}

export const projects: Project[] = [
  {
    title: "Gypsum & Paint Work at The Pearl Qatar",
    category: "Contracting",
    location: "The Pearl, Doha, Qatar",
    image: "/images/project-pearl-qatar-gypsum.jpg",
    description:
      "Gypsum partitioning and paint finishing works delivered for a residential development at The Pearl Qatar.",
    client: "Redco Almana Qatar",
    date: "January 2019",
    status: "Completed",
  },
  {
    title: "FIFA Training Sites Program",
    category: "Contracting",
    location: "Doha, Qatar",
    image: "/images/project-fifa-training-sites.jpg",
    description:
      "Contracting works delivered as part of the FIFA Training Sites Program ahead of the FIFA World Cup Qatar.",
    client: "Nakheel - Inelt",
    date: "September 2019",
    status: "Completed",
  },
  {
    title: "Generator Upgrade, North Catchment Zone Pumping Stations",
    category: "Maintenance",
    location: "North Catchment Zone, Qatar",
    image: "/images/project-ncz-generator.jpg",
    description:
      "Delivered a high-impact generator upgrade project enhancing the operational resilience of pumping stations under the North Catchment Zone Framework Contract.",
    client: "Veolia Water Qatar / Public Works Authority (Ashghal)",
    status: "Completed",
  },
  {
    title: "DB Dressing & Termination Work, Qatar Foundation",
    category: "Maintenance",
    location: "Qatar Foundation, Doha",
    image: "/images/project-qf-db-dressing.jpg",
    description: "Electrical DB dressing and termination works delivered at Qatar Foundation.",
    client: "Bluetronic Qatar LLC",
    date: "February 2019",
    status: "Completed",
  },
  {
    title: "DB Dressing & Termination, Football Stadium",
    category: "Maintenance",
    location: "Qatar Foundation, Doha",
    image: "/images/project-qf-stadium-db.jpg",
    description: "Electrical DB dressing and termination works delivered at the football stadium within Qatar Foundation.",
    client: "Q-PEC",
    date: "March 2019",
    status: "Completed",
  },
  {
    title: "Block Work, QP District",
    category: "Contracting",
    location: "QP District, Doha",
    image: "/images/project-qp-district-blockwork.jpg",
    description: "Block work contracting delivered across the QP District development.",
    client: "Al Ghanim International Qatar",
    date: "June 2019",
    status: "Completed",
  },
  {
    title: "Supply & Installation of Fencing, QP District",
    category: "Trading",
    location: "QP District, Doha",
    image: "/images/project-qp-district-fencing.jpg",
    description: "Supply and installation of perimeter fencing across the QP District site in Doha.",
    client: "Al Ghanim International Qatar",
    date: "July 2019",
    status: "Completed",
  },
  {
    title: "MEP Works, Musherib Downtown Doha",
    category: "Maintenance",
    location: "Musherib Downtown, Doha",
    image: "/images/project-musherib-mep.jpg",
    description: "Mechanical, electrical and plumbing works delivered at Musherib Downtown Doha.",
    client: "CCC Qatar",
    date: "August 2019",
    status: "Completed",
  },
  {
    title: "MEP Work, Eman Hospital Wakrah",
    category: "Maintenance",
    location: "Wakrah, Qatar",
    image: "/images/project-eman-hospital-mep.jpg",
    description: "Ongoing MEP works at Eman Hospital, Wakrah.",
    client: "Trags Engineering",
    date: "Ongoing",
    status: "Ongoing",
  },
  {
    title: "Gypsum & Paints Work, QP District",
    category: "Contracting",
    location: "QP District, Doha",
    image: "/images/project-qp-district-gypsum.jpg",
    description: "Ongoing gypsum partitioning and paint finishing works across the QP District development.",
    client: "Al Ghanim International WLL",
    date: "Ongoing",
    status: "Ongoing",
  },
  {
    title: "MEP Work, Majlis Hotel",
    category: "Maintenance",
    location: "Doha, Qatar",
    image: "/images/project-majlis-hotel-mep.jpg",
    description: "MEP works delivered at Majlis Hotel.",
    client: "Allco",
    date: "April 2019 - November 2019",
    status: "Completed",
  },
  {
    title: "Lightning Protection, Al Khor",
    category: "Maintenance",
    location: "Al Khor, Qatar",
    image: "/images/project-al-khor-lightning-protection.jpg",
    description: "Lightning protection system installation delivered in Al Khor.",
    client: "Promer Qatar Contracting",
    date: "January 2019 - March 2019",
    status: "Completed",
  },
  {
    title: "Take Away & Opera Fit-Out Works, Wakrah",
    category: "Contracting",
    location: "Wakrah, Qatar",
    image: "/images/project-wakrah-opera-fitout.jpg",
    description: "Fit-out works for a take-away and restaurant space in Wakrah.",
    client: "Opera",
    date: "Since August 2020",
    status: "Ongoing",
  },
  {
    title: "Lusail Marina Fit-Out Works",
    category: "Contracting",
    location: "Lusail Marina, Qatar",
    image: "/images/project-lusail-marina-fitout.jpg",
    description: "Fit-out works for a food & beverage outlet at Lusail Marina.",
    client: "Queen Catering",
    date: "Since January 2021",
    status: "Ongoing",
  },
  {
    title: "HVAC Package Units Installation, QNCZ Pumping Stations",
    category: "Maintenance",
    location: "Qatar North Catchment Zone",
    image: "/images/project-qncz-hvac.jpg",
    description:
      "Installed and commissioned HVAC package units in collaboration with Veolia Water under the QNCZ Framework Contract, enhancing climate control, equipment protection and operational reliability across critical pumping station infrastructure.",
    client: "Veolia Water Qatar",
    status: "Completed",
  },
  {
    title: "HDPE Pipeline Installation, Qatar Catchment Zone",
    category: "Contracting",
    location: "Qatar Catchment Zone",
    image: "/images/project-qcz-hdpe-pipeline.jpg",
    description:
      "Executed end-to-end HDPE pipeline installation - routing, excavation, pipe laying, butt fusion welding, testing and commissioning - delivering leak-proof, corrosion-resistant conveyance systems across critical infrastructure networks.",
    client: "Public Works Authority (Ashghal)",
    status: "Completed",
  },
  {
    title: "Underpasses Interim Resilience, Site Instruction #64",
    category: "Maintenance",
    location: "Qatar Catchment Zone",
    image: "/images/project-underpasses-resilience.jpg",
    description:
      "Delivered interim pumping systems and civil works to reduce mobilisation time and improve flood mitigation at underpasses during rainfall events, as subcontractor under the Qatar Catchment Zone Framework Contract.",
    client: "Veolia Water (Public Works Authority - Ashghal)",
    status: "Completed",
  },
];
