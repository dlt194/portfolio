import NavBar from "@/components/NavBar";
import { Label } from "@/components/ui/label";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = [""];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] w-full h-full max-w-screen max-h-screen min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
      <NavBar />

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center flex-grow w-full">
        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <Label className="text-lg">Overview</Label>

          <Label className="text-sm"></Label>
        </div>

        {/* Description */}
        <div>
          <Label className="text-sm flex text-center"></Label>
        </div>

        {/* CONTENT */}
        <div className="">
          <CustomCarousel images={images} />
        </div>
      </main>
    </div>
  );
}
