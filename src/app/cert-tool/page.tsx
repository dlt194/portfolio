import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";

import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = [
    "/images/cert_1.png",
    "/images/cert_2.png",
    "/images/cert_3.png",
    "/images/cert_4.png",
    "/images/cert_5.png",
    "/images/cert_6.png",
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
      <NavBar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* TITLE */}
        <div>
          <Label className="text-lg">Certificate Tool</Label>
        </div>
        {/* Description */}
        <div>
          <Label className="text-sm">
            A simple tool, primarily used to generate a Certificate Signing
            Request using custom OpenSSL configuration files
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
