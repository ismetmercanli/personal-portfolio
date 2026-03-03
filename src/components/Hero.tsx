"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14 text-center">
      <div
        className="absolute inset-0 -z-10 bg-hero-gradient-animate"
        aria-hidden
      />
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gradient-animate">
          {t.site.name}
        </h1>
        <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
          {t.site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projeler"
            className="rounded-full bg-gradient-animate px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg shadow-emerald-500/25"
          >
            {t.ui.heroCtaProjects}
          </a>
          <a
            href="#iletisim"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/50 active:scale-100"
          >
            {t.ui.heroCtaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
