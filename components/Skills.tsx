import { skills } from "@/lib/constants";
import { SectionLabel } from "@/components/SectionLabel";

export function Skills() {
  return (
    <section
      id="skills"
      className="grid grid-cols-1 gap-8 border-t border-white/8 py-16 sm:py-24 md:grid-cols-[220px_1fr] md:gap-14"
    >
      <div>
        <SectionLabel index={skills.index}>{skills.label}</SectionLabel>
      </div>
      <div>
        <ul className="flex max-w-[640px] list-none flex-wrap gap-3 p-0">
          {skills.items.map((item) => (
            <li
              key={item}
              className="badge border border-white/[0.14] px-[18px] py-[10px] font-mono text-[13px] text-[#c9c6bd]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-[520px] text-[15px] leading-[1.7] text-dim">
          {skills.note}
        </p>
      </div>
    </section>
  );
}
