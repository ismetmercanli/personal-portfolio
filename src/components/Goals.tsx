import { goals } from "@/data/content";

export default function Goals() {
  return (
    <section id="hedefler" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {goals.title}
        </h2>
        <ul className="mt-6 space-y-3">
          {goals.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-zinc-400 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-emerald-500 before:content-['']"
            >
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
