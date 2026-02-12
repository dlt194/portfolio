import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
  name?: string;
  headline?: string;
  location?: string;
  availability?: string;
};

export function Hero({
  name = "Dan Thomas",
  headline = "Software Developer • Telecoms • Cloud",
  location = "UK (Remote-friendly)",
  availability = "Open to opportunities",
}: HeroProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{availability}</Badge>
            <Badge variant="outline">{location}</Badge>
          </div>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {headline}.{" "}
          </p>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            I build reliable web apps and automation tooling - from polished UIs
            to backend services, integrations, and infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">
              View Projects <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>

          <div className="flex items-center gap-2 pl-1">
            <Button variant="ghost" size="icon" asChild aria-label="GitHub">
              <a
                href="https://github.com/DLT194"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github text-base" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
              <a
                href="https://www.linkedin.com/in/dan-thomas-2b338b79/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin text-base" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild aria-label="Email">
              <a href="mailto:dan@dlt.me.uk">
                <i className="fa-solid fa-at"></i>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 pt-2 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Current focus</p>
            <p className="mt-1 font-medium">Next.js, TypeScript, shadcn/ui</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Backend</p>
            <p className="mt-1 font-medium">
              FastAPI, Node, Postgres, Supabase
            </p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">Ops</p>
            <p className="mt-1 font-medium">Docker, automation, monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
