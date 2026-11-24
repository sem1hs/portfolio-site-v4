import { experience } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { toSlug } from "@/lib/slug";

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <SectionTitle index={experience.index}>deneyim</SectionTitle>
      <div className="space-y-3">
        {experience.items.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 70}>
            <article className="rounded-lg border border-line bg-panel px-5 py-5 transition-colors hover:border-line-2 sm:px-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="m-0 text-[15px] font-bold text-fg">
                  {job.role} <span className="text-accent-2">@ {job.company}</span>
                </h3>
                <span className="text-[12.5px] text-dim">{job.period}</span>
              </div>
              <ul className="m-0 mt-3 list-none space-y-2 p-0 text-[14px] leading-[1.75]">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-accent">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="m-0 mt-4 text-[12.5px] text-accent">{job.tech.map(toSlug).join(" ")}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
