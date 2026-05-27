import { Link } from "react-router";
import {
  BookOpenIcon,
  TargetIcon,
  HeartIcon,
  HandIcon,
  EyeIcon,
  ShieldCheckIcon,
} from "../components/shared";

export default function Decouvrir() {
  return (
    <main style={{ backgroundColor: "var(--mp-bg)" }}>
      {/* Hero Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "var(--mp-primary)" }}
          >
            <BookOpenIcon className="w-8 h-8" style={{ stroke: "var(--mp-bg)" }} />
          </div>

          <h1
            className="font-medium mb-6"
            style={{
              fontSize: "var(--text-2xl)",
              color: "var(--mp-bg)"
            }}
          >
            Qu'est-ce que l'ostéopathie animale ?
          </h1>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--mp-surface)" }}
          >
            Une approche thérapeutique manuelle, douce et non invasive, qui vise à rétablir l'équilibre et la mobilité du corps de votre animal.
          </p>
        </div>
      </section>

      {/* Principes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Les principes fondamentaux
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PrincipeCard
              icon={<TargetIcon className="w-12 h-12" style={{ stroke: "var(--mp-primary)" }} />}
              title="Approche globale"
              description="L'ostéopathie considère le corps comme un tout interconnecté. Une douleur localisée peut avoir des causes à distance."
            />
            <PrincipeCard
              icon={<HeartIcon className="w-12 h-12" style={{ stroke: "var(--mp-primary)" }} />}
              title="Auto-guérison"
              description="Le corps possède ses propres capacités de régulation et de réparation. L'ostéopathe stimule ces mécanismes naturels."
            />
            <PrincipeCard
              icon={<HandIcon className="w-12 h-12" style={{ fill: "var(--mp-primary)" }} />}
              title="Techniques manuelles"
              description="Des manipulations douces et adaptées permettent de lever les restrictions de mobilité et de rétablir l'harmonie."
            />
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--mp-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-medium mb-6"
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--mp-text-strong)"
                }}
              >
                Comment ça marche ?
              </h2>

              <div className="space-y-4" style={{ color: "var(--mp-text)" }}>
                <p className="leading-relaxed">
                  L'ostéopathe animalier utilise uniquement ses mains pour détecter les zones de tension, de restriction de mobilité ou de déséquilibre dans le corps de l'animal.
                </p>
                <p className="leading-relaxed">
                  Ces blocages peuvent affecter les os, les articulations, les muscles, les fascias, mais aussi les organes et le système nerveux.
                </p>
                <p className="leading-relaxed">
                  Par des manipulations précises et adaptées à chaque espèce, l'ostéopathe libère ces tensions pour permettre au corps de retrouver son équilibre naturel et ses pleines capacités.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl h-[400px]"
              style={{ backgroundColor: "var(--mp-bg)" }}
            />
          </div>
        </div>
      </section>

      {/* Différence avec vétérinaire */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "var(--mp-surface)" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <ShieldCheckIcon className="w-8 h-8 flex-shrink-0" style={{ fill: "var(--mp-primary)" }} />
              <div>
                <h3
                  className="font-medium mb-3"
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--mp-text-strong)"
                  }}
                >
                  Une approche complémentaire à la médecine vétérinaire
                </h3>
                <div className="space-y-3" style={{ color: "var(--mp-text)" }}>
                  <p className="leading-relaxed">
                    L'ostéopathie animale ne remplace pas les soins vétérinaires. C'est une thérapie complémentaire qui peut intervenir :
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="leading-relaxed">• En prévention, pour maintenir l'animal en bonne santé</li>
                    <li className="leading-relaxed">• En accompagnement d'un traitement vétérinaire</li>
                    <li className="leading-relaxed">• En récupération après une intervention chirurgicale</li>
                    <li className="leading-relaxed">• Pour améliorer le confort des animaux atteints de pathologies chroniques</li>
                  </ul>
                  <p
                    className="leading-relaxed pt-4 text-sm font-medium"
                    style={{ color: "var(--mp-primary)" }}
                  >
                    En cas de pathologie aiguë, de fièvre, de plaie ouverte ou de doute sur l'état de santé de votre animal, consultez toujours votre vétérinaire en premier lieu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-bg)"
            }}
          >
            Les bénéfices de l'ostéopathie pour votre animal
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Amélioration de la mobilité et de la souplesse",
              "Réduction des douleurs articulaires et musculaires",
              "Meilleure récupération après un effort ou une blessure",
              "Soutien de la croissance harmonieuse du jeune animal",
              "Prévention des troubles liés au vieillissement",
              "Amélioration du bien-être général et du comportement"
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl"
                style={{ backgroundColor: "var(--mp-surface)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: "var(--mp-primary)" }}
                  >
                    <span style={{ color: "var(--mp-bg)", fontSize: "12px" }}>✓</span>
                  </div>
                  <p style={{ color: "var(--mp-text)" }}>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-medium mb-6"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Prêt à offrir le meilleur à votre animal ?
          </h2>

          <p
            className="text-lg mb-8"
            style={{ color: "var(--mp-muted)" }}
          >
            Prenez rendez-vous pour une première consultation à domicile.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#contact"
              className="px-8 py-3 rounded-lg transition-all duration-250 font-medium"
              style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary-hover)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary)"}
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/"
              className="px-8 py-3 rounded-lg border-2 transition-all duration-250 font-medium"
              style={{
                borderColor: "var(--mp-primary)",
                color: "var(--mp-primary)",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--mp-primary)";
                e.currentTarget.style.color = "var(--mp-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--mp-primary)";
              }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrincipeCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      className="p-8 rounded-2xl text-center"
      style={{ backgroundColor: "var(--mp-surface)" }}
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3
        className="font-medium mb-3"
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--mp-text)"
        }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed"
        style={{ color: "var(--mp-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}
