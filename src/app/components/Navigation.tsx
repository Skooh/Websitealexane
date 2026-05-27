import { useState } from "react";
import { Link } from "react-router";
import logoImage from "../../imports/IMG_4990-removebg-preview.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4"
      style={{ backgroundColor: "var(--mp-text)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImage}
            alt="Mains & Pattes - Ostéopathie Animalier"
            className="h-16 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#apropos"
            className="transition-colors duration-250"
            style={{ color: "var(--mp-surface)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--mp-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--mp-surface)"}
          >
            À propos
          </a>
          <a
            href="#animaux"
            className="transition-colors duration-250"
            style={{ color: "var(--mp-surface)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--mp-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--mp-surface)"}
          >
            Animaux
          </a>
          <a
            href="#consultation"
            className="transition-colors duration-250"
            style={{ color: "var(--mp-surface)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--mp-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--mp-surface)"}
          >
            Consultation
          </a>
          <a
            href="#tarifs"
            className="transition-colors duration-250"
            style={{ color: "var(--mp-surface)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--mp-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--mp-surface)"}
          >
            Tarifs
          </a>
          <a
            href="#contact"
            className="transition-colors duration-250"
            style={{ color: "var(--mp-surface)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--mp-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--mp-surface)"}
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 rounded-lg transition-all duration-250"
          style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary-hover)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary)"}
        >
          Prendre rendez-vous
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className="w-full h-0.5 transition-all"
              style={{ backgroundColor: "var(--mp-surface)" }}
            />
            <span
              className="w-full h-0.5 transition-all"
              style={{ backgroundColor: "var(--mp-surface)" }}
            />
            <span
              className="w-full h-0.5 transition-all"
              style={{ backgroundColor: "var(--mp-surface)" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] flex flex-col items-center justify-center gap-8 z-40"
          style={{ backgroundColor: "var(--mp-text)" }}
        >
          <a
            href="#apropos"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl"
            style={{ color: "var(--mp-surface)" }}
          >
            À propos
          </a>
          <a
            href="#animaux"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl"
            style={{ color: "var(--mp-surface)" }}
          >
            Animaux
          </a>
          <a
            href="#consultation"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl"
            style={{ color: "var(--mp-surface)" }}
          >
            Consultation
          </a>
          <a
            href="#tarifs"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl"
            style={{ color: "var(--mp-surface)" }}
          >
            Tarifs
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl"
            style={{ color: "var(--mp-surface)" }}
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-4 rounded-lg text-xl"
            style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </nav>
  );
}
