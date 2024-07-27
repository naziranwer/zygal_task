import React from "react";

const ScrollComponent = () => {
  const avatars = Array(10).fill(null);
  const images = Array(10).fill(null);

  return (
    <div className="scrollable-container w-full max-w-sm mx-auto p-4 bg-gray-200 rounded-md">
      <div className="avatars overflow-x-auto whitespace-nowrap no-scrollbar mb-4">
        {avatars.map((_, index) => (
          <div key={index} className="inline-block mr-2">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={`https://via.placeholder.com/100?text=Avatar+${index + 1}`}
                alt={`Avatar ${index + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="images overflow-y-auto h-64 no-scrollbar">
        {images.map((_, index) => (
          <div key={index} className="mb-2">
            <div className="w-full h-40 bg-gray-200">
              <img
                src={`https://via.placeholder.com/300?text=Image+${index + 1}`}
                alt={`Imag ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="shimmer w-1/2 h-2 mt-16 bg-gray-300 rounded-full mx-auto"></div>
    </div>
  );
};

export default ScrollComponent;
