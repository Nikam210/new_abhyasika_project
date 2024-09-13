"use client";

import React, { useState, useEffect } from 'react';

// Custom hook to track window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Only execute code when on the client side
    if (typeof window !== 'undefined') {
      // Set the initial window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures this effect is only run on mount and unmount

  return windowSize;
};

const HomePage2 = () => {
  const { width } = useWindowSize();

  // Default values if width is undefined (initial SSR)
  const isTablet = width >= 768 && width <= 1280;
  const isDesktop = width > 1280;

  return (
    <div
      className={`mt-12 flex ${isDesktop ? 'md:flex-row' : 'flex-col'} items-center justify-center p-4 ${isDesktop ? 'md:space-y-0' : 'space-y-6'} bg-white text-black`}
      style={{ height: 'auto' }}
    >
      {/* Text Content Container */}
      <div className={`flex flex-col ${isDesktop ? 'mt-24 md:mt-24 ml-4 md:ml-56 text-left' : 'text-center'} ${isTablet ? 'max-w-[80%]' : 'ml-2 mt-12'}`}>
        <h1 className={`text-3xl ${isDesktop ? 'md:text-5xl' : (isTablet ? 'text-4xl' : 'text-3xl')} font-bold`}>
          About My <br /> Abhyasika
        </h1>
        <p className={`text-lg ${isDesktop ? 'md:text-xl' : (isTablet ? 'text-lg' : 'text-base')} mt-4 md:mt-8`}>
          My-Abhyasika is an application specifically <br /> designed to solve the challenges faced by <br /> study room owners and admins. We provide the <br /> most user-friendly solution for simplifying <br /> management, streamlining operations, <br /> boosting marketing efforts, and enhancing <br /> member satisfaction—all in one place.
        </p>
        {/* Button */}
        <div className={`flex items-center mt-6 ${isDesktop ? 'justify-start' : 'justify-center'}`}>
          <button className={`text-white bg-blue-500 px-6 py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm ${isDesktop ? 'md:text-base' : 'text-base'}`}>
            Start Free Trial Now
          </button>
        </div>
      </div>
      
      {/* Image Container */}
      <div className={`flex-1 ${isDesktop ? 'ml-0 md:ml-32 mt-8 md:mt-0 max-w-[60%]' : 'mt-6 ml-48'} ${isTablet ? 'text-center' : 'max-w-full'}`}>
        <img
          src="/h1.png" // Use leading slash for public directory
          alt="Description of Image"
          className={`object-cover ${isDesktop ? 'max-w-[70%] max-h-[60%]' : (isTablet ? 'max-w-[80%] h-auto' : 'max-w-full h-auto')}`} // Ensure the image scales well
        />
      </div> 
    </div>
  );
};

export default HomePage2;
