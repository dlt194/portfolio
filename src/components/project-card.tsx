import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {project.status ? (
            <Badge variant={project.featured ? "default" : "secondary"}>
              {project.status}
            </Badge>
          ) : null}
          {project.featured ? <Badge variant="outline">Featured</Badge> : null}
          {project.year ? (
            <Badge variant="outline">{project.year}</Badge>
          ) : null}
        </div>

        <CardTitle className="text-pretty text-lg">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.objectives[0]}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
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
                <i className="fa-brands fa-github"></i>
                GitHub
              </a>
            </Button>
          ) : null}

          {/* Optional: detail pages later */}
          <Button variant="outline" asChild>
            <Link href={`/projects/${project.slug}`}>Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
