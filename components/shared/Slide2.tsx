// components/Slide2.tsx
import React from "react";
import Carousel from "./Carousel";

const Slide2 = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/images/img-1920x1200.jpg)` }}
      ></div>
      <button className="absolute bottom-5 bg-blue-500 text-white py-2 px-4 rounded">
        DISCOVER MORE
      </button>
      <Carousel />
    </div>
  );
};

export default Slide2;
