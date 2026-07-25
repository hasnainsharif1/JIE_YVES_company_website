// PLACEHOLDER — replace with real client data + logos + consent.

export interface Client {
  name: string;
  logo: string;
  sector: string;
  location: string;
  scope: string;
  period?: string;
}

export const clients: Client[] = [
  {
    name: "Client One (Placeholder)",
    logo: "/logos/client-1.png",
    sector: "Oil & Gas",
    location: "Ras Laffan, Qatar",
    scope:
      "Provided civil works and plant maintenance support for a processing facility, including scaffolding and structural upkeep across multiple maintenance cycles.",
    period: "2022 – Present",
  },
  {
    name: "Client Two (Placeholder)",
    logo: "/logos/client-2.png",
    sector: "Construction",
    location: "Lusail, Qatar",
    scope:
      "Delivered contracting services for a mixed-use development, covering site preparation, documentation and compliance across several phases.",
    period: "2021 – 2023",
  },
  {
    name: "Client Three (Placeholder)",
    logo: "/logos/client-3.png",
    sector: "Facilities Management",
    location: "Doha, Qatar",
    scope:
      "Ongoing maintenance and instrumentation support for a commercial facilities portfolio, with rapid-response reactive maintenance.",
  },
  {
    name: "Client Four (Placeholder)",
    logo: "/logos/client-4.png",
    sector: "Industrial Manufacturing",
    location: "Mesaieed, Qatar",
    scope:
      "Steel fabrication and equipment supply for an industrial manufacturing site, supporting planned plant upgrades and turnarounds.",
    period: "2023",
  },
  {
    name: "Client Five (Placeholder)",
    logo: "/logos/client-5.png",
    sector: "Logistics & Trading",
    location: "Al Wakrah, Qatar",
    scope:
      "Material supply and cost forecasting for a logistics operator, coordinating procurement and delivery across multiple sites.",
  },
  {
    name: "Client Six (Placeholder)",
    logo: "/logos/client-6.png",
    sector: "Real Estate Development",
    location: "Al Khor, Qatar",
    scope:
      "Contracting and trading support for a real estate development project, from site preparation through to handover.",
    period: "2020 – 2022",
  },
];
