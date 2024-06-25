import React, { FC } from "react";
import Carousel from "./Carousel";
import { SlidesTypes } from "@/app/api/slides/route";

interface Slide2Props {
  items: SlidesTypes[] | [];
}
const Slide2: FC<Slide2Props> = ({ items }) => {
  return (
    <div className="relative h-screen flex  items-center justify-end overflow-hidden bg-black ">
      <div className="absolute top-0 w-full h-full bg-cover bg-center bg-image"></div>
      <div className="absolute h-screen top-0 p-5 right-0 sm:bg-inherit md:bg-black z-10 sm:w-0 md:w-[180px] text-gray-700 text-center ">
        DISCOVER MORE
      </div>
      <Carousel items={items} />
    </div>
  );
};

export default Slide2;
