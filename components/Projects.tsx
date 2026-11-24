import { projects } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { toSlug } from "@/lib/slug";

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <SectionTitle index={projects.index}>projeler</SectionTitle>
      <div className="grid gap-3 md:grid-cols-2">
        {projects.items.map((p, i) => (
          <Reveal key={p.num} delay={(i % 2) * 80} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-line bg-panel px-5 py-5 transition-colors hover:border-line-2 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="m-0 text-[15px] font-bold text-fg">
                  <span className="text-dim">~/</span>
                  {toSlug(p.title)}
                </h3>
                {p.featured ? (
                  <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[11px] text-accent">● canlı</span>
                ) : null}
              </div>
              <p className="m-0 mt-1 text-[12.5px] text-accent-2">{p.subtitle}</p>
              <p className="m-0 mt-3 flex-1 text-[13.5px] leading-[1.75]">{p.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="m-0 text-[12.5px] text-accent">{p.tags.map(toSlug).join(" ")}</p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-fg underline decoration-line-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {p.linkLabel?.toLowerCase() ?? "aç"} ↗
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
