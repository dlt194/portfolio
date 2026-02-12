"use client";

import * as React from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageLightbox({
  image,
  open,
  onOpenChange,
}: {
  image: LightboxImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
    h-[92vh]
    w-[96vw]
    max-w-275
    p-0
    lg:max-w-300
    xl:max-w-350
  "
      >
        <DialogHeader className="px-4 pb-0 pt-4">
          <DialogTitle className="text-base">
            {image.caption ?? image.alt}
          </DialogTitle>
        </DialogHeader>

        <div className="relative mx-4 mb-4 mt-3 h-[calc(92vh-72px)] overflow-hidden rounded-lg border">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="96vw"
            priority={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
