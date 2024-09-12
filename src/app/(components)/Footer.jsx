"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Column 1: Welcome Message */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white-400">Welcome</h2>
          <p className="text-gray-300">
            Your ultimate study room management <br />solution awaits.
          </p>
          
          {/* Social media icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          {/* Increase spacing between social media icons and the copyright */}
          <div className="mt-16">
            <p className="text-gray-400">© 2024. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2: Connect */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white-400">Connect</h2>
          <p className="text-gray-300">
            +91 87675 61855
            <br />
            +91 90227 38129
          </p>
          <p>info@myabhyasika.com</p>
        </div>

        {/* Column 3: Subscription */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white-400">Explore</h2>
          <p className="text-gray-300">Enter your email for updates:</p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500"
          />
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
            Subscribe for updates now
          </button>
        </div>
      </div>
    </footer>
  );
}
