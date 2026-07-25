export interface Client {
  name: string;
  logo: string;
  sector: string;
  location: string;
  scope: string;
  period?: string;
}

// First 6 are the main/top clients - also featured on the Home page.
export const clients: Client[] = [
  {
    name: "Public Works Authority (Ashghal)",
    logo: "/images/clients/ashghal.png",
    sector: "Government / Infrastructure",
    location: "Qatar Catchment Zone",
    scope:
      "Delivered HDPE pipeline installation, generator upgrades and interim flood-resilience works for pumping station infrastructure across the Qatar Catchment Zone Framework Contract, in partnership with Veolia Water.",
    period: "Ongoing framework contract",
  },
  {
    name: "Veolia Water Qatar",
    logo: "/images/clients/veolia.png",
    sector: "Utilities & Water Management",
    location: "North & Qatar Catchment Zones",
    scope:
      "Delivered HVAC installation, generator upgrades and interim pumping resilience works for pumping stations under the Ashghal Catchment Zone Framework Contracts.",
    period: "Ongoing framework contract",
  },
  {
    name: "CCC Qatar",
    logo: "/images/clients/ccc-qatar.png",
    sector: "Construction",
    location: "Musherib Downtown, Doha",
    scope: "Delivered mechanical, electrical and plumbing (MEP) works at Musherib Downtown Doha.",
    period: "2019",
  },
  {
    name: "Al Ghanim International",
    logo: "/images/clients/al-ghanim-international.png",
    sector: "Construction & Trading",
    location: "QP District, Doha",
    scope:
      "Delivered block work, fencing supply & installation, and gypsum & paint works across the QP District development.",
    period: "2019 - Present",
  },
  {
    name: "Nakheel - Inelt",
    logo: "/images/clients/nakeel.png",
    sector: "Sports Infrastructure",
    location: "Doha, Qatar",
    scope: "Delivered contracting works for the FIFA Training Sites Program ahead of the FIFA World Cup Qatar.",
    period: "2019",
  },
  {
    name: "Redco Almana Qatar",
    logo: "/images/clients/al_mana.png",
    sector: "Real Estate Development",
    location: "The Pearl, Doha, Qatar",
    scope: "Delivered gypsum partitioning and paint finishing works for a residential development at The Pearl Qatar.",
    period: "January 2019",
  },
  {
    name: "Bluetronic Qatar LLC",
    logo: "/images/clients/blutronic.png",
    sector: "Electrical Systems",
    location: "Qatar Foundation, Doha",
    scope: "Delivered electrical DB dressing and termination works at Qatar Foundation.",
    period: "February 2019",
  },
  {
    name: "Q-PEC",
    logo: "/images/clients/q-pec.png",
    sector: "Engineering & Contracting",
    location: "Qatar Foundation, Doha",
    scope: "Delivered electrical DB dressing and termination works at the football stadium within Qatar Foundation.",
    period: "March 2019",
  },
  {
    name: "Trags Engineering",
    logo: "/images/clients/trags-engineering.png",
    sector: "Healthcare Facilities",
    location: "Wakrah, Qatar",
    scope: "Ongoing MEP works at Eman Hospital, Wakrah.",
    period: "Ongoing",
  },
  {
    name: "Allco",
    logo: "/images/clients/Allco.png",
    sector: "Hospitality",
    location: "Doha, Qatar",
    scope: "Delivered MEP works at Majlis Hotel.",
    period: "April 2019 - November 2019",
  },
  {
    name: "Promer Qatar Contracting",
    logo: "/images/clients/promer-qatar.png",
    sector: "Contracting",
    location: "Al Khor, Qatar",
    scope: "Delivered lightning protection system installation in Al Khor.",
    period: "January 2019 - March 2019",
  },
  {
    name: "Opera",
    logo: "/images/clients/Opera.png",
    sector: "Food & Beverage",
    location: "Wakrah, Qatar",
    scope: "Delivered take-away and restaurant fit-out works in Wakrah.",
    period: "Since August 2020",
  },
  {
    name: "Queen Catering",
    logo: "/images/clients/queen-catering.png",
    sector: "Food & Beverage",
    location: "Lusail Marina, Qatar",
    scope: "Delivered fit-out works for a food & beverage outlet at Lusail Marina.",
    period: "Since January 2021",
  },
];
