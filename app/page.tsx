import HorizontalIndicator from "@/components/shared/HorizontalIndicator";
import Navbar from "@/components/shared/Navbar";
import Slide1 from "@/components/shared/Slide1";
import Slide2 from "@/components/shared/Slide2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen relative w-full">
      <Navbar />
      <Slide1 />
      <Slide2 />
      <HorizontalIndicator />
    </main>
  );
}
