"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/data/translations";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href="#"
          className="font-display text-lg font-semibold text-gradient-animate transition hover:opacity-90"
        >
          {t.site.name}
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {t.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex rounded-lg border border-zinc-700 bg-zinc-800/50 p-0.5">
            {(["tr", "en"] as Locale[]).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocale(loc)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  locale === loc
                    ? "bg-gradient-animate text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-label={loc === "tr" ? "Türkçe" : "English"}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
