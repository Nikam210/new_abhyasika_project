"use client"
import React, { useState } from 'react'

function HomePage3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="mt-12 bg-white">  
      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={currentImage} 
              alt="Pop-up Image" 
              className="object-contain w-full h-full" 
            />
            <button 
              className="absolute top-2 right-2 text-xl font-bold text-white"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Seating Layout Section */}
      <div className='text-center'> 
        <div className="text-3xl md:text-5xl text-black font-bold">
          Dynamic Seating Layout
        </div> 
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <div className="text-white bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
            Start Free Trial Now
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='py-5 flex justify-center'>
        <img 
          src="/h2.png" 
          alt="Description of Image" 
          className="w-full md:max-w-md cursor-pointer" 
          onClick={() => handleImageClick('/h2.png')}
        />
      </div>

      {/* All in One Software Overview Section */}
      <div className='text-center mt-8 md:mt-12'> 
        <div className="text-3xl md:text-5xl text-black font-bold">
          All in one Software Overview
        </div> 
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <div className="text-white bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
            Start Free Trial Now
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='py-5 flex justify-center'>
        <img 
          src="/h3.png" 
          alt="Description of Image" 
          className="w-full max-w-sm md:max-w-md cursor-pointer" 
          onClick={() => handleImageClick('/h3.png')}
        />
      </div>

      {/* Track Member Payments Section */}
      <div className='text-center mt-8 md:mt-12'> 
        <div className="text-3xl md:text-5xl text-black font-bold">
          Track Member Payments on your <br/>
          fingertips
        </div> 
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <div className="text-white bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
            Start Free Trial Now
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='py-5 flex justify-center'>
        <img 
          src="/h4.png" 
          alt="Description of Image" 
          className="w-full max-w-sm md:max-w-md cursor-pointer" 
          onClick={() => handleImageClick('/h4.png')}
        />
      </div>

      {/* Repeated Track Member Payments Section */}
      <div className='text-center mt-8 md:mt-12'> 
        <div className="text-3xl md:text-5xl text-black font-bold">
          Customized website for your study <br/>room for marketing <br/>
        </div> 
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <div className="text-white bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
            Start Free Trial Now
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='py-5 flex justify-center'>
        <img 
          src="/h5.png" 
          alt="Description of Image" 
          className="w-full max-w-sm md:max-w-md cursor-pointer" 
          onClick={() => handleImageClick('/h5.png')}
        />
      </div>
    </div>
  )
}

export default HomePage3
