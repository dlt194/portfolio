"use client";

import * as React from "react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function uniqueTags() {
  const set = new Set<string>();
  for (const p of projects) for (const t of p.tags) set.add(t);
  return ["All", ...Array.from(set).sort()];
}

export default function ProjectsPage() {
  const [q, setQ] = React.useState("");
  const [tag, setTag] = React.useState("All");

  const tags = React.useMemo(() => uniqueTags(), []);

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();

    return projects
      .filter((p) => (tag === "All" ? true : p.tags.includes(tag)))
      .filter((p) => {
        if (!query) return true;
        const haystack = [p.title, p.objectives, ...(p.tags ?? [])]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
      .sort((a, b) => {
        // featured first, then year/status/title
        const af = a.featured ? 1 : 0;
        const bf = b.featured ? 1 : 0;
        if (af !== bf) return bf - af;
        const ay = a.year ?? 0;
        const by = b.year ?? 0;
        if (ay !== by) return by - ay;
        return a.title.localeCompare(b.title);
      });
  }, [q, tag]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-5xl px-6 py-4 sm:py-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            A selection of engineering work across web apps, automation, and
            platform tooling.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects (e.g. Next.js, FastAPI, Avaya...)"
            className="sm:max-w-md"
          />

          <Select value={tag} onValueChange={setTag}>
            <SelectTrigger className="sm:w-56">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              {tags.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {featured.length ? (
          <>
            <h2 className="mt-10 text-xl font-semibold tracking-tight">
              Featured
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </>
        ) : null}

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          All projects
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No results. Try a different search or tag.
          </p>
        ) : null}
      </section>
    </main>
  );
}
