import { about } from "@/data/content";

export default function About() {
  return (
    <section id="hakkimda" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
