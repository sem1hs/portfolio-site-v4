import { about } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <SectionTitle index={about.index}>hakkimda</SectionTitle>
      <Reveal>
        <p className="m-0 text-[17px] leading-[1.6] font-bold text-fg">{about.heading}</p>
        {about.paragraphs.map((p) => (
          <p key={p} className="m-0 mt-4 max-w-[760px] text-[14.5px] leading-[1.85]">
            {p}
          </p>
        ))}
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-lg border border-line bg-panel px-4 py-4">
              <div className="text-[28px] leading-none font-bold text-fg">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-2 text-[12px] text-dim">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
