import React, { useState } from "react";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1, 2];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container bg-gray-200 p-4 w-full max-w-sm mx-auto rounded-md ">
      <div className="slides w-full h-1/2 mt-4 mb-4 overflow-hidden relative">
        <div
          className="slides-inner flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide w-full flex-shrink-0 h-full flex items-center justify-center"
            >
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <img
                  src={`https://via.placeholder.com/300?text=Slide+${
                    index + 1
                  }`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shimmer w-full h-2 mt-2 bg-gray-300 rounded-full"></div>
      <div className="shimmer w-3/4 h-2 mt-2 bg-gray-300 rounded-full mx-auto"></div>
      <div className="dots flex justify-center mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot w-3 h-3 rounded-full mx-1 ${
              currentSlide === index ? "bg-gray-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="static-button w-full p-2 bg-gray-300 text-gray-300 rounded">
          Button
        </button>
      </div>
      <div className="shimmer w-3/5 h-2 mt-8 bg-gray-300 rounded-full mx-auto"></div>
    </div>
  );
};

export default CarouselComponent;
