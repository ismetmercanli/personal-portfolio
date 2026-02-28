import { site } from "@/data/content";

export default function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          İletişim
        </h2>
        <p className="mt-4 text-zinc-400">
          Bir fikriniz veya iş birliği talebiniz varsa benimle iletişime geçebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-400"
          >
            E-posta Gönder
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
