import React, { FC } from "react";
import { Button } from "../ui/button";
import { FaChevronDown } from "react-icons/fa";

interface SlideProps {
  onNavigate: () => void;
}

const Slide1: FC<SlideProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen flex justify-center items-center text-center overflow-hidden">
      <video autoPlay loop muted className="fullscreen-video">
        <source
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div className="semi-transparent-overlay"></div>
      <div className="absolute z-10  text-gray-400 animate-fadeIn main-title-container">
        <h1 className="text-4xl md:text-6xl">
          LOREM <span className="border-b-4 border-gray-400">IPSUM </span>DOLOR
        </h1>
        <p className="text-xl subheading mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
      <Button
        variant="link"
        className="absolute bottom-3"
        onClick={() => onNavigate()}
      >
        <FaChevronDown className="text-blue-950 hover:text-white down-arrow" />
      </Button>
    </div>
  );
};

export default Slide1;
