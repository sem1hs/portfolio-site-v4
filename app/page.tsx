import { GridBackground } from "@/components/GridBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <GridBackground />
      <div className="relative z-[1] mx-auto max-w-[1040px] px-6 sm:px-8">
        <Nav />
        <main>
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <Skills />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </main>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </>
  );
}
