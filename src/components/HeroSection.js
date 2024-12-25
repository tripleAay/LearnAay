import React, { useState, useEffect } from "react";
import picA from '../assets/images/picA.png'
import picB from '../assets/images/picB.png'
import picC from '../assets/images/picC.png'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    picA, picB, picC,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 mt-10 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg ">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Expand Your <span className="text-blue-600">Knowledge</span> with LearnAay
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Unlock limitless learning opportunities with professional
          courses, certifications, and training programs designed <br/> to help you
          grow and succeed.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
            Get Started
          </button>
          
        </div>
      </div>

      {/* Right Content */}
      <div className="relative mt-8 md:mt-0 w-full md:w-1/2 flex items-center justify-center">
        <img
          src={images[currentImage]}
          alt="Hero"
          className="w-full max-w-sm transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default HeroSection;
