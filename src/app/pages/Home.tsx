import { Link } from "react-router";
import {
  AnimalCard,
  MotifCard,
  TimelineStep,
  TestimonialCard,
  PricingCard,
  HandsPawIcon,
  ChevronDownIcon,
  DogCatIcon,
  HorseIcon,
  CowIcon,
  WalkIcon,
  ShieldCheckIcon,
  SproutIcon,
  HeartPulseIcon,
  ActivityIcon,
  BrainIcon,
  TrophyIcon,
  ClipboardIcon,
  ChatIcon,
  EyeIcon,
  HandIcon,
  CheckCircleIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
} from "../components/shared";
import aproposImage from "../../imports/image.png";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-8 pb-20 overflow-hidden">
        {/* Organic Blob Background */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
          style={{ backgroundColor: "var(--mp-surface)" }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Column */}
            <div className="md:col-span-3 space-y-6">
              <div
                className="text-sm uppercase tracking-widest"
                style={{ color: "var(--mp-primary)" }}
              >
                Ostéopathie animale · Déplacement à domicile
              </div>

              <h1
                className="font-medium leading-tight"
                style={{
                  fontSize: "var(--text-2xl)",
                  color: "var(--mp-text-strong)"
                }}
              >
                Le bien-être de vos animaux, entre de bonnes mains
              </h1>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--mp-muted)" }}
              >
                Une approche manuelle, globale et bienveillante — pour chiens, chats, chevaux, bovins et NAC
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg transition-all duration-250 font-medium"
                  style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary-hover)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary)"}
                >
                  Prendre rendez-vous
                </a>
                <Link
                  to="/decouvrir"
                  className="px-6 py-3 rounded-lg border-2 transition-all duration-250 font-medium"
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
                  Découvrir l'ostéopathie
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2">
              <div
                className="rounded-3xl flex items-center justify-center aspect-square"
                style={{ backgroundColor: "var(--mp-surface)", height: "480px" }}
              >
                <HandsPawIcon className="w-48 h-48" style={{ fill: "var(--mp-primary)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-6 h-6" style={{ stroke: "var(--mp-primary)" }} />
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-20 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="h-1 w-24 mb-12"
            style={{ backgroundColor: "var(--mp-primary)" }}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <img
              src={aproposImage}
              alt="Ostéopathe avec un animal"
              className="rounded-3xl h-[400px] w-full object-cover"
            />

            {/* Content */}
            <div className="space-y-6">
              <h2
                className="font-medium"
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--mp-bg)"
                }}
              >
                Une approche globale, au service de votre animal
              </h2>

              <div className="space-y-4" style={{ color: "var(--mp-surface)" }}>
                <p className="leading-relaxed">
                  Passionnée par le bien-être animal depuis toujours, j'ai choisi l'ostéopathie pour offrir à vos compagnons une approche douce et respectueuse de leur corps.
                </p>
                <p className="leading-relaxed">
                  Formée aux techniques manuelles adaptées à chaque espèce, j'interviens à domicile pour permettre à votre animal d'être soigné dans son environnement familier, sans stress.
                </p>
                <p className="leading-relaxed">
                  Mon objectif : rétablir l'équilibre et la mobilité, prévenir les troubles et accompagner votre animal tout au long de sa vie.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                >
                  Certifié(e) en ostéopathie animale
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                >
                  Formation reconnue
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section id="animaux" className="py-20 px-6" style={{ backgroundColor: "var(--mp-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Des soins adaptés à chaque espèce
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimalCard
              iconType="dogcat"
              title="Chiens & Chats"
              description="Compagnons du quotidien"
            />
            <AnimalCard
              iconType="horse"
              title="Chevaux & Équidés"
              description="Athlètes et partenaires"
            />
            <AnimalCard
              iconType="cow"
              title="Bovins & Ferme"
              description="Animaux de production"
            />
            <AnimalCard
              iconType="rabbit"
              title="NAC"
              description="Nouveaux animaux de compagnie"
            />
          </div>
        </div>
      </section>

      {/* Consultation Motifs Section */}
      <section id="consultation" className="py-20 px-6" style={{ backgroundColor: "var(--mp-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Quand consulter ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MotifCard
              icon={<WalkIcon />}
              title="Troubles locomoteurs"
              description="boiterie, raideurs, perte d'amplitude"
            />
            <MotifCard
              icon={<ShieldCheckIcon />}
              title="Bilan annuel & prévention"
              description="anticipez avant les troubles"
            />
            <MotifCard
              icon={<SproutIcon />}
              title="Croissance du jeune animal"
              description="grandir harmonieusement"
            />
            <MotifCard
              icon={<HeartPulseIcon />}
              title="Suite accident ou chirurgie"
              description="favoriser la récupération"
            />
            <MotifCard
              icon={<ActivityIcon />}
              title="Troubles digestifs & viscéraux"
              description="inconforts récurrents"
            />
            <MotifCard
              icon={<BrainIcon />}
              title="Stress & comportement"
              description="quand le corps exprime un mal-être"
            />
            <MotifCard
              icon={<TrophyIcon />}
              title="Animaux sportifs & reproducteurs"
              description="optimiser et prévenir"
            />
            <MotifCard
              icon={<ClipboardIcon />}
              title="Pathologies chroniques"
              description="arthrose, dysplasie, en complément vétérinaire"
            />
          </div>

          <div
            className="p-6 rounded-lg border-l-4"
            style={{
              backgroundColor: "var(--mp-text)",
              borderColor: "var(--mp-primary)",
              color: "var(--mp-surface)"
            }}
          >
            <p className="leading-relaxed">
              L'ostéopathie animale est une pratique complémentaire et ne remplace pas un diagnostic vétérinaire. En cas de pathologie aiguë, un avis vétérinaire est indispensable.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--mp-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-16"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Comment se déroule une séance ?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div
              className="hidden md:block absolute top-5 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed"
              style={{ borderColor: "var(--mp-surface)" }}
            />

            <TimelineStep
              number={1}
              icon={<ChatIcon />}
              title="Échange avec le propriétaire"
              description="historique, environnement, habitudes"
            />
            <TimelineStep
              number={2}
              icon={<EyeIcon />}
              title="Observation & bilan"
              description="posture, mobilité, comportement"
            />
            <TimelineStep
              number={3}
              icon={<HandIcon />}
              title="Manipulations manuelles"
              description="techniques douces et adaptées"
            />
            <TimelineStep
              number={4}
              icon={<CheckCircleIcon />}
              title="Conseils post-séance"
              description="repos, exercices, suivi recommandé"
            />
          </div>
        </div>
      </section>

      {/* Intervention Zone Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h2
                className="font-medium"
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--mp-bg)"
                }}
              >
                Zone d'intervention
              </h2>

              <p
                className="leading-relaxed"
                style={{ color: "var(--mp-surface)" }}
              >
                Je me déplace à votre domicile dans un rayon de 30 km autour de ma zone principale.
                Au-delà, des frais kilométriques de 0,35 €/km s'appliquent.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Toulouse Centre", "Blagnac", "Colomiers", "Tournefeuille", "Balma", "L'Union"].map((zone) => (
                  <span
                    key={zone}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div
              className="p-6 rounded-2xl space-y-4"
              style={{ backgroundColor: "var(--mp-surface)" }}
            >
              <h3
                className="font-medium"
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--mp-text)"
                }}
              >
                Prochaines tournées
              </h3>

              <div className="space-y-3">
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "var(--mp-bg)" }}
                >
                  <div
                    className="font-medium"
                    style={{ color: "var(--mp-text)" }}
                  >
                    15-16 Juin 2026
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--mp-muted)" }}
                  >
                    Secteur Gers / Auch
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "var(--mp-bg)" }}
                >
                  <div
                    className="font-medium"
                    style={{ color: "var(--mp-text)" }}
                  >
                    22-23 Juin 2026
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--mp-muted)" }}
                  >
                    Pyrénées / Luchon
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 rounded-lg mt-4 transition-all duration-250 font-medium"
                style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary)"}
              >
                Réserver une séance lors d'une tournée
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 overflow-hidden" style={{ backgroundColor: "var(--mp-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium text-center mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-text-strong)"
            }}
          >
            Ils nous font confiance
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Ma jument boitait depuis plusieurs semaines. Après une séance, elle a retrouvé son allure normale. Merci infiniment !"
              animal="Cheval"
              client="Sophie"
            />
            <TestimonialCard
              quote="Mon chien de 12 ans a retrouvé une vraie mobilité. Il court à nouveau dans le jardin comme un jeune chien !"
              animal="Chien"
              client="Marc"
            />
            <TestimonialCard
              quote="Intervention très professionnelle à domicile. Mon chat était détendu et le résultat est visible dès le lendemain."
              animal="Chat"
              client="Amélie"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 px-6" style={{ backgroundColor: "var(--mp-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-medium mb-2"
              style={{
                fontSize: "var(--text-xl)",
                color: "var(--mp-text-strong)"
              }}
            >
              Tarifs
            </h2>
            <p style={{ color: "var(--mp-muted)" }}>
              Déplacement à domicile inclus dans la zone principale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <PricingCard
              title="Chiens & Chats"
              price="60–80 €"
              duration="45–60 min"
              icon={<DogCatIcon />}
            />
            <PricingCard
              title="Chevaux & Équidés"
              price="80–100 €"
              duration="60–75 min"
              icon={<HorseIcon />}
              featured
            />
            <PricingCard
              title="Bovins / NAC"
              price="Sur devis"
              duration="durée variable"
              icon={<CowIcon />}
            />
          </div>

          <p
            className="text-center text-sm"
            style={{ color: "var(--mp-muted)" }}
          >
            Tarifs indicatifs — nous contacter pour un devis personnalisé. Frais kilométriques : 0,35 €/km au-delà de la zone principale.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6" style={{ backgroundColor: "var(--mp-text)" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-medium mb-12"
            style={{
              fontSize: "var(--text-xl)",
              color: "var(--mp-bg)"
            }}
          >
            Contactez Mains & Pattes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div
              className="p-6 rounded-2xl space-y-4"
              style={{ backgroundColor: "var(--mp-surface)" }}
            >
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6" style={{ stroke: "var(--mp-primary)" }} />
                <span style={{ color: "var(--mp-text)" }}>06 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6" style={{ stroke: "var(--mp-primary)" }} />
                <span style={{ color: "var(--mp-text)" }}>contact@mainsetpattes.fr</span>
              </div>
              <div className="flex items-center gap-4">
                <InstagramIcon className="w-6 h-6" style={{ fill: "var(--mp-primary)" }} />
                <span style={{ color: "var(--mp-text)" }}>@mainsetpattes</span>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="p-8 rounded-2xl space-y-4"
              style={{ backgroundColor: "var(--mp-primary)" }}
            >
              <h3
                className="font-medium"
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--mp-bg)"
                }}
              >
                Réservez votre séance
              </h3>
              <p style={{ color: "var(--mp-surface)" }}>
                Prenez rendez-vous en ligne ou contactez-nous directement.
              </p>
              <button
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-250"
                style={{ backgroundColor: "var(--mp-bg)", color: "var(--mp-primary)" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "var(--mp-surface)" }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: "var(--mp-text)" }}
                  >
                    Votre prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-0 outline-none"
                    style={{ backgroundColor: "var(--mp-bg)", color: "var(--mp-text)" }}
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 font-medium"
                    style={{ color: "var(--mp-text)" }}
                  >
                    Type d'animal
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border-0 outline-none"
                    style={{ backgroundColor: "var(--mp-bg)", color: "var(--mp-text)" }}
                  >
                    <option>Chien</option>
                    <option>Chat</option>
                    <option>Cheval</option>
                    <option>Bovin</option>
                    <option>NAC</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "var(--mp-text)" }}
                >
                  Motif de consultation
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-0 outline-none"
                  style={{ backgroundColor: "var(--mp-bg)", color: "var(--mp-text)" }}
                />
              </div>

              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "var(--mp-text)" }}
                >
                  Votre message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-0 outline-none resize-none"
                  style={{ backgroundColor: "var(--mp-bg)", color: "var(--mp-text)" }}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-250"
                style={{ backgroundColor: "var(--mp-primary)", color: "var(--mp-bg)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--mp-primary)"}
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
