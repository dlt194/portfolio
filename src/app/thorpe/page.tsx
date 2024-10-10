"use client";
import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";

import { Link2Icon } from "@radix-ui/react-icons";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = [
    "/images/thorpe_1.png",
    "/images/thorpe_2.png",
    "/images/thorpe_3.png",
    "/images/thorpe_4.png",
    "/images/thorpe_5.png",
    "/images/thorpe_6.png",
    "/images/thorpe_7.png",
    "/images/thorpe_8.png",
    "/images/thorpe_9.png",
    "/images/thorpe_10.png",
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
      <NavBar />

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center flex-grow w-full">
        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <Label className="text-lg">Thorpe-le-Soken Bowling Club</Label>

          <Label className="text-sm">
            <a
              href="https://thorpelesokenbowlsclub.co.uk/"
              target="_blank"
              className="inline-flex items-center space-x-2"
            >
              <Link2Icon />
              <span>https://thorpelesokenbowlsclub.co.uk/</span>
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
        <div className="">
          <CustomCarousel images={images} />
        </div>
      </main>
    </div>
  );
}
