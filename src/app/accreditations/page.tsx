"use client";

import * as React from "react";
import { AccreditationCard } from "@/components/accreditation-card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { accreditations, type AccreditationType } from "@/data/accreditations";

const TYPES = [
  "All",
  "Certification",
  "Diploma",
  "Course",
  "Badge",
] as const satisfies readonly ("All" | AccreditationType)[];

type AccreditationFilterType = (typeof TYPES)[number];

function isAccreditationFilterType(v: string): v is AccreditationFilterType {
  return (TYPES as readonly string[]).includes(v);
}

export default function AccreditationsPage() {
  const [q, setQ] = React.useState("");
  const [type, setType] = React.useState<AccreditationFilterType>("All");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();

    return accreditations
      .filter((a) => (type === "All" ? true : a.type === type))
      .filter((a) => {
        if (!query) return true;
        const haystack = [
          a.title,
          a.issuer,
          a.type,
          a.credentialId,
          ...(a.skills ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
      .sort((a, b) => {
        const af = a.featured ? 1 : 0;
        const bf = b.featured ? 1 : 0;
        if (af !== bf) return bf - af;
        const ad = a.dateIssued ?? "";
        const bd = b.dateIssued ?? "";
        return bd.localeCompare(ad);
      });
  }, [q, type]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-5xl px-6 py-4 sm:py-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Accreditations
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Certifications, diplomas, and course completions.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search (e.g. freeCodeCamp, React, AWS, credential ID...)"
            className="sm:max-w-md"
          />

          <Select
            value={type}
            onValueChange={(v) => {
              if (isAccreditationFilterType(v)) setType(v);
            }}
          >
            <SelectTrigger className="sm:w-56">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {filtered.map((item) => (
            <AccreditationCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No results. Try a different search or filter.
          </p>
        ) : null}
      </section>
    </main>
  );
}
