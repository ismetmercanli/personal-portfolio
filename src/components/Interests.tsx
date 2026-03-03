"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeInSection from "@/components/FadeInSection";
import {
  IconInterests,
  IconInterestSport,
  IconInterestFootball,
  IconInterestStrategy,
  IconInterestHistory,
} from "@/components/SectionIcons";

const interestIcons = [
  IconInterestSport,
  IconInterestFootball,
  IconInterestStrategy,
  IconInterestHistory,
];

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section id="ilgi-alanlari" className="scroll-mt-20 py-24 px-6">
      <FadeInSection>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <IconInterests />
            {t.interests.title}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.interests.items.map((item, i) => {
              const Icon = interestIcons[i] ?? IconInterestHistory;
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-500/50 hover:bg-zinc-800"
                >
                  <Icon />
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
