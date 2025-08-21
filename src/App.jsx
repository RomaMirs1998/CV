import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import logo from "./assets/seb.jpg";
// --- Motion variants ------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

// --- Navbar --------------------------------
const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: "#home", label: "Start" },
    { href: "#about", label: "Über mich" },
    { href: "#services", label: "Leistungen" },
    { href: "#portfolio", label: "Fälle" },
    { href: "#testimonials", label: "Stimmen" },
    { href: "#contact", label: "Kontakt" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 grid place-content-center text-white font-bold">SP</div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Sebastian Penninger</p>
            <p className="text-xs text-slate-500">Finanz- & Immobilienberater</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:opacity-90 transition">
            Kostenloses Erstgespräch
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-300">
          <span className="sr-only">Menü öffnen</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <Container className="py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-xl bg-slate-900 text-white px-4 py-2 text-center">
              Kostenloses Erstgespräch
            </a>
          </Container>
        </div>
      )}
    </header>
  );
};

// --- Hero ----------------------------------
const Hero = () => {
  return (
    <Section id="home" className="pt-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <ShieldIcon /> geprüfte Beratung • 100% unabhängig
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Vermögen aufbauen & Immobilien clever finanzieren – mit{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Sebastian Penninger</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Persönlich. Transparent. Planbar. Ich begleite Sie von der Analyse bis zur Umsetzung – für Finanzen, Vorsorge und
              Immobilieninvestments, die zu Ihrem Leben passen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-white shadow hover:shadow-md transition"
              >
                Erstgespräch buchen
              </a>
              <a
                href="#services"
                className="rounded-xl border border-slate-300 px-5 py-3 text-slate-900 hover:bg-slate-50 transition"
              >
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
              <TrustBadges />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-indigo-200 via-blue-100 to-transparent blur-2xl rounded-3xl opacity-70" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-full w-full">
                <img src={logo} alt="Sebastian Penninger" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 bg-gradient-to-t from-black/35 via-black/5 to-transparent">
                  <p className="text-white font-medium text-lg drop-shadow">Sebastian Penninger</p>
                  <p className="text-white text-sm drop-shadow">Ihr Finanz- & Immobilienberater</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};


const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, duration, count, rounded]);

  return <span>{display.toLocaleString()}{suffix}</span>;
};

const About = () => {
  const stats = [
    { label: "Betreute Kunden", value: 250, suffix: "+" },
    { label: "verwaltetes Volumen", value: 200000, suffix: " €" },
    { label: "Ø Zufriedenheit", value: 5, suffix: "/5" },
  ];
  return (
    <Section id="about" className="py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Textblock */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-slate-900">Über Sebastian</h2>
            <p className="mt-4 text-slate-600">
              Seit über 8 Jahren helfe ich Menschen dabei, klügere Finanzentscheidungen zu treffen …
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-3"><CheckIcon /> Zertifizierter Finanzanlagenfachmann (§34f GewO)</li>
              <li className="flex items-start gap-3"><CheckIcon /> Spezialisiert auf Kapitalanlagen & Baufinanzierungen</li>
              <li className="flex items-start gap-3"><CheckIcon /> Digitale Abwicklung und persönliche Begleitung</li>
            </ul>
          </motion.div>

          {/* Zahlen-Stats */}
          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <motion.div
                variants={fadeUp}
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-semibold text-slate-900">
  <Counter to={s.value} suffix={s.suffix} />
</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};


// --- Services -------------------------------
const Services = () => {
  const cards = [
    {
      title: "Finanzplanung & Vermögensaufbau",
      desc: "Strukturierte Strategie, die Ihre Ziele, Risikotoleranz und Steueraspekte berücksichtigt.",
      bullets: ["ETF/Depot-Strategien", "Vorsorge & Absicherung", "Liquiditätsmanagement"],
    },
    {
      title: "Immobilien & Finanzierung",
      desc: "Vom ersten Objekt bis zum Portfolio – Analyse, Finanzierung und Begleitung zur Notarübergabe.",
      bullets: ["Baufinanzierung & Anschluss", "Investmentkalkulation", "Fördermittel & Konzepte"],
    },
    {
      title: "Kapitalanlagen",
      desc: "Diversifizierte Anlagen mit Fokus auf Kosten, Transparenz und Qualität.",
      bullets: ["ETFs & Fonds", "Sachwerte", "Versicherungslösungen"],
    },
  ];
  return (
    <Section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Leistungen</h2>
          <p className="mt-2 text-slate-600">Klar, transparent und auf Ihre Lebenssituation abgestimmt.</p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-blue-600/0 group-hover:from-indigo-500/5 group-hover:to-blue-600/10" />
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <DotIcon />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
                Mehr erfahren
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

// --- Portfolio / Cases ----------------------
const Portfolio = () => {
  const items = [
    { title: "Baufinanzierung für junge Familie", result: "Zinsersparnis von 0,45% p.a. durch Angebotsvergleich", tags: ["Eigenheim", "Vergleich", "Förderung"] },
    { title: "Kapitalanlage: 2-Zimmer in Regensburg", result: "Cashflow-positiv ab Monat 1 bei 20% EK", tags: ["Investment", "Vermietung"] },
    { title: "Depot-Optimierung", result: "Kostenquote von 1,6% → 0,24% gesenkt", tags: ["ETF", "Gebühren"] },
  ];
  return (
    <Section id="portfolio" className="py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Ausgewählte Fälle</h2>
          <p className="mt-2 text-slate-600">Ein Einblick in Ergebnisse aus der Praxis – anonymisiert und repräsentativ.</p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((i) => (
            <motion.article
              key={i.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.result}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {i.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

// --- Testimonials ---------------------------
const Testimonials = () => {
  const quotes = [
    { name: "M. Fischer", text: "Sehr strukturiert, transparent und menschlich. Ich habe endlich einen klaren Plan für meine Finanzen." },
    { name: "Familie K.", text: "Bei der Baufinanzierung hat Sebastian uns Top-Konditionen besorgt und alles super erklärt." },
    { name: "A. Weber", text: "Keine Verkaufsmaschen – nur ehrliche Beratung. Absolute Empfehlung!" },
  ];
  return (
    <Section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Kundenstimmen</h2>
            <p className="mt-2 text-slate-600">Vertrauen entsteht durch Ergebnisse und Empfehlungen.</p>
          </div>
          <div className="hidden md:block text-xs text-slate-500">★ 4,9 von 5 auf unabhängigen Portalen</div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.figure
              key={q.name}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">{q.name}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

// --- Process / Steps ------------------------
const Process = () => {
  const steps = [
    { title: "Kennenlernen", text: "Kostenloses Erstgespräch – Ziele & Status klären." },
    { title: "Analyse", text: "Ist-Situation, Risiken und Potenziale transparent aufbereiten." },
    { title: "Strategie", text: "Individuelles Konzept inkl. Alternativen & Förderungen." },
    { title: "Umsetzung", text: "Gemeinsam Entscheidungen treffen & Verträge digital umsetzen." },
    { title: "Begleitung", text: "Regelmäßige Updates und Anpassungen bei Bedarf." },
  ];
  return (
    <Section className="py-24">
      <Container>
        <h2 className="text-3xl font-semibold text-slate-900 text-center">So arbeiten wir zusammen</h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-5"
        >
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">{idx + 1}</div>
              <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

// --- Contact --------------------------------
const Contact = () => {
  return (
    <Section id="contact" className="py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-slate-900">Kostenloses Erstgespräch</h2>
            <p className="mt-3 text-slate-600">Schildern Sie mir kurz Ihr Anliegen – ich melde mich mit Terminvorschlägen.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Danke! Ich melde mich zeitnah.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm text-slate-600">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">E-Mail</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="name@mail.de"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">Thema</label>
                  <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600">
                    <option>Baufinanzierung</option>
                    <option>Kapitalanlage / Depot</option>
                    <option>Vorsorge & Absicherung</option>
                    <option>Immobilieninvestment</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600">Nachricht</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Kurze Beschreibung"
                  ></textarea>
                </div>
                <button type="submit" className="w-full rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium hover:opacity-90">
                  Anfrage senden
                </button>
                <p className="text-xs text-slate-500">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß Datenschutzerklärung zu.</p>
              </form>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-slate-600 text-sm">
              <li className="flex items-center gap-3">
                <MailIcon /> sebastian.penninger@example.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon /> +49 170 000000
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon /> Regensburg & Remote (DE)
              </li>
            </ul>
            <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-900">Hinweis zur Unabhängigkeit</p>
              <p>Ich arbeite provisionsfrei und honorarbasiert. Empfehlungen erfolgen ausschließlich im Interesse meiner Mandanten.</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

// --- Footer ---------------------------------
const Footer = () => (
  <footer className="border-t border-slate-200 bg-white">
    <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-content-center text-xs font-bold">SP</div>
        <span>© {new Date().getFullYear()} Sebastian Penninger</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#home" className="hover:text-slate-900">
          Impressum
        </a>
        <a href="#home" className="hover:text-slate-900">
          Datenschutz
        </a>
      </div>
    </Container>
  </footer>
);

// --- Icons (inline SVG, accessible) --------
const ShieldIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
);
const CheckIcon = () => (
  <svg className="mt-1 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5L20 6z" />
  </svg>
);
const DotIcon = () => (
  <svg className="mt-1 h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <circle cx="12" cy="12" r="6" />
  </svg>
);
const MailIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M3 5h18v14H3z" opacity=".2" />
    <path d="M21 7.5V19H3V7.5l9 6 9-6zM3 5h18v.5L12 12 3 5.5V5z" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.6 10.8c1.4 2.6 3.6 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.6.6 4 .6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.1l-2.1 2.1z" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

const TrustBadges = () => (
  <div className="flex flex-wrap items-center gap-4">
    <span className="inline-flex items-center gap-2 text-xs text-slate-600">
      <ShieldIcon /> unabhängig
    </span>
    <span className="inline-flex items-center gap-2 text-xs text-slate-600">
      <CheckIcon /> zertifiziert
    </span>
    <span className="inline-flex items-center gap-2 text-xs text-slate-600">
      <DotIcon /> DSGVO-konform
    </span>
  </div>
);

// --- App Root --------------------------------
export default function App() {
  useEffect(() => {
    // Smooth scroll for hash links
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
