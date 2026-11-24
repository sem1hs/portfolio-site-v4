"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/constants";

export function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-5 py-4 sm:px-7">
        <a href="#top" className="text-[14px] font-bold text-fg">
          semih<span className="text-accent">@</span>sahinoglu<span className="text-dim">:</span>
          <span className="text-accent-2">~</span>
          <span className="text-dim">$</span>
        </a>

        <nav className="hidden gap-6 text-[13.5px] md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`transition-colors hover:text-accent ${active === n.href ? "text-accent" : ""}`}
            >
              {n.cmd}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menü"
          className="rounded-md border border-line px-2.5 py-1 text-[13px] text-fg md:hidden"
        >
          {open ? "[x]" : "[≡]"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-5 py-3 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[14px] hover:text-accent"
            >
              <span className="text-accent">$ </span>cd {n.cmd}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
