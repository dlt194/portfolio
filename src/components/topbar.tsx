"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import { NAV_ITEMS } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((m) => m.ThemeToggle),
  { ssr: false },
);

function isActive(
  pathname: string,
  href: string,
  match: "exact" | "startsWith" = "exact",
) {
  if (href.includes("#")) return false;
  if (match === "exact") return pathname === href;
  return pathname === href || pathname.startsWith(href + "/");
}

export function Topbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const items = React.useMemo(() => {
    return NAV_ITEMS.filter((item) => !(item.href === "/" && pathname === "/"));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Brand / left */}
        <div className="min-w-0"></div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 sm:flex">
          {items.map((item) => {
            const active = isActive(pathname, item.href, item.match);
            const isHashLink = item.href.includes("#");

            return (
              <Button
                key={item.href}
                variant={active ? "secondary" : "ghost"}
                size="sm"
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

        {/* Mobile actions */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <i className="fa-solid fa-bars" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-4 space-y-2">
                {items.map((item) => {
                  const active = isActive(pathname, item.href, item.match);
                  const isHashLink = item.href.includes("#");

                  const LinkEl = isHashLink ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  );

                  return (
                    <Button
                      key={item.href}
                      variant={active ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      {LinkEl}
                    </Button>
                  );
                })}

                <Separator className="my-2" />

                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
