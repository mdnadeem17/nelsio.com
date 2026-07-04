import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Copy, Check, ArrowRight } from "lucide-react";
import nelsioLogoImg from "@/assets/nelsio-logo.png";
import mohammedImg from "@/assets/mohammed-nadeem.png";
import pavanImg from "@/assets/pavan-ug.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "ISryf9QA-Y9LA4oYboKZoZgGED28i1HkVWaXE4l8uyU" },
      { title: "NELSIO — Built to endure. Engineered to scale." },
      {
        name: "description",
        content:
          "NELSIO is the parent company behind CUTZO, IBZEN, and emerging technology initiatives — building software platforms and educational programs designed for long-term impact.",
      },
      { name: "keywords", content: "NELSIO, CUTZO, IBZEN, Mohammed Nadeem, Pavan UG, software platforms, technology incubator, parent company, startups India" },
      { property: "og:title", content: "NELSIO — Built to endure. Engineered to scale." },
      {
        property: "og:description",
        content: "Built for enduring purpose. The parent company behind CUTZO, IBZEN, and emerging technology initiatives.",
      },
      { property: "og:url", content: "https://nelsio.com" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://nelsio.com/nelsio-logo.png" },
    ],
  }),
  component: Index,
});

/* ─────────────────────────────────────────────────────────────
   Utilities
───────────────────────────────────────────────────────────── */

function useLogoFallback() {
  const [err, setErr] = useState(false);
  return [err, () => setErr(true)] as const;
}

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────────
   Logo variants
───────────────────────────────────────────────────────────── */

function NavLogo() {
  const [err, onErr] = useLogoFallback();
  return err ? (
    <span className="text-[18px] font-semibold tracking-[-0.04em] text-foreground lowercase">
      nelsio
    </span>
  ) : (
    <img
      src={nelsioLogoImg}
      alt="NELSIO"
      className="h-[65px] md:h-[80px] w-auto object-contain select-none mix-blend-multiply -my-4"
      onError={onErr}
    />
  );
}

function HeroWordmark() {
  const [err, onErr] = useLogoFallback();
  return err ? (
    <div
      className="w-full select-none"
      style={{ lineHeight: 0 }}
    >
      <span className="text-[22vw] font-semibold tracking-[-0.05em] leading-none text-foreground lowercase block">
        nelsio
      </span>
    </div>
  ) : (
    <div className="w-full flex justify-center items-center py-4 md:py-10 overflow-visible">
      <img
        src={nelsioLogoImg}
        alt="NELSIO"
        className="w-[250%] max-w-none h-auto object-contain mx-auto select-none block mix-blend-multiply"
        draggable={false}
        onError={onErr}
      />
    </div>
  );
}

function FooterLogo() {
  const [err, onErr] = useLogoFallback();
  return err ? (
    <span className="text-[16px] font-semibold tracking-[-0.04em] text-foreground lowercase">
      nelsio
    </span>
  ) : (
    <img src={nelsioLogoImg} alt="NELSIO" className="h-[50px] md:h-[60px] w-auto object-contain select-none mix-blend-multiply -my-3" onError={onErr} />
  );
}

/* ─────────────────────────────────────────────────────────────
   Navigation
───────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-nelsio flex items-center justify-between h-16">
        <a href="#top" aria-label="NELSIO home" className="transition-opacity hover:opacity-70">
          <NavLogo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-foreground/55 hover:text-foreground transition-colors duration-200 tracking-[0.01em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-[13px] font-medium text-foreground hover:text-foreground/60 transition-colors duration-200 tracking-[0.01em]"
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero — Full-screen institutional composition
───────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-transparent"
    >
      {/* ── Animated orb layer ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Orb 1 — soft neutral grey, top-left */}
        <div
          className="hero-orb-1 absolute rounded-full"
          style={{
            width: "900px",
            height: "900px",
            top: "-200px",
            left: "-180px",
            background:
              "radial-gradient(circle, rgba(235,235,240,0.8) 0%, rgba(220,220,225,0.4) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Orb 2 — muted slate grey cool tone, top-right */}
        <div
          className="hero-orb-2 absolute rounded-full"
          style={{
            width: "800px",
            height: "800px",
            top: "-100px",
            right: "-200px",
            background:
              "radial-gradient(circle, rgba(225,230,238,0.7) 0%, rgba(205,212,222,0.35) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Orb 3 — soft off-white mist, bottom-center */}
        <div
          className="hero-orb-3 absolute rounded-full"
          style={{
            width: "700px",
            height: "700px",
            bottom: "5%",
            left: "30%",
            background:
              "radial-gradient(circle, rgba(245,245,247,0.6) 0%, rgba(230,230,235,0.25) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Very faint noise texture for depth */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Top strip — tagline on right */}
      <div className="container-nelsio relative z-10 pt-20 md:pt-28 flex items-start justify-end">
        <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/35 select-none mt-1 hidden sm:block">
          Built for enduring purpose
        </p>
      </div>

      {/* Main content — statement left, wordmark fills right edge */}
      <div className="flex-1 flex items-end">
        <div className="container-nelsio relative z-10 w-full pb-0">
          {/* Statement headline */}
          <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-foreground max-w-[16ch] mb-12 md:mb-16">
            <span className="sr-only">NELSIO — </span>
            Some things
            <br />
            are worth{" "}
            <span className="text-foreground/38">building
            <br />slowly.</span>
          </h1>

          {/* Ruled divider with metadata */}
          <div className="border-t border-black/[0.08] pt-6 pb-0 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-foreground/50 max-w-[46ch]">
              NELSIO is the parent company behind our independent startups, platforms, and educational initiatives. We build technology and companies designed to last.
            </p>
            <a
              href="#about"
              className="shrink-0 text-[12px] uppercase tracking-[0.18em] text-foreground/40 hover:text-foreground transition-colors duration-200 pb-1"
            >
              Learn more ↓
            </a>
          </div>

          {/* Wordmark — full width, flush to bottom */}
          <div className="mt-10 md:mt-14 -mx-[clamp(1.25rem,4vw,3rem)] overflow-hidden">
            <HeroWordmark />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Fade-in wrapper
───────────────────────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section wrapper — consistent editorial spacing
───────────────────────────────────────────────────────────── */

function Section({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-28 md:py-40 border-t border-black/[0.07] ${className}`}>
      <div className="container-nelsio">
        {label && (
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-14 md:mb-20 select-none">
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   About — Institutional introduction
───────────────────────────────────────────────────────────── */

function About() {
  return (
    <Section id="about" label="About NELSIO">
      {/* Large anchor statement */}
      <Reveal>
        <h2 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.04em] text-foreground max-w-[22ch] mb-16 md:mb-20">
          Built to endure.
          <br />
          <span className="text-foreground/38">Engineered to scale.</span>
        </h2>
      </Reveal>

      {/* Three ruled paragraphs — editorial block structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[0.07]">
        {[
          {
            n: "01",
            text: "NELSIO is the unified parent company and developer identity housing our distinct platforms, applications, and educational initiatives under one roof.",
          },
          {
            n: "02",
            text: "From commercial platforms like CUTZO to youth initiatives like IBZEN, each operates with independent focus while sharing our rigorous engineering standard.",
          },
          {
            n: "03",
            text: "We are not built to optimize for quarters. We are built to be measured in decades. That distinction shapes every decision we make.",
            accent: true,
          },
        ].map((item, i) => (
          <Reveal key={item.n} delay={i * 80}>
            <div className="pt-8 pb-10 pr-0 md:pr-12 border-b border-black/[0.07] md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/28 mb-5">
                {item.n}
              </p>
              <p
                className={`text-[16px] leading-[1.8] ${
                  item.accent
                    ? "text-foreground font-medium"
                    : "text-foreground/55"
                }`}
              >
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Founders — editorial profile
───────────────────────────────────────────────────────────── */

// TODO: Replace with founder-approved direct quotes before launch.
// TODO: Verify exact official leadership titles (e.g., Co-Founder, Partner, Director) with Mohammed Nadeem and Pavan UG prior to public release.
const FOUNDERS = [
  {
    name: "Mohammed Nadeem",
    role: "Co-Founder",
    bio: "Focused on strategic vision, long-term direction, and building the roadmap across NELSIO's platforms.",
    img: mohammedImg,
  },
  {
    name: "Pavan UG",
    role: "Co-Founder",
    bio: "Focused on software architecture, technical infrastructure, and engineering execution across all NELSIO platforms.",
    img: pavanImg,
  },
];

function Founders() {
  return (
    <Section id="founders" label="Leadership">
      <Reveal>
        <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground mb-16 md:mb-24 max-w-[24ch]">
          Guided by conviction.
          <br />
          <span className="text-foreground/40">Building for decades.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[880px]">
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.name} delay={i * 100}>
            <div className="flex flex-col gap-7">
              {/* Portrait */}
              <div className="relative w-full aspect-[3/4] rounded overflow-hidden max-w-[300px] bg-[oklch(0.96_0_0)]">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Profile text */}
              <div className="space-y-4">
                <div className="border-t border-black/[0.07] pt-5">
                  <p className="text-[17px] font-medium text-foreground tracking-[-0.02em]">
                    {f.name}
                  </p>
                  <p className="text-[12px] text-foreground/40 mt-1 uppercase tracking-[0.14em]">
                    {f.role}
                  </p>
                </div>
                <p className="text-[15px] leading-[1.8] text-foreground/55">
                  {f.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Mission & Vision — two distinct short blocks
───────────────────────────────────────────────────────────── */

function MissionVision() {
  return (
    <Section id="vision" label="Mission & Vision">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[0.07]">
        {/* Mission */}
        <Reveal>
          <div className="pt-10 pb-14 pr-0 md:pr-16 md:border-r border-black/[0.07]">
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/30 mb-5">
              Mission
            </p>
            <h2 className="text-[clamp(1.6rem,2.5vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-foreground mb-5">
              To build, scale, and endure.
            </h2>
            <p className="text-[16px] leading-[1.8] text-foreground/55 max-w-[42ch]">
              NELSIO exists as the parent company created to design, build, and support our software applications and youth initiatives — giving each startup the dedicated engineering and time it needs to scale.
            </p>
          </div>
        </Reveal>

        {/* Vision */}
        <Reveal delay={80}>
          <div className="pt-10 pb-14 pl-0 md:pl-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/30 mb-5">
              Vision
            </p>
            <h2 className="text-[clamp(1.6rem,2.5vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-foreground mb-5">
              Platforms built to compound value.
            </h2>
            <p className="text-[16px] leading-[1.8] text-foreground/55 max-w-[42ch]">
              A generation from now, the engineering quality and utility of our platforms will be our enduring legacy. We build toward permanence rather than short-term trends.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Portfolio & Ventures
───────────────────────────────────────────────────────────── */

const COMPANIES = [
  {
    name: "CUTZO",
    relationship: "Flagship Startup",
    sector: "Commerce & Services",
    tagline: "Smart appointments and queue management for salons.",
    summary:
      "Book nearby salons, join virtual queues, and eliminate waiting — while salon owners manage walk-ins and bookings from one dashboard.",
  },
  {
    name: "IBZEN",
    relationship: "Youth Initiative",
    sector: "Youth Innovation & Career Education",
    tagline: "Two-day workshops that change how school students see the future.",
    summary:
      "Immersive sessions in technology, engineering, and financial literacy — connecting students with mentors and real-world career exposure.",
  },
  {
    name: "Apna Look",
    relationship: "Startup Concept",
    sector: "AI & Fashion-Tech",
    tagline: "AI-powered outfit recommendations tailored to you.",
    summary:
      "A concept exploring personalised style based on body type, skin tone, budget, and preference — combining innovations from multiple brands into complete looks.",
  },
];

function Companies() {
  return (
    <Section id="ecosystem" label="Ecosystem & Initiatives">
      <Reveal>
        <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground mb-4 max-w-[22ch]">
          Distinct platforms.
          <br />
          <span className="text-foreground/40">One shared standard.</span>
        </h2>
        <p className="text-[16px] leading-[1.75] text-foreground/50 max-w-[50ch] mb-16 md:mb-24">
          Every platform and initiative within our group operates with dedicated purpose — united by uncompromising engineering quality and long-term commitment.
        </p>
      </Reveal>

      <div className="space-y-0 border-t border-black/[0.07]">
        {COMPANIES.map((c, i) => (
          <Reveal key={c.name} delay={i * 40}>
            <div className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-9 md:py-12 border-b border-black/[0.07] -mx-6 px-6">
              {/* Venture name */}
              <div className="md:w-56 shrink-0">
                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.04em] text-foreground leading-none">
                  {c.name}
                </h3>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] border border-black/[0.12] text-foreground/70 rounded">
                    {c.relationship}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-foreground/35">
                    {c.sector}
                  </span>
                </div>
                <p className="text-[15px] font-medium text-foreground/80 mb-1.5 tracking-[-0.01em]">
                  {c.tagline}
                </p>
                <p className="text-[14px] leading-[1.7] text-foreground/45 max-w-[52ch]">
                  {c.summary}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 self-center">
                <span className="inline-flex items-center gap-1.5 text-[12px] text-foreground/30 group-hover:text-foreground transition-colors duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Philosophy — editorial principle blocks
───────────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    n: "I",
    title: "Think beyond generations.",
    body: "Short-term gains are not our objective. We dedicate time and patience to things that compound: knowledge, reputation, and quality of work.",
  },
  {
    n: "II",
    title: "Pursue excellence without compromise.",
    body: "There are no acceptable shortcuts in work we put our name to. The standard does not move. It only rises.",
  },
  {
    n: "III",
    title: "Move with intention.",
    body: "Deliberate action outperforms reactive speed. We think carefully before we commit, and we commit fully once we do.",
  },
  {
    n: "IV",
    title: "Respect the craft.",
    body: "Whether it is a startup, a software platform, or a sentence: it deserves care. Craftsmanship is not optional. It is the baseline.",
  },
  {
    n: "V",
    title: "Create lasting value.",
    body: "We measure success not by what we launch, but by what remains, and whether it continues to serve those who depend on it.",
  },
];

function Philosophy() {
  return (
    <Section id="philosophy" label="Philosophy" className="bg-foreground text-background">
      <Reveal>
        <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-background mb-16 md:mb-24 max-w-[22ch]">
          The principles that
          <br />
          guide everything.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/10">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.n} delay={i * 60}>
            <div className="py-10 pr-8 border-b border-white/10 md:border-r md:border-white/10">
              <p className="text-[12px] font-medium text-background/30 uppercase tracking-[0.2em] mb-5">
                {p.n}
              </p>
              <h3 className="text-[17px] font-medium text-background tracking-[-0.02em] mb-3 leading-[1.35]">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-background/50">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Governance nod
───────────────────────────────────────────────────────────── */

function Governance() {
  return (
    <Section id="governance" label="How we operate">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[0.07]">
        {[
          {
            n: "01",
            label: "Standard",
            body: "Every application or platform published under the NELSIO name is held to rigorous engineering and design standards before release.",
          },
          {
            n: "02",
            label: "Accountability",
            body: "As the parent company and publisher, we take full responsibility for our software security, reliability, and user trust.",
          },
          {
            n: "03",
            label: "Transparency",
            body: "We maintain clear operational separation between our software platforms and educational initiatives under our parent identity.",
          },
        ].map((item, i) => (
          <Reveal key={item.n} delay={i * 70}>
            <div className="pt-8 pb-10 pr-0 md:pr-12 border-b border-black/[0.07] md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/28 mb-4">
                {item.n} — {item.label}
              </p>
              <p className="text-[15px] leading-[1.8] text-foreground/55">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Looking Forward
───────────────────────────────────────────────────────────── */

function LookingForward() {
  return (
    <Section id="forward" label="Looking Forward">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <Reveal className="md:col-span-5">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground">
            Quietly building
            <br />
            what endures.
          </h2>
        </Reveal>

        <Reveal delay={100} className="md:col-span-6 md:col-start-7">
          <div className="space-y-6 text-[17px] leading-[1.8] text-foreground/55">
            <p>
              We are in the early chapters of a much longer story. NELSIO has
              not set out to grow quickly, nor to accumulate. We have set out to
              do good work, the kind that accumulates quietly into something
              worthy of the time it took.
            </p>
            <p>
              Future developments are crafted with deliberate care rather than artificial deadlines. Every platform launched under our parent organization carries our enduring standard of engineering and utility.
            </p>
            <p className="text-foreground/80 font-medium text-[16px]">
              There is no urgency here. Only intention.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Closing statement
───────────────────────────────────────────────────────────── */

function Closing() {
  return (
    <section className="py-28 md:py-44 border-t border-black/[0.07] bg-[oklch(0.985_0_0)]">
      <div className="container-nelsio">
        <Reveal>
          <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.15] tracking-[-0.04em] text-foreground max-w-[22ch]">
            "Enduring value is not announced.
            <br />
            <span className="text-foreground/40">It is proven over time."</span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-[13px] uppercase tracking-[0.18em] text-foreground/35">
            NELSIO
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Contact
───────────────────────────────────────────────────────────── */

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="group flex items-center justify-between py-5 border-b border-black/[0.07] cursor-pointer" onClick={copy}>
      <a
        href={`mailto:${email}`}
        onClick={(e) => e.stopPropagation()}
        className="text-[17px] md:text-[19px] font-normal text-foreground hover:text-foreground/60 transition-colors tracking-[-0.01em]"
      >
        {email}
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground transition-colors"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-green-600" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <Reveal className="md:col-span-5">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.14] tracking-[-0.035em] text-foreground">
            We are
            <br />
            listening.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-foreground/50 max-w-[38ch]">
            If what we stand for resonates with you, we would be glad to hear from you.
          </p>

          <div className="mt-10 border-t border-black/[0.07] pt-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-1">
              Headquarters
            </p>
            <p className="text-[15px] text-foreground/70 font-medium">
              Bengaluru, India
            </p>
            <p className="text-[13px] text-foreground/45 mt-0.5">
              Operating globally across software platforms and youth initiatives.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-5 md:col-start-7">
          {/* TODO: Verify live MX records and active mailboxes for hello@nelsio.com before public release */}
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-2">
            General
          </p>
          <CopyEmail email="hello@nelsio.com" />

          {/* TODO: Verify live MX records and active mailboxes for ventures@nelsio.com before public release */}
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-2 mt-8">
            Ecosystem & Initiatives
          </p>
          <CopyEmail email="ventures@nelsio.com" />
        </Reveal>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-black/[0.07] py-12">
      <div className="container-nelsio">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <FooterLogo />
            <p className="text-[13px] text-foreground/40 max-w-[28ch] leading-[1.7]">
              The parent company behind our software platforms and youth initiatives.
            </p>
          </div>

          {/* Ventures list */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-4">
              Ecosystem & Initiatives
            </p>
            <ul className="space-y-2.5">
              {COMPANIES.map((c) => (
                <li key={c.name}>
                  <a
                    href="#ecosystem"
                    className="text-[13px] text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-foreground/25">
                      {c.relationship}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-1.5">
              Navigation
            </p>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-foreground/50 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* TODO: Verify LinkedIn organization page (https://www.linkedin.com/company/nelsio/) is live before launch */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-1.5">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/company/nelsio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[13px] text-foreground/50 hover:text-foreground transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/letter"
              className="text-[13px] text-foreground/50 hover:text-foreground transition-colors"
            >
              Founders' Letter
            </Link>
          </div>
        </div>

        {/* Bottom row — Legal & Jurisdiction */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.06] pt-8">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <p className="text-[12px] text-foreground/35">
              © {new Date().getFullYear()} NELSIO. All rights reserved.
            </p>
            {/* TODO: Create and link active Privacy Policy and Terms of Service pages before public launch */}
            <a href="#privacy" className="text-[12px] text-foreground/35 hover:text-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[12px] text-foreground/35 hover:text-foreground/70 transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-[12px] text-foreground/35">
            <span>Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   Root
───────────────────────────────────────────────────────────── */

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NELSIO",
    description:
      "The parent company behind CUTZO, IBZEN, and emerging technology initiatives.",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    url: "https://nelsio.com",
    sameAs: ["https://www.linkedin.com/company/nelsio/"],
  };

  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-foreground selection:text-white antialiased relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Global Architectural Texture ("Like grid in the background not the grid") ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-dot-grid opacity-75"
      />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Founders />
          <MissionVision />
          <Companies />
          <Philosophy />
          <Governance />
          <LookingForward />
          <Closing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
