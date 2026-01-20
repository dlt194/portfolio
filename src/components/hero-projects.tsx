"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Project } from "@/data/projects";

import { ProjectCard } from "@/components/project-card";

export function HeroProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="mt-4">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

        <Button variant="ghost" asChild className="hidden sm:inline-flex">
          <Link href="/projects">View all</Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
