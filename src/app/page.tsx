import { Hero } from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import { HeroProjects } from "@/components/hero-projects";
import { HeroAccreditations } from "@/components/hero-accreditations";
import { projects } from "@/data/projects";
import { pickRandom } from "@/lib/random";
import { accreditations } from "@/data/accreditations";

export default function Home() {
  const featuredProjects = pickRandom(projects, 3);
  const featuredAccreditations = pickRandom(accreditations, 3);

  return (
    <main className="min-h-screen">
      <Hero />
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 pb-10">
        <Separator className="mb-2" />
        <HeroProjects projects={featuredProjects} />
      </section>
      <section
        id="accreditations"
        className="mx-auto w-full max-w-5xl px-6 pb-10"
      >
        <Separator className="mb-2" />
        <HeroAccreditations accreditations={featuredAccreditations} />
      </section>
    </main>
  );
}
