// components/TextAndImage.js
import Image from 'next/image'; 

const HomePage2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0">
      {/* Text Content Container */}
      <div className="flex flex-col md:w-1/2 text-center md:text-left space-y-4 px-4 md:px-8">
        <h1 className="text-2xl font-bold mb-4">About My <br/>Abhyasika</h1>
        <p className="text-lg">
          My-Abhyasika is an application specifically <br/> designed to solve the challenges faced by <br/> study room owners and admins. We provide the <br/> most user-friendly solution for simplifying <br/> management, streamlining operations, <br/> boosting marketing efforts, and enhancing <br/> member satisfaction—all in one place.
        </p>
        {/* Button */}
        <div className="flex items-center mt-6"> {/* Reduced margin-top for the button */}
          <div className="text-white bg-blue-500 px-6 py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
            Start Free Trial Now
          </div>
        </div>
      </div>
      
      {/* Image Container */}
      <div className="flex-1 md:w-1/2 mt-4 md:mt-0 pl-0 md:pl-8"> {/* Reduced margin-top and padding-left */}
        <Image
          src="/h1.png" // Use leading slash for public directory
          alt="Description of Image"
          layout="responsive"
          width={700} // Adjust width
          height={400} // Adjust height
          priority // Added priority to improve LCP
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage2;
