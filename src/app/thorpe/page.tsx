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
          <Label className="text-lg">Thorpe-le-Soken Bowling Club</Label>

          <Label className="text-sm">
            <a href="https://thorpelesokenbowlsclub.co.uk/" target="_blank">
              <Link2Icon />
              https://thorpelesokenbowlsclub.co.uk/
            </a>
          </Label>
        </div>

        {/* Description */}
        <div>
          <Label className="text-sm flex text-center">
            Basic website created using Flask. Enables the club to attract new
            members and keep existing members up-to-date with scheduled matches
            & planned events. Offers an admin interface for selected users with
            easy content management.
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
