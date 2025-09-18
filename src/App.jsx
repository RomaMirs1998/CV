import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Baby, Ruler, Building2, KeyRound } from "lucide-react";

import seb from "./assets/seb.jpg"

// ---------------- Motion Presets ----------------
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.2, 0.7, 0.2, 1] } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ---------------- Layout Helpers ----------------
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

// ersetzt deine bisherigen Icon-Komponenten
const IconCheck = ({ className = "" }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={["h-5 w-5", className].filter(Boolean).join(" ")}
    fill="currentColor"
  >
    <path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z" />
  </svg>
);

const IconDot = ({ className = "" }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={["h-3 w-3", className].filter(Boolean).join(" ")}
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="6" />
  </svg>
);
const IconMail = (props) => (
  <svg aria-hidden viewBox="0 0 24 24" className={props.className || "h-5 w-5"} fill="currentColor">
    <path d="M3 5h18v14H3z" opacity=".2" />
    <path d="M21 7.5V19H3V7.5l9 6 9-6zM3 5h18v.5L12 12 3 5.5V5z" />
  </svg>
);
const IconPhone = (props) => (
  <svg aria-hidden viewBox="0 0 24 24" className={props.className || "h-5 w-5"} fill="currentColor">
    <path d="M6.6 10.8c1.4 2.6 3.6 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.6.6 4 .6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.1l-2.1 2.1z" />
  </svg>
);
const IconMap = (props) => (
  <svg aria-hidden viewBox="0 0 24 24" className={props.className || "h-5 w-5"} fill="currentColor">
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

// ---------------- Components ----------------
export const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 nav-blur border-b border-[color:rgb(212_175_55_/0.3)]">
      <Container className="h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 focus-visible:focus-ring">
          <div className="h-9 w-9 rounded-[var(--radius-md)] grid place-content-center bg-[var(--brand-green-900)] text-[var(--brand-gold-500)] font-semibold shadow-[var(--shadow-micro)]">
            SP
          </div>
          <div className="leading-tight">
            <p className="font-medium">Sebastian Penninger</p>
            <p className="text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">Sicher Planen</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--brand-green-900)]/80 hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center h-10 px-4 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] hover:bg-[var(--brand-green-700)] focus-visible:focus-ring transition"
          >
            Erstgespräch
          </a>
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Menü öffnen"
          className="md:hidden h-10 w-10 grid place-content-center rounded border hairline-gold focus-visible:focus-ring"
        >
          <span className="sr-only">Menü</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t hairline-gold bg-[var(--neutral-100)]">
          <Container className="py-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-[var(--brand-green-900)] focus-visible:focus-ring">
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-2 inline-flex items-center justify-center h-11 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] focus-visible:focus-ring"
            >
              Erstgespräch
            </a>
          </Container>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <Section id="home" className="pt-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <p className="text-xs tracking-[0.12em] uppercase text-[var(--brand-green-700)]">Unabhängig • Transparent • Planbar</p>
            <h1 className="mt-3 font-display text-[40px] leading-[1.15] sm:text-[48px] sm:leading-[1.15] lg:text-[56px] lg:leading-[1.15]">
              Sicher planen in allen Lebensbereichen – vom Vermögensaufbau über Absicherung und Immobilien bis hin zur individuellen Einrichtung.
              
            </h1>
            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/85">
             Von der ersten Analyse bis zur Umsetzung begleiten wir dich: Finanzierung, Immobilientraum, Absicherung – alles aus einer Hand..
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] shadow-[var(--shadow-micro)] hover:bg-[var(--brand-green-700)] focus-visible:focus-ring transition"
              >
                Erstgespräch sichern
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)] border border-[color:var(--brand-green-900)] text-[var(--brand-green-900)] hover:bg-[color:rgb(20_82_68_/0.06)] focus-visible:focus-ring transition"
              >
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-xs text-[var(--brand-green-700)]">
              <span className="inline-flex items-center gap-2"><IconCheck className="text-[var(--brand-gold-500)] h-4 w-4"/> Zertifiziert</span>
              <span className="inline-flex items-center gap-2"><IconDot className="text-[var(--brand-gold-500)] h-3 w-3"/> Provisionsbasis</span>
              <span className="inline-flex items-center gap-2"><IconDot className="text-[var(--brand-gold-500)] h-3 w-3"/> Team im Hintergrund</span>
            </div>
          </motion.div>

          <motion.figure variants={fadeUp} className="lg:col-span-5 relative">
            <div className="absolute -inset-4 -z-10 rounded-[32px] blur-2xl bg-[color:rgb(20_82_68_/0.12)]" />
            <img
              src={seb}
              alt="Porträt des Finanz- & Immobilienberaters in ruhiger Büroumgebung"
              className="w-full aspect-[4/5] object-cover rounded-[var(--radius-xl)] bg-white hairline-gold shadow-[var(--shadow-soft)]"
              loading="eager"
            />
            <figcaption className="sr-only">Berater-Porträt</figcaption>
          </motion.figure>
        </motion.div>
      </Container>
      <div className="mt-12 bg-[var(--brand-green-950)] text-[var(--neutral-100)]">
        <Container className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div><p className="text-2xl font-display">100+ bereute Kunden</p></div>
          <div><p className="text-2xl font-display">bis zu 150€/M sparen</p></div>
          <div><p className="text-2xl font-display">über 100+ Produktpartner</p></div>
        </Container>
      </div>
    </Section>
  );
};

const Cases = () => {
  const items = [
    { img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D", title: "Mit Stromersparnis zur Kinderabsicherung", meta: "Stromersparnis", outcome: "Schon 30 € im Monat eingespart – und am Ende rund 25.000 € für dein Kind vorgesorgt" },
    { img: "https://th.bing.com/th/id/OIP.mloswkcoDeV8Kv4C-PAE_QHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3", title: "Kreditumschuldung lohnt sich", meta: "Kreditumschuldung", outcome: "Rund 20.000 € Ersparnis – allein über eine Laufzeit von 12 Jahren." },
    { img: "https://th.bing.com/th/id/OIP.bdGN1H-krLc3X3hxIvS5YAHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7", title: "40 m² clever genutzt", meta: "Wohnqualität", outcome: "Alle Bedürfnisse auf kleinstem Raum geplant – mit smarten Lösungen, die Platz schaffen und Wohnqualität erhöhen." }
  ];
  return (
    <Section id="faelle" className="py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-[40px] leading-[48px] font-display">Ausgewählte Fälle</h2>
            <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
          </div>
          <a href="#kontakt" className="text-sm underline underline-offset-4 decoration-[var(--brand-gold-500)] hover:opacity-80 focus-visible:focus-ring">Erstgespräch</a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c) => (
            <motion.article key={c.title} variants={fadeUp} className="group rounded-[var(--radius-xl)] overflow-hidden bg-white hairline-gold shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-lift)] transition">
              <img src={c.img} alt={`${c.title} – Mockup/Diagramm`} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">{c.meta}</p>
                <h3 className="mt-2 text-xl font-display">{c.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm">
                  <span className="rounded-[12px] px-3 py-1 border border-[color:rgb(212_175_55_/0.4)] text-[var(--brand-green-900)]">{c.outcome}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-6 text-xs text-[var(--brand-green-900)]/70">Hinweis: Vergangene Ergebnisse sind kein verlässlicher Indikator für zukünftige Entwicklungen.</p>
      </Container>
    </Section>
  );
};

const Services = () => {
  const topItems = [
    {
      title: "Immobilien & Finanzierung",
      desc: "Vom ersten Objekt bis zum Portfolio – Analyse, Finanzierung, Begleitung bis zur Notarübergabe.",
      benefits: ["Baufinanzierung & Anschluss", "Fördermittel & Konzepte", "Zins- & Laufzeitoptimierung"]
    },
    {
      title: "Vermögensaufbau & Kapitalanlagen",
      desc: "Strukturierte Strategie für ETFs/Sachwerte – Kosten, Risiken & Steuern im Blick.",
      benefits: ["ETF-/Depot-Strategien", "Liquiditätsmanagement", "Transparente Kosten"]
    },
    {
      title: "Absicherung & Vorsorge",
      desc: "Passgenaue Lösungen ohne Überversicherung – klar, verständlich, unabhängig.",
      benefits: ["Risikomanagement", "Berufs- & Haftpflicht", "Renten- & Hinterbliebenenschutz"]
    }
  ];

  const bottomItems = [
    {
      title: "Haushaltsoptimierung",
      desc: "Wie bleibt mehr von deinem Geld übrig – und wie setzt du es sinnvoll ein?",
      benefits: [
        "Strom- & Gasvergleich",
        "Versicherungs- & Sparformen im Vergleich",
        "Übersichtliche Haushaltsrechnung"
      ]
    },
    {
      title: "Individuelle Einrichtung",
      desc: "Wie holst du das Maximum aus deinem Wohnraum heraus?",
      benefits: [
        "Maßanfertigungen nach Bedarf",
        "2D- & 3D-Planung",
        "Komplette Abwicklung mit dem Tischler"
      ]
    }
  ];

  const renderCard = (it) => (
    <motion.div
      key={it.title}
      variants={fadeUp}
      className="group relative rounded-[var(--radius-xl)] border border-[color:rgb(212_175_55_/0.3)] bg-white p-6 shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-soft)] transition"
    >
      <h3 className="text-lg font-display">{it.title}</h3>
      <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">{it.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-[var(--brand-green-900)]/90">
        {it.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <IconDot className="text-[var(--brand-gold-500)] h-3 w-3" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#kontakt"
        className="mt-6 inline-block rounded-[var(--radius-lg)] border border-[color:var(--brand-green-900)] px-4 py-2 text-sm text-[var(--brand-green-900)] hover:bg-[color:rgb(20_82_68_/0.06)] focus-visible:focus-ring"
      >
        Mehr erfahren
      </a>
    </motion.div>
  );

  return (
    <Section id="leistungen" className="py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-[40px] leading-[48px] font-display">Leistungen</h2>
          <div className="mx-auto mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
          <p className="mt-3 text-[var(--brand-green-900)]/85">Klar formuliert. Kein Verkaufsjargon.</p>
        </div>

        {/* obere Reihe */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {topItems.map(renderCard)}
        </motion.div>

        {/* untere Reihe */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2 justify-center"
        >
          {bottomItems.map(renderCard)}
        </motion.div>
      </Container>
    </Section>
  );
};


const About = () => {
  return (
    <Section id="ueber" className="py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 lg:grid-cols-12"
        >
          <motion.figure variants={fadeUp} className="lg:col-span-5">
            <img
              src={seb}
              alt="Berater am Schreibtisch mit Unterlagen zur Finanz- und Immobilienplanung"
              className="w-full aspect-[4/5] object-cover rounded-[var(--radius-xl)] hairline-gold shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
          </motion.figure>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <h2 className="text-[40px] leading-[48px] font-display">Sebastian Penninger</h2>
            <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />

            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/90">
              Mein Motto: <strong>Sicher planen – in allen Aspekten.</strong>
            </p>
            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/90">
              Durch meine technische Ausbildung habe ich gelernt, präzise und lösungsorientiert zu denken.
              Dieses Verständnis verbinde ich heute mit meinem Know-how im Finanzbereich – so kann ich Planung,
              Absicherung und Umsetzung nahtlos miteinander kombinieren.
            </p>
            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/90">
              Von der Tischlerlehre über den Meistertitel bis hin zum Mehrfachagenten mit eigenem
              Vermögensberater-Team habe ich mir ein breites Fundament aufgebaut. Genau diese Vielseitigkeit
              ermöglicht es mir, Kunden ganzheitlich zu begleiten – von der Analyse bis zur Umsetzung.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <IconCheck className="text-[var(--brand-gold-500)]" />
                Umfangreiche Ausbildungen & kontinuierliche Weiterbildung
              </li>
              <li className="flex items-start gap-3">
                <IconCheck className="text-[var(--brand-gold-500)]" />
                Beratung digital oder persönlich – flexibel nach Wunsch
              </li>
              <li className="flex items-start gap-3">
                <IconCheck className="text-[var(--brand-gold-500)]" />
                Zusammenarbeit auf Augenhöhe
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};


const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className="w-6 h-6 text-[var(--brand-green-900)] hidden md:block self-center"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className="w-6 h-6 text-[var(--brand-green-900)] md:hidden self-center"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 5v14M6 13l6 6 6-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Process = () => {
  const steps = [
    { n: 1, t: "Kennenlernen", d: "Kostenloses Erstgespräch – Ziele & Status klären." },
    { n: 2, t: "Analyse", d: "Ist-Situation, Risiken und Potenziale transparent aufbereiten." },
    { n: 3, t: "Strategie", d: "Individuelles Konzept inkl. Alternativen & Förderungen." },
    { n: 4, t: "Umsetzung", d: "Gemeinsam entscheiden & Verträge digital umsetzen." },
    { n: 5, t: "Begleitung", d: "Regelmäßige Updates und Anpassungen bei Bedarf." }
  ];

  return (
    <Section id="prozess" className="py-24">
      <Container>
        <h2 className="text-[40px] leading-[48px] font-display text-center">
          So arbeiten wir zusammen
        </h2>
        <div className="mx-auto mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-col md:flex-row md:items-stretch md:justify-center md:gap-6"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative flex-1 flex flex-col justify-between rounded-[var(--radius-xl)] bg-white hairline-gold p-6 shadow-[var(--shadow-soft)] min-h-[220px] text-center overflow-hidden"
            >
              {/* Hintergrund-Pfeil */}
              {i < steps.length - 1 && (
                <>
                  {/* Desktop: horizontaler Pfeil */}
                  <div className="hidden md:flex absolute inset-y-0 right-0 h-full w-1/3 items-center justify-center opacity-10 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full text-[var(--brand-green-900)]"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Mobile: vertikaler Pfeil */}
                  <div className="md:hidden absolute inset-x-0 bottom-0 w-full h-1/3 flex items-center justify-center opacity-10 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full text-[var(--brand-green-900)]"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M12 5v14M6 13l6 6 6-6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              )}

              {/* Nummer */}
              <div className="flex justify-center relative z-10">
                <div className="h-6 w-6 flex items-center justify-center rounded-full border border-[var(--brand-gold-500)] bg-[var(--brand-gold-500)]/10 text-[var(--brand-green-900)] text-xs">
                  {s.n}
                </div>
              </div>

              {/* Inhalt */}
              <div className="mt-4 relative z-10">
                <h3 className="font-display text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};




const Testimonials = () => {
  const quotes = [
    { name: "Familie K.", text: "Bei der Baufinanzierung haben wir Top-Konditionen erhalten und alles wurde verständlich erklärt." },
    { name: "M. Fischer", text: "Sehr strukturiert und menschlich – endlich ein klarer Finanzplan, der zu uns passt." },
    { name: "A. Weber", text: "Keine Verkaufsmaschen – nur ehrliche, nachvollziehbare Empfehlungen." }
  ];
  return (
    <Section id="stimmen" className="py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-[40px] leading-[48px] font-display">Partnerstimmen</h2>
            <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.figure key={q.name} variants={fadeUp} className="rounded-[var(--radius-xl)] bg-white hairline-gold p-6 shadow-[var(--shadow-micro)]">
              <blockquote className="font-display text-lg prose-quote">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-[var(--brand-green-900)]/80">{q.name}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

const PartnerApply = () => {
  return (
    <Section
      id="partner-apply"
      className="py-24 bg-gradient-to-b from-[var(--neutral-50)] to-white"
    >
      <Container>
        {/* Headline */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-[40px] leading-[48px] font-display">
            Geschäftspartner werden
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
          <p className="mt-5 text-lg text-[var(--brand-green-900)]/85">
            Du hast den Traum, Menschen zu unterstützen – sei es bei Finanzen,
            Absicherung, Immobilien oder Einrichtung? Dann bist du bei mir genau
            richtig.
          </p>
          <p className="mt-4 text-lg text-[var(--brand-green-900)]/85">
            Starte ganz einfach nebenberuflich und wachse Schritt für Schritt in
            eine spannende Tätigkeit hinein. Ich freue mich darauf, mein Team
            mit motivierten Partnern zu erweitern.
          </p>
          <p className="mt-4 text-lg text-[var(--brand-green-900)]/85">
            Lass uns ein unverbindliches Kennenlerngespräch vereinbaren – ich
            bin gespannt auf dich!
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto rounded-[var(--radius-xl)] bg-white shadow-[var(--shadow-soft)] border border-[color:rgb(212_175_55_/0.3)] p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Vielen Dank für Ihre Bewerbung! Ich melde mich zeitnah.");
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[var(--brand-green-700)]"
                >
                  Unternehmen
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="mt-2 w-full rounded-[var(--radius-lg)] border border-[color:rgb(20_82_68_/0.2)] bg-[var(--neutral-50)] px-4 py-3 focus:outline-2 focus:outline-[var(--brand-gold-500)]"
                  placeholder="Firmenname"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-[var(--brand-green-700)]"
                >
                  Ansprechpartner
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  className="mt-2 w-full rounded-[var(--radius-lg)] border border-[color:rgb(20_82_68_/0.2)] bg-[var(--neutral-50)] px-4 py-3 focus:outline-2 focus:outline-[var(--brand-gold-500)]"
                  placeholder="Vor- und Nachname"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--brand-green-700)]"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-[var(--radius-lg)] border border-[color:rgb(20_82_68_/0.2)] bg-[var(--neutral-50)] px-4 py-3 focus:outline-2 focus:outline-[var(--brand-gold-500)]"
                  placeholder="kontakt@mail.de"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--brand-green-700)]"
                >
                  Telefonnummer (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-[var(--radius-lg)] border border-[color:rgb(20_82_68_/0.2)] bg-[var(--neutral-50)] px-4 py-3 focus:outline-2 focus:outline-[var(--brand-gold-500)]"
                  placeholder="+49 ..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="msg"
                className="block text-sm font-medium text-[var(--brand-green-700)]"
              >
                Nachricht
              </label>
              <textarea
                id="msg"
                name="msg"
                rows="4"
                className="mt-2 w-full rounded-[var(--radius-lg)] border border-[color:rgb(20_82_68_/0.2)] bg-[var(--neutral-50)] px-4 py-3 focus:outline-2 focus:outline-[var(--brand-gold-500)]"
                placeholder="Kurze Vorstellung Ihres Unternehmens, Motivation & Ziele."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-14 px-8 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] font-medium shadow-[var(--shadow-micro)] hover:bg-[var(--brand-green-700)] focus-visible:focus-ring transition"
              >
                Bewerbung absenden
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};




const Contact = () => {
  return (
    <Section id="kontakt" className="py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <h2 className="text-[40px] leading-[48px] font-display">Kostenloses Erstgespräch</h2>
            <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
            <p className="mt-3 text-[var(--brand-green-900)]/85">Schildern Sie mir kurz Ihr Anliegen – ich melde mich mit Terminvorschlägen. Keine Newsletter.</p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); alert("Danke! Ich melde mich zeitnah."); }}
              aria-describedby="privacy-note"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--brand-green-700)]">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-[var(--radius-lg)] bg-white border border-[color:rgb(20_82_68_/0.3)] px-3 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--brand-gold-500)]" placeholder="Ihr Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--brand-green-700)]">E-Mail</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-[var(--radius-lg)] bg-white border border-[color:rgb(20_82_68_/0.3)] px-3 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--brand-gold-500)]" placeholder="name@mail.de" />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm text-[var(--brand-green-700)]">Thema</label>
                <select id="topic" name="topic" className="mt-1 w-full rounded-[var(--radius-lg)] bg-white border border-[color:rgb(20_82_68_/0.3)] px-3 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--brand-gold-500)]">
                  <option>Baufinanzierung</option>
                  <option>Kapitalanlage / Depot</option>
                  <option>Vorsorge & Absicherung</option>
                  <option>Immobilieninvestment</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label htmlFor="msg" className="block text-sm text-[var(--brand-green-700)]">Nachricht</label>
                <textarea id="msg" name="msg" rows="4" className="mt-1 w-full rounded-[var(--radius-lg)] bg-white border border-[color:rgb(20_82_68_/0.3)] px-3 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--brand-gold-500)]" placeholder="Kurz & konkret: Ziel, Timing, Budgetrahmen (optional)." />
                <p id="privacy-note" className="mt-2 text-xs text-[var(--brand-green-700)]">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß Datenschutzerklärung zu.</p>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] shadow-[var(--shadow-micro)] hover:bg-[var(--brand-green-700)] focus-visible:focus-ring transition">Anfrage senden</button>
                <a href="mailto:sebastian.penninger@example.com" className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)] border border-[color:var(--brand-green-900)] text-[var(--brand-green-900)] hover:bg-[color:rgb(20_82_68_/0.06)] focus-visible:focus-ring">E-Mail</a>
              </div>
            </form>
          </motion.div>

          <motion.aside variants={fadeUp} className="lg:col-span-5 rounded-[var(--radius-xl)] bg-white hairline-gold p-6 shadow-[var(--shadow-micro)]">
            <h3 className="font-display text-lg">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3"><IconMail /> office@sebastian-penninger.com</li>
              <li className="flex items-center gap-3"><IconPhone /> +43 664 3019293</li>
              <li className="flex items-center gap-3"><IconMap /> Regensburg & Remote (DE)</li>
            </ul>
           <div className="mt-8 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)]/5 p-4 text-sm text-[var(--brand-green-900)]/90">
  <p className="font-medium">Hinweis zur Unabhängigkeit</p>
  <p>
    Ich arbeite provisionsfrei. Empfehlungen erfolgen ausschließlich im Interesse meiner Mandanten.
  </p>
  <p className="mt-2">
    Ich betreue die Gebiete <strong>Wels, Linz, Steyr</strong> – sowie auf Anfrage auch <strong>ganz Österreich</strong>.
  </p>
</div>

          </motion.aside>
        </motion.div>
      </Container>
    </Section>
  );
};

const Topics = () => {
  const topics = [
    {
      title: "Einrichtungsberatung",
      desc: "Kreative Ideen & clevere Raumlösungen",
      icon: Ruler
    },
    {
      title: "Kindervorsorge",
      desc: "Heute schon für die Zukunft vorsorgen",
      icon: Baby
    },
    {
      title: "Einrichtungsabwicklung",
      desc: "Von der Planung bis zur Umsetzung mit dem Tischler",
      icon: Home
    },
    {
      title: "Bauträgerprojekte",
      desc: "Begleitung vom ersten Konzept bis zur Übergabe",
      icon: Building2
    },
    {
      title: "Eigenimmobilie",
      desc: "Finanzierung, Planung & Realisierung aus einer Hand",
      icon: KeyRound
    }
  ];

  return (
    <Section id="themen" className="py-24 bg-gradient-to-b from-white to-[var(--neutral-50)]">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[40px] leading-[48px] font-display">Themen</h2>
          <div className="mx-auto mt-3 h-[3px] w-20 bg-[var(--brand-gold-500)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-[var(--brand-green-900)]/85 text-lg">
            Wichtige Themen, die ich für meine Kunden begleite – praxisnah, verständlich und mit
            ganzheitlichem Blick.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative flex flex-col rounded-[var(--radius-xl)] 
                           bg-white border border-[color:rgb(212_175_55_/0.25)] 
                           shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-soft)] 
                           transition overflow-hidden"
              >
                {/* Icon Header */}
                <div className="h-20 flex items-center justify-center bg-[var(--brand-green-900)]/5 group-hover:bg-[var(--brand-green-900)]/10 transition">
                  <Icon className="h-8 w-8 text-[var(--brand-gold-500)]" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-[var(--brand-green-900)]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--brand-green-900)]/85">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};


const Recommend = () => {
  return (
    <Section id="empfehlen" className="py-20 bg-[var(--neutral-50)]">
      <Container className="text-center">
        <h2 className="text-[32px] sm:text-[40px] leading-[1.2] font-display">
          Weiterempfehlen und Profitieren
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-20 bg-[var(--brand-gold-500)]/70 rounded-full" />
        <p className="mt-4 text-[var(--brand-green-900)]/85 max-w-2xl mx-auto">
          Empfehlen Sie meinen Service weiter und sichern Sie sich attraktive Vorteile.
        </p>

        <div className="mt-8">
          <a
            href="https://link.mit-bester-empfehlung.de/pages/7463--penninger-1fd9d.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-6 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)] text-[var(--neutral-100)] shadow-[var(--shadow-micro)] hover:bg-[var(--brand-green-700)] focus-visible:focus-ring transition"
          >
            Jetzt Weiterempfehlen
          </a>
        </div>
      </Container>
    </Section>
  );
};


const MainPartners = () => {
  const mainPartners = [
    { name: "Partner 1", logo: "https://www.brindl-bau.at/templates/yootheme/cache/BrindlBau-3fc0e38b.png", url: "https://www.brindl-bau.at/" },
    { name: "Partner 2", logo: "https://th.bing.com/th/id/OIP.LFHTromToae7XPrZTkGesQHaBf?w=339&h=70&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3", url: "https://www.lidauer.at/" },
    { name: "Partner 3", logo: "https://karriere.ovb.de/bilder/ovb/symbole/ovb_logo.png", url: "https://www.ovb.at/" },
    { name: "Partner 4", logo: "https://static.wixstatic.com/media/b6b09b_bfc3a2d6c00d43a9a4d4d450dd195626~mv2.webp/v1/fill/w_386,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SKT%20Logo_transparent_png-2.webp", url: "https://www.skt-finance.at/" }
  ];

  return (
    <Section id="hauptpartner" className="py-24 bg-gradient-to-b from-white to-[var(--neutral-50)]">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-[40px] leading-[48px] font-display">Hauptpartner</h2>
          <div className="mx-auto mt-3 h-[2px] w-20 bg-[var(--brand-gold-500)]/70 rounded-full" />
          <p className="mt-4 text-[var(--brand-green-900)]/85">
            Unsere wichtigsten Kooperationspartner auf einen Blick
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mainPartners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded-[var(--radius-xl)] 
                         bg-[rgba(20,82,68,0.45)] border border-[color:rgb(212_175_55_/0.3)] 
                         shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-lift)] 
                         transition p-10"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-24 max-w-[220px] object-contain opacity-90 group-hover:opacity-100 transition"
                loading="lazy"
              />
              <span className="sr-only">{p.name}</span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};


const OtherPartners = () => {
  const otherPartners = [
    "Merkur Versicherung AG",
    "Helvetia Versicherungen AG",
    "Allianz Österreich",
    "ARAG SE, Direktion Österreich",
    "UNIQA Versicherungen AG",
    "ARTS Asset Management GmbH",
    "C&P Immobilien AG",
    "Wiener Städtische Versicherung AG",
    "Donau Brokerline Versicherungs-Service GmbH",
    "SIGNAL IDUNA Allgemeine Versicherung AG",
    "Ideal Lebensversicherung a. G.",
    "SIGNAL IDUNA Krankenversicherung a. G.",
    "ERGO Versicherung AG",
    "NÜRNBERGER Allgemeine Versicherungs AG",
    "Proxalto Lebensversicherung AG",
    "Baloise Lebensversicherung AG",
    "ROLAND Rechtsschutz Versicherung-AG",
    "R+V Allgemeine Versicherung AG",
    "HanseMerkur Allgemeine Versicherung AG",
    "HDI Versicherung AG",
    "Wüstenrot",
     "Town & Country Haus", 
     "Amundi Deutschland"
     , "Qualitypool GmbH"
  ];

  return (
    <Section id="weitere-partner" className="py-24 bg-gradient-to-b from-[var(--neutral-50)] to-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] leading-[44px] font-display">Weitere Partner</h2>
          <div className="mx-auto mt-3 h-[3px] w-20 bg-[var(--brand-gold-500)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-[var(--brand-green-900)]/85 text-lg">
            Unsere breite Auswahl an Partnern aus Versicherung, Investment, Immobilien & mehr –
            damit Sie in jedem Bereich bestens aufgestellt sind.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherPartners.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[var(--radius-lg)] bg-white/70 
                         border border-[color:rgb(212_175_55_/0.25)] 
                         shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-soft)] 
                         transition p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-gold-500)]/15">
                <IconCheck className="text-[var(--brand-gold-500)] h-4 w-4" />
              </div>
              <span className="text-[var(--brand-green-900)]/90 text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};




export const Footer = () => (
  <footer className="border-t border-transparent bg-[var(--brand-green-950)] text-[var(--neutral-100)]">
    <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-[var(--radius-md)] bg-[var(--brand-green-900)] text-[var(--brand-gold-500)] grid place-content-center text-xs font-bold">SP</div>
        <span>© {new Date().getFullYear()} Sebastian Penninger</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="/impressum.html" className="hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring">Impressum</a>
        <a href="/datenschutz.html" className="hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring">Datenschutz</a>
      </div>
    </Container>
  </footer>
);

// ---------------- App Root ----------------
export default function App() {
  // smooth hash scroll (with offset for fixed nav)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = id && document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <main id="main">
        <Hero />
        <Cases />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Topics/>
        <MainPartners/>
         <Recommend /> 
        <Contact />
        <OtherPartners/>
         <PartnerApply />   
      </main>
      <Footer />
    </div>
  );
}
