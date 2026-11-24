import { contact, site } from "@/lib/constants";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <SectionTitle index={contact.index}>iletisim</SectionTitle>
      <Reveal>
        <div className="rounded-lg border border-line bg-panel px-5 py-8 sm:px-8 sm:py-10">
          <p className="m-0 text-[14px] text-accent">$ echo $MESAJ</p>
          <p className="m-0 mt-3 text-[clamp(22px,3.4vw,32px)] leading-[1.25] font-bold text-fg">{contact.heading}</p>
          <p className="m-0 mt-3 max-w-[560px] text-[14.5px] leading-[1.8]">{contact.text}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-[13.5px]">
            <a
              href={`mailto:${site.email}`}
              className="rounded-md border border-accent bg-accent px-4 py-2.5 font-bold text-bg transition-opacity hover:opacity-85"
            >
              mail
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2.5 text-fg transition-colors hover:border-accent"
            >
              linkedin ↗
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2.5 text-fg transition-colors hover:border-accent"
            >
              github ↗
            </a>
          </div>
          <p className="m-0 mt-6 text-[13px]">
            <span className="text-dim">email=</span>
            <span className="text-string">&quot;{site.email}&quot;</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
