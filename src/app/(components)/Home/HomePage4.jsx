'use client' 
import React from 'react'

function HomePage4() {
  return (
    <div className='mt-12'> 
  <div className='text-center mt-12 py-6'>
        <p className="text-lg md:text-2xl font-bold">
            Our Services
        </p>
      </div>

      {/* Subheading Section */}
      <div className='text-center mt-4'>
        <p className="text-sm md:text-lg">
        Explore our comprehensive study room and library management <br/>solutions tailored for efficient user experiences.
        </p>
      </div> 
      <div className="mt-12 bg-white">

{/* Two Images Side by Side */}
<div className="flex justify-between items-center px-4 md:px-8">
  {/* Left Image */}
  <img
    src="/left-image.png"
    alt="Left Side Image"
    className="w-full max-w-xs  md:max-w-sm mx-4 md:mx-6" 
    style={{ marginLeft: '334px' }} // Optional additional left margin
  />

  {/* Right Image */}
  <img
    src="/right-image.png"
    alt="Right Side Image"
    className="w-full max-w-xs md:max-w-sm mx-4 md:mx-6"
    style={{ marginRight: '195px' }} // Optional additional right margin
  />
</div>

</div>
    </div>
  )
}

export default HomePage4