import { projects } from "@/lib/constants";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/8 py-16 sm:py-24">
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-14">
        <SectionLabel index={projects.index}>{projects.label}</SectionLabel>
        <p className="m-0 max-w-[520px] font-head text-[26px] font-normal leading-[1.3] text-[#cfccc3]">
          {projects.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
