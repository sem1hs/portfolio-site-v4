import { contact, site } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/8 pt-24 pb-28 text-center sm:pt-[120px] sm:pb-[140px]"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {contact.index} — {contact.label}
      </span>
      <h2 className="mt-[26px] mb-0 font-head text-[clamp(36px,6vw,64px)] font-medium leading-[1.1] text-heading">
        {contact.heading}
      </h2>
      <p className="mx-auto mt-6 mb-10 max-w-[460px] text-[17px] leading-[1.7] text-muted text-pretty">
        {contact.text}
      </p>
      <a
        className="btn btn-primary inline-flex items-center gap-[10px] border border-accent px-[30px] py-[15px] font-mono text-sm tracking-[0.04em] text-accent no-underline"
        href={`mailto:${site.email}`}
      >
        {site.email}
      </a>
      <div className="mt-[52px] flex justify-center gap-[30px]">
        <a
          className="contact-link font-mono text-xs tracking-[0.06em] text-dim no-underline"
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="contact-link font-mono text-xs tracking-[0.06em] text-dim no-underline"
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
