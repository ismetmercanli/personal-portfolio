"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeInSection from "@/components/FadeInSection";
import { IconContact, IconMail, IconGithub, IconLinkedin, IconInstagram } from "@/components/SectionIcons";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="iletisim" className="scroll-mt-20 py-24 px-6">
      <FadeInSection>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display flex items-center justify-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <IconContact />
            {t.ui.contactTitle}
          </h2>
          <p className="mt-4 text-zinc-400">{t.ui.contactSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${t.site.email}`}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-animate px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-100 shadow-lg shadow-emerald-500/25"
            >
              <IconMail />
              {t.ui.sendEmail}
            </a>
            <a
              href={t.site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/50 active:scale-100"
            >
              <IconGithub />
              {t.ui.github}
            </a>
            <a
              href={t.site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/50 active:scale-100"
            >
              <IconLinkedin />
              LinkedIn
            </a>
            <a
              href={t.site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/50 active:scale-100"
            >
              <IconInstagram />
              Instagram
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
