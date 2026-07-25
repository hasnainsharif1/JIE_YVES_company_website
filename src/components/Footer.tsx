import { Link } from "react-router-dom";
import Container from "./Container";
import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white">
      <div className="h-1 bg-red" />
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
        <div>
          <img src="/images/JYCT_logo.png" alt={site.name} className="h-14 w-auto bg-white rounded p-2 mb-4" />
          <p className="text-mist text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-mist text-sm hover:text-red transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Contact</h3>
          <ul className="flex flex-col gap-2 text-mist text-sm">
            <li>{site.contact.address}</li>
            {site.contact.phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
            <li>{site.contact.email}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-mist text-xs">
          &copy; {year} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
