import { hero, site } from "@/lib/constants";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function Hero() {
  return (
    <header id="top" className="max-w-[840px] pt-20 pb-24 sm:pt-[132px] sm:pb-[128px]">
      <div className="mb-[30px] flex items-center gap-[14px]">
        <span className="h-px w-[34px] bg-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          {hero.label}
        </span>
      </div>

      <h1 className="m-0 font-head text-[clamp(44px,7.2vw,88px)] font-medium leading-[1.03] tracking-[-0.01em] text-heading">
        {hero.title.line1}
        <br />
        <span className="italic text-[#cfcbc1]">{hero.title.emphasis}</span>
      </h1>

      <p className="mt-[34px] max-w-[600px] text-[clamp(16px,2vw,19px)] leading-[1.7] text-muted text-pretty">
        {hero.lede}
      </p>

      <div className="mt-[44px] flex flex-wrap gap-4">
        <a
          className="btn btn-primary inline-flex items-center gap-[10px] border border-accent px-6 py-[13px] font-mono text-[13px] tracking-[0.04em] text-accent no-underline"
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          className="btn btn-ghost inline-flex items-center gap-[10px] border border-white/[0.18] px-6 py-[13px] font-mono text-[13px] tracking-[0.04em] text-[#c9c6bd] no-underline"
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
