import React, { FC } from "react";

interface HorizontalIndicatorProps {
  currentSlide: number;
}
const HorizontalIndicator: FC<HorizontalIndicatorProps> = ({
  currentSlide,
}) => {
  return (
    <div className="absolute z-20 right-0 top-50-p">
      <div className="indicator">
        <div className={`${currentSlide === 0 ? "active" : ""}`}></div>
        <div className={`${currentSlide === 1 ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default HorizontalIndicator;
