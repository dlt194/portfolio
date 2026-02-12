"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { ImageLightbox } from "@/components/image-lightbox";

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export function ProjectScreenshots({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<Screenshot | null>(null);

  function onClick(s: Screenshot) {
    setActive(s);
    setOpen(true);
  }

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {screenshots.map((s, i) => (
          <Card key={`${s.src}-${i}`} className="overflow-hidden">
            <button
              type="button"
              onClick={() => onClick(s)}
              className="block w-full text-left"
              aria-label={`Open screenshot: ${s.alt}`}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes={
                    i === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                />
              </div>

              {s.caption ? (
                <CardContent className="pt-4 text-sm text-muted-foreground">
                  {s.caption}
                </CardContent>
              ) : null}
            </button>
          </Card>
        ))}
      </div>

      <ImageLightbox image={active} open={open} onOpenChange={setOpen} />
    </>
  );
}
