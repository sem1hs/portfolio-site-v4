import { nav, site } from "@/lib/constants";

export function Nav() {
  return (
    <nav className="flex flex-col gap-4 border-b border-white/8 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
      <a
        href="#top"
        className="font-mono text-[13px] uppercase tracking-[0.14em] text-fg no-underline"
      >
        {site.nameShort}
        <span className="text-accent">.</span>
      </a>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-[34px]">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link font-mono text-xs tracking-[0.06em] text-subtle"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
