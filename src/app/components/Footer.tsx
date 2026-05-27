import logoImage from "../../imports/IMG_4990-removebg-preview.png";

export function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Mains & Pattes - Ostéopathie Animalier"
              className="h-16 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#apropos"
              className="text-sm"
              style={{ color: "var(--mp-surface)" }}
            >
              À propos
            </a>
            <a
              href="#animaux"
              className="text-sm"
              style={{ color: "var(--mp-surface)" }}
            >
              Animaux
            </a>
            <a
              href="#consultation"
              className="text-sm"
              style={{ color: "var(--mp-surface)" }}
            >
              Consultation
            </a>
            <a
              href="#tarifs"
              className="text-sm"
              style={{ color: "var(--mp-surface)" }}
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="text-sm"
              style={{ color: "var(--mp-surface)" }}
            >
              Contact
            </a>
          </div>

          {/* Social */}
          <a href="https://instagram.com/mainsetpattes" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="w-6 h-6" style={{ fill: "var(--mp-primary)" }} />
          </a>
        </div>

        <div
          className="pt-8 border-t text-center space-y-2"
          style={{ borderColor: "var(--mp-primary)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--mp-muted)" }}
          >
            L'ostéopathie animale est une pratique complémentaire. Mains & Pattes n'est pas un service vétérinaire.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--mp-muted)" }}
          >
            © 2025 Mains & Pattes — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
