import type { CSSProperties } from "react";
import { hero, site } from "@/lib/constants";
import { Typewriter } from "@/components/Typewriter";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="appear m-0 text-[14px] text-accent" style={d(0)}>
        $ whoami
      </p>
      <h1
        className="appear m-0 mt-4 text-[clamp(36px,6vw,60px)] leading-[1.1] font-bold tracking-[-0.02em] text-fg"
        style={d(150)}
      >
        {site.name}
      </h1>
      <p className="appear m-0 mt-4 min-h-[1.6em] text-[clamp(15px,2vw,18px)] text-accent-2" style={d(300)}>
        &gt; <Typewriter words={hero.roles} />
      </p>
      <p className="appear m-0 mt-6 max-w-[640px] text-[14.5px] leading-[1.8]" style={d(450)}>
        {hero.lede}
      </p>

      <div className="appear mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[13px]" style={d(550)}>
        {hero.facts.map((f) => (
          <span key={f.k}>
            <span className="text-dim">{f.k.toLowerCase()}=</span>
            <span className="text-string">&quot;{f.v}&quot;</span>
          </span>
        ))}
      </div>

      <div className="appear mt-9 flex flex-wrap gap-3 text-[13.5px]" style={d(700)}>
        <a
          href="#projects"
          className="rounded-md border border-accent bg-accent px-4 py-2.5 font-bold text-bg transition-opacity hover:opacity-85"
        >
          projeleri_gör()
        </a>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-fg transition-colors hover:border-accent"
        >
          <GitHubIcon /> github ↗
        </a>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-fg transition-colors hover:border-accent"
        >
          <LinkedInIcon /> linkedin ↗
        </a>
      </div>

      <p className="appear m-0 mt-10 flex items-center gap-2 text-[12.5px]" style={d(850)}>
        <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/15" />
        <span className="text-fg">{hero.status}</span>
      </p>
    </section>
  );
}
