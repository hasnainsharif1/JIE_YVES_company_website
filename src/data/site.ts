export interface NavItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
  whatsapp: string;
  // PLACEHOLDER — not yet confirmed. Set this once real working hours are provided;
  // the Contact page only renders the hours row when this is defined.
  hours?: string;
}

export interface SocialLinks {
  facebook: string;
}

export interface SiteData {
  name: string;
  shortName: string;
  tagline: string;
  nav: NavItem[];
  contact: ContactInfo;
  socials: SocialLinks;
}

export const site: SiteData = {
  name: "Jie Yves Contracting & Trading W.L.L",
  shortName: "Jie Yves",
  tagline:
    "Committed to delivering high-quality construction projects and innovative design",
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Clients", path: "/clients" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ],
  contact: {
    address:
      "Off. 05, 1st Floor, Jabr Bin Mohammed Street, Building 14, St 109, Zone 07, Near QNB Building Corniche, Doha, Qatar",
    phones: ["(+974) 6649 6735", "(+974) 5039 3558"],
    email: "info@jyctqatar.com",
    whatsapp: "https://wa.link/pvrpw2",
  },
  socials: {
    facebook: "https://www.facebook.com/JYCT-Qatar-102075605233168/",
  },
};
