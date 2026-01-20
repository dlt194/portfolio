"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/data/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

function isActive(
  pathname: string,
  href: string,
  match: "exact" | "startsWith" = "exact",
) {
  // Don't treat hash links as "active" (they're sections, not routes)
  if (href.includes("#")) return false;

  if (match === "exact") return pathname === href;
  return pathname === href || pathname.startsWith(href + "/");
}

export function Topbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <div className="font-semibold tracking-tight"></div>

        <nav className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            if (item.href === "/" && pathname === "/") return null;

            const active = isActive(pathname, item.href, item.match);

            const isHashLink = item.href.includes("#");

            return (
              <Button
                key={item.href}
                variant={active ? "secondary" : "ghost"}
                asChild
              >
                {isHashLink ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </Button>
            );
          })}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
