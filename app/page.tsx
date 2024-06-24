"use client";
import HorizontalIndicator from "@/components/shared/HorizontalIndicator";
import Navbar from "@/components/shared/Navbar";
import Slide1 from "@/components/shared/Slide1";
import Slide2 from "@/components/shared/Slide2";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/slides").then((res: any) => {
      console.log(res.data);
      setSlides(res.data);
    });
  }, []);

  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleNavigate = (): void => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <main className="h-screen relative w-full">
      <Navbar />
      {currentSlide == 0 && <Slide1 onNavigate={handleNavigate} />}
      {currentSlide === 1 && <Slide2 />}

      <HorizontalIndicator currentSlide={currentSlide} />
    </main>
  );
}
