import NavBar from "@/components/NavBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link2Icon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <Label className="text-lg">Custom WebRTC Client</Label>
        </div>

        {/* Description */}
        <div>
          <Label className="text-sm flex text-center">
            A custom WebRTC Client for use with Avaya IP Office. Created using
            NextJS, offers connection to an IP Office Server by providing a URL,
            Username & Password. Opens a WebSocket to the server then utilises
            the UserPortal API for interaction. The UserPortal API is based on
            Protobuf messages sent over the WebSocket. Phase 2 of the project
            will be creating a native mobile client utilising React-Native to
            create Android & iOS Builds.
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
