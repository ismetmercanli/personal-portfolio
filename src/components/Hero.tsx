import { site } from "@/data/content";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-14 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projeler"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-400"
          >
            Projelere Git
          </a>
          <a
            href="#iletisim"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            İletişim
          </a>
        </div>
      </div>
    </section>
  );
}
