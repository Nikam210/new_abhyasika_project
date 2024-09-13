"use client"; // Ensure lowercase 'client' for Client Component
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-semibold text-black">My-Abhyasika</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 bg-white border-gray-100 rounded-lg md:bg-white">
            <li>
              <Link href="./Home/HomePage.jsx" className="block my-2 py-2 px-3 text-xl font-bold text-black hover:underline hover:decoration-white transition duration-300 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="./Home/(components)/Feature.jsx" className="block my-2 py-2 px-3 text-xl font-bold text-black hover:underline hover:decoration-white transition duration-300 md:p-0">
                Feature
              </Link>
            </li>
            <li>
              <Link href="./Home/(components)/Pricing.jsx" className="block my-2 py-2 px-3 text-xl font-bold text-black hover:underline hover:decoration-white transition duration-300 md:p-0">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="../(components)/Home/Blog.jsx" className="block my-2 py-2 px-3 text-xl font-bold text-black hover:underline hover:decoration-white transition duration-300 md:p-0">
                Blog
              </Link>
            </li>
            {/* Button */}
            <li>
              <button className="py-2 px-8 mx-5 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
