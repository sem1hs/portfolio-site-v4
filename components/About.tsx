import { about } from "@/lib/constants";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-8 border-t border-white/8 py-16 sm:py-24 md:grid-cols-[220px_1fr] md:gap-14"
    >
      <div>
        <SectionLabel index={about.index}>{about.label}</SectionLabel>
      </div>
      <div className="max-w-[620px]">
        <p className="m-0 mb-[26px] font-head text-[clamp(24px,3.2vw,32px)] font-normal leading-[1.35] text-[#e9e6df]">
          {about.lead.pre}
          <span className="italic text-accent">{about.lead.em}</span>
          {about.lead.post}
        </p>
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="m-0 mb-5 text-base leading-[1.8] text-muted text-pretty last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
