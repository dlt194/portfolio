import NavBar from "@/components/NavBar";

import { Label } from "@/components/ui/label";
import CustomCarousel from "@/components/CustomCarousel";

export default function Home() {
  const images = [
    "/images/webrtc_1.png",
    "/images/webrtc_2.png",
    "/images/webrtc_3.png",
    "/images/webrtc_4.png",
    "/images/webrtc_5.png",
    "/images/webrtc_6.png",
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd]">
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
        <div className="">
          <CustomCarousel images={images} />
        </div>
      </main>
      <footer className="row-start-3"></footer>
    </div>
  );
}
