import React from "react";
import { motion } from "framer-motion";

// Motion
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.2, 0.7, 0.2, 1] } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// Layout helpers (identisch zur Startseite)
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

// Icons
const IconCheck = ({ className = "" }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={["h-5 w-5", className].join(" ")} fill="currentColor">
    <path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z" />
  </svg>
);
const IconShield = ({ className = "" }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={["h-5 w-5", className].join(" ")} fill="currentColor">
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
);
const IconDot = ({ className = "" }) => (
  <svg aria-hidden viewBox="0 0 24 24" className={["h-3 w-3", className].join(" ")} fill="currentColor">
    <circle cx="12" cy="12" r="6" />
  </svg>
);

export default function Team() {
  const people = [
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q0VPfGVufDB8fDB8fHww",
      name: "Sebastian Penninger",
      role: "Finanz- & Immobilienberater",
      meta: "§34f/§34i • 8+ Jahre",
      bullets: ["Vermögensaufbau & ETFs", "Baufinanzierung & Anschluss", "Investmentkalkulation"],
      badge: "Zertifiziert"
    },
    {
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q0VPfGVufDB8fDB8fHww",
      name: "Kooperationspartner Baufinanzierung",
      role: "Finanzierungsspezialist",
      meta: "Vergleich >300 Banken",
      bullets: ["Zins-/Laufzeit-Optimierung", "Fördermittel", "Notar/Abwicklung"],
      badge: "Netzwerk"
    },
    {
      img: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0VPfGVufDB8fDB8fHww",
      name: "Steuerberatung (Partner)",
      role: "Dipl.-Finanzwirtin (FH)",
      meta: "Immobilien & Kapital",
      bullets: ["Steuerliche Struktur", "V&V / AfA-Betrachtung", "KapESt/Abgeltung"],
      badge: "Partner"
    },
    {
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0VPfGVufDB8fDB8fHww",
      name: "Rechtsberatung (Partner)",
      role: "Fachanwalt Immobilienrecht",
      meta: "Kauf | Miete | WEG",
      bullets: ["Kaufverträge & Due Diligence", "Mietrecht", "WEG & Teilung"],
      badge: "Partner"
    }
  ];

  return (
    <main className="bg-[var(--neutral-100)] text-[var(--neutral-900)]">
     {/* TEAM HERO – Drop-in Replacement */}
<Section className="pt-28 bg-[var(--brand-green-950)] text-[var(--neutral-100)]">
  <Container>
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid items-center gap-12 lg:grid-cols-12"
    >
      {/* Copy & CTAs */}
      <motion.div variants={fadeUp} className="lg:col-span-7">
        <p className="text-xs tracking-[0.12em] uppercase text-[var(--neutral-100)]/70">
          Team & Netzwerk • Regensburg & Remote
        </p>
        <h1 className="mt-3 font-display text-[40px] leading-[1.15] sm:text-[48px] lg:text-[56px]">
          Menschen, die Finanzen & Immobilien greifbar machen – unabhängig, ruhig, messbar.
        </h1>
        <p className="mt-4 text-[18px] leading-8 text-[var(--neutral-100)]/85">
          Persönliche Beratung trifft spezialisiertes Netzwerk: Finanzierung, Vermögen, Steuern & Recht – aus
          einer Hand koordiniert. Entscheidungen mit Zahlen, nicht mit Bauchgefühl.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/#kontakt"
            className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)]
                       bg-[var(--brand-green-900)] text-[var(--neutral-100)]
                       shadow-[var(--shadow-micro)]
                       hover:bg-[var(--brand-green-700)]
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold-500)]
                       transition"
          >
            Erstgespräch sichern
          </a>
          <a
            href="/#faelle"
            className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)]
                       border border-[color:rgb(212_175_55_/0.5)]
                       text-[var(--neutral-100)]/90
                       hover:bg-white/10
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold-500)]
                       transition"
          >
            Fälle ansehen
          </a>
        </div>

        {/* Trust / Meta */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-[0.08em] uppercase text-[var(--neutral-100)]/70">
          <li className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-gold-500)]" fill="currentColor" aria-hidden><path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z"/></svg>
            §34f/§34i • zertifiziert
          </li>
          <li className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-gold-500)]" fill="currentColor" aria-hidden><path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z"/></svg>
            Provisionsfrei • honorarbasiert
          </li>
          <li className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--brand-gold-500)]" fill="currentColor" aria-hidden><path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z"/></svg>
            Netzwerk: Finanzierung • Steuern • Recht
          </li>
        </ul>
      </motion.div>

      {/* Collage / Portraits */}
      <motion.figure variants={fadeUp} className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-soft)]">
          {/* dezente Struktur im Hintergrund */}
          <div className="absolute inset-0 bg-[url('/images/team/group.jpg')] bg-cover bg-center opacity-[0.14]" aria-hidden />
          {/* Portrait-Collage */}
          <div className="relative h-full p-5 grid grid-cols-2 gap-4 place-items-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q0VPfGVufDB8fDB8fHww"
              alt="Sebastian Penninger – Finanz- & Immobilienberater"
              className="h-44 w-44 object-cover rounded-2xl ring-1 ring-[color:rgb(212_175_55_/0.35)] bg-white"
              onError={(e)=>{e.currentTarget.src='/images/team/placeholder.jpg';}}
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q0VPfGVufDB8fDB8fHww"
              alt="Kooperationspartner Baufinanzierung"
              className="h-36 w-36 object-cover rounded-2xl translate-y-6 ring-1 ring-[color:rgb(212_175_55_/0.35)] bg-white"
              onError={(e)=>{e.currentTarget.src='/images/team/placeholder.jpg';}}
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0VPfGVufDB8fDB8fHww"
              alt="Partnerin Steuerberatung"
              className="h-36 w-36 object-cover rounded-2xl -translate-y-6 ring-1 ring-[color:rgb(212_175_55_/0.35)] bg-white"
              onError={(e)=>{e.currentTarget.src='/images/team/placeholder.jpg';}}
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0VPfGVufDB8fDB8fHww"
              alt="Partner Rechtsberatung"
              className="h-32 w-32 object-cover rounded-2xl translate-y-2 ring-1 ring-[color:rgb(212_175_55_/0.35)] bg-white"
              onError={(e)=>{e.currentTarget.src='/images/team/placeholder.jpg';}}
              loading="lazy"
            />
          </div>
          {/* Goldene Hairline außen */}
          <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] border border-[color:rgb(212_175_55_/0.3)]" aria-hidden />
        </div>
        <figcaption className="sr-only">Team-Portraits</figcaption>
      </motion.figure>
    </motion.div>
  </Container>

  {/* KPI-Band */}
  <Container className="mt-12 py-6 border-t border-[color:rgb(212_175_55_/0.25)]">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      
    </div>
  </Container>
</Section>


      {/* PEOPLE CARDS */}
      <Section className="py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-[40px] leading-[48px] font-display">Menschen, die Ergebnisse möglich machen</h2>
              <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {people.map((p) => (
              <motion.article
                key={p.name}
                variants={fadeUp}
                className="group rounded-[var(--radius-xl)] overflow-hidden bg-white border border-[color:rgb(212_175_55_/0.3)] shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-lift)] transition"
              >
                <img
                  src={p.img}
                  alt={`${p.name} – ${p.role}`}
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/team/placeholder.jpg"; }}
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">{p.meta}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="text-lg font-display">{p.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-[10px] border border-[color:rgb(212_175_55_/0.4)]">{p.badge}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--brand-green-900)]/80">{p.role}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--brand-green-900)]/90">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <IconDot className="text-[var(--brand-gold-500)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* VALUES / ARBEITSWEISE */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[var(--radius-xl)] p-6 border border-[color:rgb(212_175_55_/0.3)] shadow-[var(--shadow-micro)]">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">
                <IconShield className="text-[var(--brand-gold-500)]" /> Unabhängig & zertifiziert
              </div>
              <h3 className="mt-2 font-display text-xl">Transparenz statt Verkauf</h3>
              <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">
                Honorarbasiert, provisionsfrei. Empfehlungen ausschließlich im Interesse der Mandant:innen.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] p-6 border border-[color:rgb(212_175_55_/0.3)] shadow-[var(--shadow-micro)]">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">
                <IconCheck className="text-[var(--brand-gold-500)]" /> Systemisch
              </div>
              <h3 className="mt-2 font-display text-xl">Vom Ziel zur Umsetzung</h3>
              <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">
                Analyse → Strategie → Umsetzung → Begleitung. Klare Schritte, klare Zuständigkeiten.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] p-6 border border-[color:rgb(212_175_55_/0.3)] shadow-[var(--shadow-micro)]">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">
                <IconCheck className="text-[var(--brand-gold-500)]" /> Messbar
              </div>
              <h3 className="mt-2 font-display text-xl">Ergebnisse im Fokus</h3>
              <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">
                Zinsersparnis, Cashflow, Kostenquote – Entscheidungen mit Zahlen, nicht mit Bauchgefühl.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA BAND */}
      <Section className="py-16 bg-[var(--brand-green-950)] text-[var(--neutral-100)]">
        <Container className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[32px] leading-[1.2]">Lernen Sie uns kennen.</h2>
            <p className="mt-2 text-[var(--neutral-100)]/80">
              Ein unverbindliches Erstgespräch klärt Ziele, Situation und den passenden Weg.
            </p>
          </div>
          <div className="lg:col-span-4 flex gap-3 lg:justify-end">
            <a href="/#kontakt"
               className="inline-flex items-center justify-center h-12 px-5 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] hover:bg-[var(--brand-green-700)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold-500)] transition">
              Erstgespräch
            </a>
            <a href="/#leistungen"
               className="inline-flex items-center justify-center h-12 px-5 rounded-[var(--radius-lg)] border border-[color:var(--neutral-100)] text-[var(--neutral-100)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-gold-500)] transition">
              Leistungen
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
