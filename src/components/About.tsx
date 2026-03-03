"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeInSection from "@/components/FadeInSection";
import { IconAbout } from "@/components/SectionIcons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="hakkimda" className="scroll-mt-20 py-24 px-6">
      <FadeInSection>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <IconAbout />
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
