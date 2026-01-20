import { Hero } from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import { HeroProjects } from "@/components/hero-projects";
import { HeroAccreditations } from "@/components/hero-accreditations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 pb-10">
        <Separator className="mb-2" />
        <HeroProjects />
      </section>
      <section
        id="accreditations"
        className="mx-auto w-full max-w-5xl px-6 pb-10"
      >
        <Separator className="mb-2" />
        <HeroAccreditations />
      </section>
    </main>
  );
}
