"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeInSection from "@/components/FadeInSection";
import { IconProjects } from "@/components/SectionIcons";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projeler" className="scroll-mt-20 py-24 px-6">
      <FadeInSection>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <IconProjects />
            {t.ui.projectsTitle}
          </h2>
          <p className="mt-2 text-zinc-400">{t.ui.projectsSubtitle}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.projects.map((project) => (
              <li
                key={project.id}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      {t.ui.github} →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      {t.ui.liveDemo} →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
