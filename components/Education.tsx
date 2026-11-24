import { education } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

export function Education() {
  const { school, certificates } = education;
  const max = Math.max(...certificates.map((c) => c.hours));

  return (
    <section id="education" className="py-12 sm:py-16">
      <SectionTitle index={education.index}>egitim</SectionTitle>
      <div className="grid gap-3 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="h-full rounded-lg border border-line bg-panel px-5 py-5 sm:px-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="m-0 text-[15px] font-bold text-fg">{school.name}</h3>
              <span className="text-[12.5px] text-dim">{school.period}</span>
            </div>
            <p className="m-0 mt-1 text-[13px] text-accent-2">{school.degree}</p>
            <p className="m-0 mt-4 text-[12px] text-dim">{"// ilgili dersler"}</p>
            <ul className="m-0 mt-2 list-none space-y-1.5 p-0 text-[13.5px]">
              {school.courses.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="text-accent">›</span>
                  {c}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={80} className="h-full">
          <article className="h-full rounded-lg border border-line bg-panel px-5 py-5 sm:px-6">
            <h3 className="m-0 text-[15px] font-bold text-fg">sertifikalar</h3>
            <ul className="m-0 mt-4 list-none space-y-4 p-0">
              {certificates.map((c) => (
                <li key={c.name}>
                  <div className="flex items-baseline justify-between gap-3 text-[13.5px]">
                    <span className="text-fg">{c.name}</span>
                    <span className="shrink-0 text-[12px] text-accent">{c.hours}h</span>
                  </div>
                  <p className="m-0 text-[12px] text-dim">{c.org}</p>
                  <div className="mt-1.5 h-[3px] rounded-full bg-line">
                    <div className="bar h-full rounded-full bg-accent" style={{ width: `${(c.hours / max) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
