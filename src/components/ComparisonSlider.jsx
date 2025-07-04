"use client";
import { useState } from "react";

export const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative" onMouseUp={handleMouseUp}>
      <div
        // aspect-[70/45]
        className="relative w-full max-w-[700px]  m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <img
          alt=""
          className="w-full"
          src="https://png.pngtree.com/png-clipart/20240218/original/pngtree-beautiful-white-horse-png-image_14354045.png"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            className="w-full"            
            alt=""
            src="https://gifs.eco.br/wp-content/uploads/2023/07/imagens-de-cavalo-preto-png-0.png"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-default cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};
