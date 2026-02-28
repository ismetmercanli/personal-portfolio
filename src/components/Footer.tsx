import { site } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>© {year} {site.name}. Tüm hakları saklıdır.</span>
        <div className="flex gap-6">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
