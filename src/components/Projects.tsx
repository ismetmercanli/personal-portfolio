import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projeler" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Projeler
        </h2>
        <p className="mt-2 text-zinc-400">
          Üzerinde çalıştığım ve paylaştığım projeler.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700 hover:bg-zinc-800/50"
            >
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                  >
                    {t}
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
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                  >
                    Canlı Demo →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
