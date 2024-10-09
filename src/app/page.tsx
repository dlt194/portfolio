import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  const images = [
    "/images/cert_1.png",
    "/images/chat_1.png",
    "/images/thorpe_1.png",
    "/images/wedding_1.png",
    "/images/webrtc_1.png",
    "/images/portfolio_1.png",
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] w-full h-full max-w-screen max-h-screen min-h-screen sm:p-20 p-4 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f7f6] to-[#e0dedd] bg-fixed">
      <div className="z-50 pb-4">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex justify-around items-center text-center pt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-end">
          <a href="/cert-tool">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>Cert Tool</CardTitle>
                <CardDescription>June 2020 - Present</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label>Rust - Tauri backend with NextJS Front End</Label>
                <Image
                  src={images[0]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>
          <a href="/chat-app">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>Chat App</CardTitle>
                <CardDescription>June 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label className="mb-4 text-center">
                  React - ExpressJS Backend with React Frontend. Embedded in
                  Wordpress Website
                </Label>
                <Image
                  src={images[1]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>

          <a href="/thorpe">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>Thorpe-le-Soken Bowling Club</CardTitle>
                <CardDescription>December 2022 - Present</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label>
                  HTML, CSS, Python, SQLite - Flask Backend with HTML & CSS for
                  frontend. SQLite Database
                </Label>
                <Image
                  src={images[2]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>
          <a href="/wedding" className="">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>Wedding Website</CardTitle>
                <CardDescription>July 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label>
                  HTML, CSS, Python, SQLite - Flask Backend with HTML & CSS for
                  frontend. SQLite Database
                </Label>
                <Image
                  src={images[3]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>
          <a href="/webrtc" className="">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>WebRTC Client</CardTitle>
                <CardDescription>November 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label>React - NextJS Framework</Label>
                <Image
                  src={images[4]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>
          <a href="/portfolio" className="">
            <Card className="hover:scale-105 transition duration-500 h-full w-full">
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>October 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Label>React - NextJS Framework</Label>
                <Image
                  src={images[5]}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-auto max-w-80 max-h-80 object-contain pt-4"
                />
              </CardContent>
            </Card>
          </a>
        </div>
      </main>
    </div>
  );
}
