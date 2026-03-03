"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>
          © {year} {t.site.name}. {t.ui.footerRights}
        </span>
        <div className="flex gap-6">
          <a
            href={t.site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-300"
          >
            {t.ui.github}
          </a>
          <a
            href={t.site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <a
            href={t.site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
