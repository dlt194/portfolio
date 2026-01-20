"use client";

import * as React from "react";

import { accreditations } from "@/data/accreditations";
import { pickRandom } from "@/lib/random";
import { AccreditationCard } from "@/components/accreditation-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroAccreditations() {
  const featured = pickRandom(accreditations, 3);

  if (featured.length === 0) return null;

  return (
    <section className="mt-4">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Accreditations</h2>

        <Button variant="ghost" asChild className="hidden sm:inline-flex">
          <Link href="/accreditations">View all</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => (
          <AccreditationCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Button variant="ghost" asChild>
          <Link href="/accreditations">View all accreditations</Link>
        </Button>
      </div>
    </section>
  );
}
