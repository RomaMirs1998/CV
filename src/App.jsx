import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
    { href: "/team", label: "Team" },
    { href: "#faelle", label: "Fälle" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber", label: "Über mich" },
    { href: "#prozess", label: "Prozess" },
    { href: "#stimmen", label: "Stimmen" },
    { href: "#kontakt", label: "Kontakt" }
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
            <p className="text-xs tracking-[0.08em] uppercase text-[var(--brand-green-700)]">Finanz- & Immobilienberatung</p>
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
              Vermögen aufbauen & Immobilien clever finanzieren – mit einem Plan, der zu Ihrem Leben passt.
            </h1>
            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/85">
              Von der Analyse bis zur Umsetzung: Baufinanzierung, Kapitalanlagen und Absicherung – provisionsfrei und honorarbasiert.
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
              <span className="inline-flex items-center gap-2"><IconCheck className="text-[var(--brand-gold-500)] h-4 w-4"/> Zertifiziert (z. B. §34f/§34i)</span>
              <span className="inline-flex items-center gap-2"><IconDot className="text-[var(--brand-gold-500)] h-3 w-3"/> Provisionsfrei • honorarbasiert</span>
              <span className="inline-flex items-center gap-2"><IconDot className="text-[var(--brand-gold-500)] h-3 w-3"/> 250+ betreute Kund:innen</span>
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
          <div><p className="text-2xl font-display">200.000€+</p><p className="text-xs tracking-[0.08em] uppercase opacity-80">verwaltetes Volumen</p></div>
          <div><p className="text-2xl font-display">0,45% p.a.</p><p className="text-xs tracking-[0.08em] uppercase opacity-80">Zinsersparnis (Best Case)</p></div>
          <div><p className="text-2xl font-display">4,9/5</p><p className="text-xs tracking-[0.08em] uppercase opacity-80">Ø Zufriedenheit</p></div>
        </Container>
      </div>
    </Section>
  );
};

const Cases = () => {
  const items = [
    { img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D", title: "Baufinanzierung junge Familie", meta: "Eigenheim • 2024", outcome: "0,45% p.a. günstiger durch Angebotsvergleich" },
    { img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V29obnVuZ2VufGVufDB8fDB8fHww", title: "Kapitalanlage Regensburg", meta: "2-Zimmer • Vermietung", outcome: "Cashflow-positiv ab Monat 1 bei 20% EK" },
    { img: "https://media.istockphoto.com/id/924972386/photo/stock-market-digital-graph-chart-on-led-display-concept-a-large-display-of-daily-stock-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=7CHp3xwZDgEWe3RKW37bV4oohdzQIEyY1UpWIgRb9E4=", title: "Depot-Optimierung", meta: "ETF • Gebühren", outcome: "TER von 1,6% → 0,24% gesenkt" }
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
  const items = [
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
  return (
    <Section id="leistungen" className="py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-[40px] leading-[48px] font-display">Leistungen</h2>
          <div className="mx-auto mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
          <p className="mt-3 text-[var(--brand-green-900)]/85">Klar formuliert. Kein Verkaufsjargon.</p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div key={it.title} variants={fadeUp} className="group relative rounded-[var(--radius-xl)] border border-[color:rgb(212_175_55_/0.3)] bg-white p-6 shadow-[var(--shadow-micro)] hover:shadow-[var(--shadow-soft)] transition">
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
              <a href="#kontakt" className="mt-6 inline-block rounded-[var(--radius-lg)] border border-[color:var(--brand-green-900)] px-4 py-2 text-sm text-[var(--brand-green-900)] hover:bg-[color:rgb(20_82_68_/0.06)] focus-visible:focus-ring">Mehr erfahren</a>
            </motion.div>
          ))}
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
            <h2 className="text-[40px] leading-[48px] font-display">Über Sebastian</h2>
            <div className="mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
            <p className="mt-4 text-[18px] leading-8 text-[var(--brand-green-900)]/90">
              Seit über 8 Jahren begleite ich Menschen dabei, kluge Finanzentscheidungen zu treffen – unabhängig, transparent und nachvollziehbar.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><IconCheck className="text-[var(--brand-gold-500)]" /> Zertifizierter Finanzanlagenfachmann (z. B. §34f GewO)</li>
              <li className="flex items-start gap-3"><IconCheck className="text-[var(--brand-gold-500)]" /> Spezialisiert auf Kapitalanlagen & Baufinanzierungen</li>
              <li className="flex items-start gap-3"><IconCheck className="text-[var(--brand-gold-500)]" /> Digitale Abwicklung und persönliche Begleitung</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6 opacity-80">
              <img src="https://cdn0.erstegroup.com/content/dam/at/spk-vorarlberg/Logo/SPK_web_internal-material_ORIGINAL.png" alt="Kundenlogo 1" className="h-6" loading="lazy" />
              <img src="https://logos-world.net/wp-content/uploads/2023/02/Raiffeisen-Bank-International-Logo.png" alt="Kundenlogo 2" className="h-6" loading="lazy" />
              <img src="https://tse1.mm.bing.net/th/id/OIP.3D4T0_-qp-MSdNMg0ZD0ywHaB6?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Kundenlogo 3" className="h-6" loading="lazy" />
              <img src="https://www.capitalo.at/wp-content/uploads/2018/11/uniqa.png" alt="Kundenlogo 4" className="h-6" loading="lazy" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

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
        <h2 className="text-[40px] leading-[48px] font-display text-center">So arbeiten wir zusammen</h2>
        <div className="mx-auto mt-2 h-[2px] w-16 bg-[var(--brand-gold-500)]/70 rounded-full" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {steps.map(s => (
            <motion.div key={s.n} variants={fadeUp} className="relative rounded-[var(--radius-xl)] bg-white hairline-gold p-6 shadow-[var(--shadow-micro)]">
              <div className="absolute -top-3 left-4 rounded-full bg-[var(--brand-green-900)] px-3 py-1 text-xs text-[var(--brand-gold-500)]">{s.n}</div>
              <h3 className="mt-2 font-display text-lg">{s.t}</h3>
              <p className="mt-1 text-sm text-[var(--brand-green-900)]/85">{s.d}</p>
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
            <h2 className="text-[40px] leading-[48px] font-display">Kundenstimmen</h2>
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
              <li className="flex items-center gap-3"><IconMail /> sebastian.penninger@example.com</li>
              <li className="flex items-center gap-3"><IconPhone /> +49 170 000000</li>
              <li className="flex items-center gap-3"><IconMap /> Regensburg & Remote (DE)</li>
            </ul>
            <div className="mt-8 rounded-[var(--radius-lg)] bg-[var(--brand-green-900)]/5 p-4 text-sm text-[var(--brand-green-900)]/90">
              <p className="font-medium">Hinweis zur Unabhängigkeit</p>
              <p>Ich arbeite provisionsfrei und honorarbasiert. Empfehlungen erfolgen ausschließlich im Interesse meiner Mandanten.</p>
            </div>
          </motion.aside>
        </motion.div>
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
        <a href="#faelle" className="hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring">Fälle</a>
        <a href="#leistungen" className="hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring">Leistungen</a>
        <a href="#kontakt" className="hover:underline underline-offset-4 decoration-[var(--brand-gold-500)] focus-visible:focus-ring">Kontakt</a>
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
