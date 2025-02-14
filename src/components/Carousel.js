import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Carousel.css"
import config from "../config";

const Carousel = () => {
  const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();
  const images = config[pathName]?.imageNames;

  const [index, setIndex] = useState(0);

  const goToNextSlide = () => {
    let newIndex = index + 1;
    if (newIndex >= images.length) newIndex = 0;
    setIndex(newIndex);
  };

  const goToPrevSlide = () => {
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    setIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={goToPrevSlide}>&lt;</button>
      
      <div className="carousel-image-container">
        <img src={images[index]} alt="" />
      </div>
      
      <button className="carousel-btn" onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;