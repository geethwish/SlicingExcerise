"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const carouselData = [
  {
    id: 1,
    text: "Lorem ipsum #1",
    description: "Donec nec justo eget felis facilisis fermentum.",
  },
  {
    id: 2,
    text: "Lorem ipsum #2",
    description: "Aenean dignissim pellentesque felis sed egestas.",
  },
  {
    id: 3,
    text: "Lorem ipsum #3",
    description: "Eros pede semper est, vitae luctus metus libero.",
  },
  {
    id: 4,
    text: "Lorem ipsum #4",
    description: "Aliquam porttitor mauris sit amet orci.",
  },
  {
    id: 5,
    text: "Lorem ipsum #5",
    description: "Fermentum ante et vulputate volutpat.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden flex justify-center items-center">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2"
      >
        Next
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={carouselData[currentIndex].id}
        className="absolute w-full h-full flex justify-center items-center bg-gray-100"
      >
        <div className="text-center p-4">
          <h4 className="text-2xl md:text-4xl">
            {carouselData[currentIndex].text}
          </h4>
          <p className="text-lg md:text-xl">
            {carouselData[currentIndex].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
