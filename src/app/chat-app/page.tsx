import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = ["/images/chat_1.png", "/images/chat_2.png"];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
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
        <div className="">
          <CustomCarousel images={images} />
        </div>
      </main>
      <footer className="row-start-3"></footer>
    </div>
  );
}
