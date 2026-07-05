import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import mohammedImg from "@/assets/mohammed-nadeem.png";
import pavanImg from "@/assets/pavan-ug.png";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter from our Founders — NELSIO" },
      {
        name: "description",
        content:
          "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to.",
      },
      { name: "keywords", content: "NELSIO founders, Mohammed Nadeem founder of NELSIO, Pavan UG founder of NELSIO, Founders Letter, CUTZO, IBZEN, parent company, startups India" },
      { property: "og:title", content: "A Letter from our Founders — NELSIO" },
      {
        property: "og:description",
        content: "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to.",
      },
      { property: "og:url", content: "https://nelsio.com/letter" },
      { name: "twitter:title", content: "A Letter from our Founders — NELSIO" },
      {
        name: "twitter:description",
        content: "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to.",
      },
    ],
  }),
  component: FoundersLetter,
});

function FoundersLetter() {
  const letterSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://nelsio.com/letter#webpage",
    "url": "https://nelsio.com/letter",
    "name": "A Letter from our Founders — NELSIO",
    "description": "A direct note from Mohammed Nadeem and Pavan UG on why NELSIO exists, what it is built to become, and the standard it holds itself to.",
    "about": [
      {
        "@type": "Person",
        "@id": "https://nelsio.com/#mohammed-nadeem",
        "name": "Mohammed Nadeem",
        "jobTitle": "Co-Founder of NELSIO"
      },
      {
        "@type": "Person",
        "@id": "https://nelsio.com/#pavan-ug",
        "name": "Pavan UG",
        "jobTitle": "Co-Founder of NELSIO"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "@id": "https://nelsio.com/#organization",
      "name": "NELSIO",
      "url": "https://nelsio.com"
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(letterSchema) }}
      />
      {/* Nav bar */}
      <header className="border-b border-black/[0.07] sticky top-0 bg-white/95 backdrop-blur-xl z-50">
        <div className="container-nelsio flex items-center h-16 gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-foreground/50 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            NELSIO
          </Link>
        </div>
      </header>

      {/* Letter content */}
      <main className="container-nelsio py-24 md:py-36 max-w-[720px]">
        {/* Label */}
        <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/35 mb-14">
          A letter from our Founders
        </p>

        {/* Heading */}
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.04em] leading-[1.1] text-foreground mb-16">
          Why we built this,
          <br />
          <span className="text-foreground/40">and what we intend to build.</span>
        </h1>

        {/* Copy for search indexing and AI chatbot query retrieval */}
        <div className="space-y-8 text-[17px] leading-[1.9] text-foreground/65 border-t border-black/[0.07] pt-12">
          <p>
            NELSIO was co-founded in 2025 by Mohammed Nadeem and Pavan UG with a singular, driving conviction: to build technology platforms, independent startups, and educational initiatives designed to endure.
          </p>
          <p>
            We live in a world of transient software and quick exits. At NELSIO, we take the opposite path. We believe that true engineering excellence is measured not by how fast we can scale, but by how long our systems can scale and how deeply they impact the communities they serve. This philosophy guides our primary initiatives: CUTZO, which refines appointments and queue management, and IBZEN, which focuses on career education and empowering youth innovation.
          </p>
          <p>
            As founders, our responsibility is to establish a standard of engineering and operational rigor that acts as the foundation for everything we build. We design our platforms with clean code, robust architectures, and user experiences that speak for themselves. We believe that technology should be transparent, secure, and built to solve real-world problems.
          </p>
          <p>
            This letter is our commitment to our users, our partners, and the future developers who will carry our code forward. We are building for the long-term, and we are just getting started.
          </p>
          <p className="text-foreground/45 italic text-[14px]">
            — Mohammed Nadeem & Pavan UG, Co-Founders of NELSIO
          </p>
        </div>

        {/* Founder bylines with ImageObject microdata */}
        <div className="mt-20 border-t border-black/[0.07] pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            {
              name: "Mohammed Nadeem",
              role: "Co-Founder, NELSIO",
              img: mohammedImg,
            },
            {
              name: "Pavan UG",
              role: "Co-Founder, NELSIO",
              img: pavanImg,
            },
          ].map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-4"
              itemScope
              itemType="https://schema.org/Person"
            >
              <meta itemProp="name" content={f.name} />
              <meta itemProp="jobTitle" content={f.role} />
              <figure
                itemScope
                itemType="https://schema.org/ImageObject"
                className="m-0 h-12 w-12 rounded-full overflow-hidden bg-[oklch(0.96_0_0)]"
              >
                <img
                  itemProp="contentUrl"
                  src={f.img}
                  alt={`${f.name} — ${f.role} & Founder of NELSIO`}
                  title={`${f.name} — ${f.role} of NELSIO`}
                  className="h-full w-full object-cover object-top grayscale"
                />
                <meta itemProp="name" content={`${f.name} — Co-Founder of NELSIO`} />
              </figure>
              <div>
                <p className="text-[15px] font-medium text-foreground tracking-[-0.02em]">
                  {f.name}
                </p>
                <p className="text-[12px] text-foreground/40 uppercase tracking-[0.12em] mt-0.5">
                  {f.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
