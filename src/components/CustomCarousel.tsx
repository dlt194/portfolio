import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

interface CustomCarouselProps {
  images: string[];
}

function CustomCarousel({ images }: CustomCarouselProps) {
  return (
    <div>
      <Carousel className="w-full max-h-svh">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={image}
                      className="w-full h-full object-scale-down"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
