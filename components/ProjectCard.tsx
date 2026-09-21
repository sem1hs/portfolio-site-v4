import type { Project } from "@/lib/constants";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex flex-col border border-white/10 bg-white/[0.015] px-7 pt-[30px] pb-7">
      <span className="font-mono text-xs tracking-[0.08em] text-accent">
        {project.num}
      </span>
      <h3 className="mt-4 mb-3 font-head text-[27px] font-medium leading-[1.2] text-[#f0ede6]">
        {project.title}
      </h3>
      <p className="m-0 mb-6 flex-1 text-[14.5px] leading-[1.7] text-subtle text-pretty">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-white/[0.12] px-[10px] py-[5px] font-mono text-[11px] text-dim"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link mt-5 inline-block font-mono text-[12px] tracking-[0.04em] text-accent no-underline"
        >
          Projeyi Gör
        </a>
      ) : null}
    </article>
  );
}
