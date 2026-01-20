import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { CodeSnippet } from "@/components/code-snippet";
import { ProjectScreenshots } from "@/components/project-screenshots";

export const dynamicParams = true;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const screenshots =
    project.screenshots?.filter((s) => s.src?.trim().length) ?? [];

  const codeSnippets = project.codeSnippets ?? [];

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.status ? (
                <Badge variant="secondary">{project.status}</Badge>
              ) : null}
              {project.featured ? (
                <Badge variant="outline">Featured</Badge>
              ) : null}
              {project.year ? (
                <Badge variant="outline">{project.year}</Badge>
              ) : null}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            {project.description ? (
              <p className="max-w-2xl text-muted-foreground">
                {project.description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            {project.href ? (
              <Button asChild>
                <a href={project.href} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live / Docs
                </a>
              </Button>
            ) : null}

            {project.github ? (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github text-base" />
                  GitHub
                </a>
              </Button>
            ) : null}

            <Button variant="ghost" asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-10" />

        <Card>
          <CardHeader>
            <CardTitle>Key objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {project.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {screenshots.length ? (
          <>
            <h2 className="mt-10 text-xl font-semibold tracking-tight">
              Screenshots
            </h2>
            <ProjectScreenshots screenshots={screenshots} />
          </>
        ) : null}

        {codeSnippets.length ? (
          <>
            <h2 className="mt-10 text-xl font-semibold tracking-tight">
              Code snippets
            </h2>
            <div className="mt-4 grid gap-4">
              {codeSnippets.map((snip) => (
                <CodeSnippet
                  key={snip.id}
                  title={snip.title}
                  language={snip.language}
                  description={snip.description}
                  code={snip.code}
                />
              ))}
            </div>
          </>
        ) : null}

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Languages & tools
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Build</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tech.build.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Ship</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tech.ship.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Maintain</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tech.maintain.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
