import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { site } from "../data/site";
import { telHref } from "../utils/phone";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-graphite/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`hidden lg:block bg-ink overflow-hidden transition-all duration-300 ${
          isSolid ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <Container className="flex items-center justify-between h-9 text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a
              href={telHref(site.contact.phones[0])}
              className="flex items-center gap-1.5 hover:text-red transition-colors"
            >
              <Phone size={14} />
              {site.contact.phones[0]}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-1.5 hover:text-red transition-colors"
            >
              <Mail size={14} />
              {site.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            Building # 14, St# 109, Zone # 07
          </div>
        </Container>
      </div>

      <Container
        className={`flex items-center justify-between transition-all duration-300 ${isSolid ? "h-16" : "h-20"}`}
      >
        <Link to="/" className="flex items-center bg-white rounded px-1.5 py-1 transition-all duration-300">
          <img
            src="/images/JYCT_logo.png"
            alt={site.name}
            className={`w-auto transition-all duration-300 ${isSolid ? "h-10" : "h-12"}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative inline-block uppercase text-sm font-semibold tracking-[0.08em] text-white/90 transition-colors hover:text-red after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-graphite">
          <Container className="flex flex-col py-4 gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative inline-block uppercase text-sm font-semibold tracking-[0.08em] text-white/90 transition-colors hover:text-red after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="text-center" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
