import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";
import { Link2Icon } from "@radix-ui/react-icons";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = [
    "/images/portfolio_1.png",
    "/images/portfolio_2.png",
    "/images/portfolio_3.png",
    "/images/portfolio_4.png",
    "/images/portfolio_5.png",
    "/images/portfolio_6.png",
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <Label className="text-lg">Portfolio</Label>

          <Label className="text-sm">
            <a
              href="https://github.com/dlt194/portfolio"
              target="_blank"
              className="inline-flex items-center space-x-2"
            >
              <Link2Icon />
              <span>https://github.com/dlt194/portfolio</span>
            </a>
          </Label>
        </div>

        {/* Description */}
        <div>
          <Label className="text-sm">
            As I am unable to share the code for my other projects, I decided to
            create this portfolio site to offer visual representation of the
            projects. It is created using NextJS.
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
