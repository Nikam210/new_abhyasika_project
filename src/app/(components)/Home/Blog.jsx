'use client';
import React from 'react';

function BlogPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-8">Our Blog</h1>

        {/* Blog Parts (Two Columns for Desktop, Single for Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            {/* Square Image */}
            <div className="relative w-full h-64 mb-4">
              <img
                src="/Blog.png"  // Make sure this image exists in your public folder
                alt="Blog Image 1"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Blog Title and Description */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Enhancing Study Room Management with My <br/> Abhyasika's Innovative Solutions
            </h2>
            <p className="text-gray-700">
              Discover how My Abhyasika revolutionizes study room and library management. Our
              user-friendly platform offers features like member management, desk reservations, and
              payment collection, ensuring a seamless experience for admins, super admins, and
              students. Explore the benefits and future enhancements that make us the ideal choice
              for educational institutions.
            </p>
            {/* Date and Reading Time */}
            <div className="flex flex-row mt-7 font-bold text-sm">
              <p className="px-3">5/8/2024</p>
              <p>1 min read</p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            {/* Square Image */}
            <div className="relative w-full h-64 mb-4">
              <img
                src="/Blog1.png"  // Make sure this image exists in your public folder
                alt="Blog Image 2"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Blog Title and Description */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Enhancing Study Room Management with My <br/> Abhyasika's Innovative Solutions
            </h2>
            <p className="text-gray-700">
              Discover how My Abhyasika revolutionizes study room and library management. Our
              user-friendly platform offers features like member management, desk reservations, and
              payment collection, ensuring a seamless experience for admins, super admins, and
              students. Explore the benefits and future enhancements that make us the ideal choice
              for educational institutions.
            </p>
            {/* Date and Reading Time */}
            <div className="flex flex-row mt-7 font-bold text-sm">
              <p className="px-3">5/8/2024</p>
              <p>1 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
