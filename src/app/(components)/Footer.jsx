"use client";

//import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Column 1: Welcome Message */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-yellow-400">Welcome</h2>
          <p className="text-gray-300">
            Your ultimate study room management solution awaits.
          </p>
        </div>

        {/* Column 2: Connect and Explore */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-yellow-400">Connect & Explore</h2>
          <p className="text-gray-300">
            info@myabhyasika.com
            <br />
            +91 87675 61855
          </p>
        </div>

        {/* Column 3: Subscription */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-yellow-400">Subscribe for Updates</h2>
          <p className="text-gray-300">Enter your email for updates:</p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500"
          />
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
