import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { site } from "../data/site";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isSolid ? "bg-graphite shadow-md" : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${isSolid ? "h-16" : "h-20"}`}
      >
        <Link to="/" className="flex items-center bg-white rounded px-2.5 py-1.5 transition-all duration-300">
          <img
            src="/images/JYCT_logo.png"
            alt={site.name}
            className={`w-auto transition-all duration-300 ${isSolid ? "h-8" : "h-9"}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="uppercase text-sm font-semibold tracking-[0.08em] text-white/90 hover:text-red transition-colors"
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
                className="uppercase text-sm font-semibold tracking-[0.08em] text-white/90 hover:text-red transition-colors"
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
