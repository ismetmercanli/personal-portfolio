"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeInSection from "@/components/FadeInSection";
import { IconEducation } from "@/components/SectionIcons";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="egitim" className="scroll-mt-20 py-24 px-6">
      <FadeInSection>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <IconEducation />
            {t.education.title}
          </h2>
          <ul className="mt-6 space-y-6">
            {t.education.items.map((item, i) => (
              <li
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700"
              >
                <p className="font-display font-semibold text-white">
                  {item.school}
                </p>
                <p className="mt-1 text-zinc-400">{item.degree}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0 text-sm text-zinc-500">
                  {item.location && <span>{item.location}</span>}
                  {item.period && <span>{item.period}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
