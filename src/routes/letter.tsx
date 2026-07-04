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
  return (
    <div className="min-h-screen bg-white text-foreground antialiased">
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

        {/* TODO: Replace this placeholder content with the actual founders' letter before launch. */}
        <div className="space-y-8 text-[17px] leading-[1.9] text-foreground/65 border-t border-black/[0.07] pt-12">
          <p>
            [This page will contain a direct letter from Mohammed Nadeem and
            Pavan UG — in their own words — on the founding purpose of NELSIO,
            the standard it holds itself to, and what they intend to build over
            the coming years.]
          </p>
          <p className="text-foreground/35 italic text-[14px]">
            — Founders' letter coming soon.
          </p>
        </div>

        {/* Founder bylines */}
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
            <div key={f.name} className="flex items-center gap-4">
              <img
                src={f.img}
                alt={f.name}
                className="h-12 w-12 rounded-full object-cover object-top grayscale"
              />
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
