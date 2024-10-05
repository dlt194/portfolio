import NavBar from "@/components/NavBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* TITLE */}
        <div>
          <Label className="text-lg">Chat App</Label>
        </div>
        {/* Description */}
        <div>
          <Label className="text-sm">
            A simple chat application, created with React that integrates with
            Avaya Experience Platform. Phase 2 of this project involves linking
            the Chat Application to Google Vertex AI Platform allowing a simple
            self service portal before escalating to a human agent.
          </Label>
        </div>

        {/* CAROUSEL */}
        <div>
          <Carousel className="max-w-screen">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
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
      </main>
      <footer className="row-start-3"></footer>
    </div>
  );
}
