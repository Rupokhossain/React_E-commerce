import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const categories = [
    "Dairy & Milk",
    "Snack & Spice",
    "Fast Food",
    "Juice & Drinks",
    "Bakery",
    "Seafood",
  ];
  const company = [
    "About us",
    "Delivery",
    "Legal Notice",
    "Terms & Conditions",
    "Secure Payment",
    "Contact us",
  ];

  return (
    <footer className="border-t border-gray-200 mt-12 bg-white">
      {/* top section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 text-center sm:text-left text-gray-700">
        
        {/* logo and info section (Takes 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Siam</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Siam is the biggest market of grocery products.
            <br className="hidden sm:block" />
            Get your daily needs from our store.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-green-600 hover:text-green-600 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <FaGooglePlay className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Google Play</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-green-600 hover:text-green-600 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <FaAppStore className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">App Store</span>
            </button>
          </div>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">Category</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {categories.map((c, i) => (
              <li
                key={i}
                className="hover:text-green-600 hover:pl-1 transition-all duration-300 cursor-pointer"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {company.map((c, i) => (
              <li
                key={i}
                className="hover:text-green-600 hover:pl-1 transition-all duration-300 cursor-pointer"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start justify-center sm:justify-start gap-3">
              <HiOutlineLocationMarker className="text-green-600 w-5 h-5 shirnk-0 mt-0.5" />
              <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <AiOutlinePhone className="text-green-600 w-5 h-5 shirnk-0" />
              <span>+00 9876543210</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <AiOutlineMail className="text-green-600 w-5 h-5 shirnk-0" />
              <span>example@email.com</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-6 justify-center sm:justify-start text-gray-500 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-green-600 hover:-translate-y-1 transition-all duration-300" />
            <FaTwitter className="cursor-pointer hover:text-green-600 hover:-translate-y-1 transition-all duration-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-600 hover:-translate-y-1 transition-all duration-300" />
            <FaInstagram className="cursor-pointer hover:text-green-600 hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-green-600 font-semibold">Siam</span>. All
            rights reserved. Powered by{" "}
            <span className="text-green-600 font-semibold">Siam</span>.
          </p>

          <div className="flex items-center gap-4 text-2xl text-gray-400">
            <FaCcVisa className="hover:text-blue-900 cursor-pointer hover:scale-110 transition-all duration-300" />
            <FaCcMastercard className="hover:text-red-600 cursor-pointer hover:scale-110 transition-all duration-300" />
            <FaCcPaypal className="hover:text-blue-600 cursor-pointer hover:scale-110 transition-all duration-300" />
            <FaCcAmex className="hover:text-blue-500 cursor-pointer hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;