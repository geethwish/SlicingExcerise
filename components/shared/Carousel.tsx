"use client";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import { SlidesTypes } from "@/app/api/slides/route";

interface CarouselProps {
  items: SlidesTypes[] | [];
}
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleItems: SlidesTypes[] = [
    items[(currentIndex + items.length - 1) % items.length],
    items[currentIndex % items.length],
    items[(currentIndex + 1) % items.length],
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative lg:w-1/2 sm:w-full overflow-hidden md:mr-20 animate-fadeIn">
      <h3 className="text-white text-center sm:text-center md:text-end sm:ml-20 md:mr-32 text-6xl mb-12">
        DONEC NEC JUSTO
      </h3>
      <div className="flex">
        <AnimatePresence initial={false} custom={direction}>
          {visibleItems.length > 0 &&
            visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                // exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 500, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="md:1 lg:w-1/2 xl:w-1/3 flex-none carousel-item flex items-stretch"
              >
                <div className="flex flex-col justify-between p-4 bg-white opacity-60 text-black rounded-lg mx-2 custom-card">
                  <div className="px-2">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-wrap overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <Button
        variant="link"
        className="absolute right-0 md:top-[65%] transform -translate-y-1/2 right-navigation-button"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-white hover:text-blue-950 down-arrow" />
      </Button>
    </div>
  );
};

export default Carousel;
