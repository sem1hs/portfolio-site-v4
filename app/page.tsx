import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { site } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[960px] px-5 sm:px-7">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="mt-10 border-t border-line">
        <div className="mx-auto flex max-w-[960px] flex-wrap justify-between gap-2 px-5 py-6 text-[12px] text-dim sm:px-7">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#top" className="hover:text-accent">
            cd ~ ↑
          </a>
        </div>
      </footer>
    </>
  );
}
