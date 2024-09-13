'use client';
import React from 'react';

function HomePage5() {
  return (
    <div className="mt-12 px-4  ">
      {/* Contact Us Section */}
      <div className="text-center mt-12 py-6">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact Us
        </p>
      </div>
      
      {/* Inquiries Section */}
      <div className="text-center mb-6">
        <p className="text-base sm:text-lg md:text-xl">
          Get in touch for inquiries about our study<br />room solutions.
        </p>
      </div>

      {/* Form Section with Rounded White Background */}
      <div className="flex items-center justify-center py-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4 sm:space-y-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-2">
                Enter your first name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name here"
                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-2">
                Enter your email address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address here"
                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-2">
                Enter your message*
              </label>
              <textarea
                id="message"
                placeholder="Your message here"
                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-md hover:bg-blue-600 transition"
              >
                Submit your inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage5;
