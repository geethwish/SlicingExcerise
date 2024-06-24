// components/Slide2.tsx
import React from "react";
import Carousel from "./Carousel";

const Slide2 = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden bg-black ">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/images/img-xl.jpg)` }}
      ></div>
      <div className="absolute h-screen top-0 p-2 right-0 bg-black z-10 w-[150px] text-gray-700 text-center hidden sm:block">
        DISCOVER MORE
      </div>
      <Carousel />
    </div>
  );
};

export default Slide2;
