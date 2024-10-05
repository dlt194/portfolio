"use client";
import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";

import CustomCarousel from "@/components/CustomCarousel";

import { Link2Icon } from "@radix-ui/react-icons";

export default function Home() {
  const images = [
    "/images/wedding_1.png",
    "/images/wedding_2.png",
    "/images/wedding_3.png",
    "/images/wedding_4.png",
    "/images/wedding_5.png",
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <Label className="text-lg">Wedding Website</Label>

          <Label className="text-sm">
            <a href="https://walshthomaswedding.vip/" target="_blank">
              <Link2Icon />
              https://walshthomaswedding.vip
            </a>
          </Label>
        </div>

        {/* Description */}
        <div>
          <Label className="text-sm flex text-center">
            A website created using Flask for my Wedding. Authentication via
            unique code which could be for an individual or group. Allowed us to
            easily convey any information to our guests and allowed the guests
            to R.S.V.P, if the code was for a group then all members of the
            group could R.S.V.P. The website also offered the ability for guests
            to upload photos & videos to share with us easily.
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
