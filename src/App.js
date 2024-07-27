import React from "react";
import CarouselComponent from "./components/CarouselComponent";
import ScrollComponent from "./components/ScrollComponent";
import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    <div className="app-container p-4">
      <div className="carousel-section mb-8">
        <CarouselComponent />
      </div>

      <div className="input-section mb-8">
        <FormComponent />
      </div>
      <div className="scroll-section">
        <ScrollComponent />
      </div>
    </div>
  );
};

export default App;
