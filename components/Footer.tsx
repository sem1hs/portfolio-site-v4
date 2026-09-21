import { site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-3 border-t border-white/[0.06] pt-[26px] pb-10">
      <span className="font-mono text-[11px] tracking-[0.06em] text-faint">
        © {new Date().getFullYear()} {site.nameShort}
      </span>
      <span className="font-mono text-[11px] tracking-[0.06em] text-faint">
        {site.role}
      </span>
    </footer>
  );
}
