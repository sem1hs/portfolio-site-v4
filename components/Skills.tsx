import { skills } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <SectionTitle index={skills.index}>yetenekler</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.groups.map((g, i) => (
          <Reveal key={g.key} delay={(i % 2) * 80} className="h-full">
            <article className="h-full rounded-lg border border-line bg-panel px-5 py-5 sm:px-6">
              <h3 className="m-0 text-[14px] font-bold text-fg">
                <span className="text-accent">›</span> {g.title}
              </h3>
              <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-bg px-2.5 py-1 text-[13px] text-fg transition-colors hover:border-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
