import { Reveal } from "@/components/Reveal";

export function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="m-0 mb-6 flex items-center gap-3 text-[15px] font-bold text-fg">
        <span className="text-accent">{index}.</span>
        {children}
        <span className="h-px flex-1 bg-line" />
      </h2>
    </Reveal>
  );
}
