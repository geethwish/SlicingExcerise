"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import HorizontalIndicator from "@/components/shared/HorizontalIndicator";
import Navbar from "@/components/shared/Navbar";
import Slide1 from "@/components/shared/Slide1";
import Slide2 from "@/components/shared/Slide2";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/slides").then((res: any) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, []);

  const handleNavigate = (): void => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <main className="h-screen relative w-full">
      <Navbar />
      {currentSlide == 0 && <Slide1 onNavigate={handleNavigate} />}
      {currentSlide === 1 && <Slide2 items={items} />}

      <HorizontalIndicator currentSlide={currentSlide} />
    </main>
  );
}
