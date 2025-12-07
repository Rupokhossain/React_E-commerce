import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6"; 
import { IoClose } from "react-icons/io5"; 
import { NavLink } from "react-router";


const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu Function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Common Class for Links
  const linkClasses = ({ isActive }) =>
    isActive
      ? "cp font-semibold text-[#FF6347] transition-colors duration-300" // Active Style
      : "hover:text-[#FF6347] transition-colors duration-300"; // Normal Style

  return (
    <div className="border-y py-3 border-gray-200 relative bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Left Side: All Category Button (Visible on all screens, but smaller on mobile) */}
        <div className="flex items-center gap-2 bgp bg-gray-800 text-white rounded-md px-4 py-2 md:px-6 md:py-2 hover:scale-105 transition-all cursor-pointer duration-300">
          <BiCategory className="text-xl" />
          <p className="text-sm md:text-base whitespace-nowrap">All Category</p>
        </div>

        {/* Desktop Menu (Links) - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <NavLink className={linkClasses} to="/">Home</NavLink>
          <NavLink className={linkClasses} to="/shop">Shop Now</NavLink>
          <NavLink className={linkClasses} to="/about">About</NavLink>
          <NavLink className={linkClasses} to="/blog">Blog</NavLink>
          <NavLink className={linkClasses} to="/contact">Contact</NavLink>
        </div>

        {/* Right Side: Shop Button (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-2 bgp bg-gray-800 text-white rounded-md px-6 py-2 hover:scale-105 transition-all cursor-pointer duration-300">
          <LuShoppingCart />
          <p>Shop Now</p>
        </div>

        {/* Mobile Menu Button (Hamburger) - Visible on Mobile/Tablet */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Slide/Fade In) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        } bg-gray-50 border-t border-gray-100 absolute w-full left-0 top-full z-50 shadow-md`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/">Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/shop">Shop Now</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/about">About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/blog">Blog</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/contact">Contact</NavLink>
          
          {/* Mobile Only: Shop Button Button inside menu */}
          <div className="flex w-fit items-center gap-2 bgp bg-gray-800 text-white rounded-md px-6 py-2 mt-2">
            <LuShoppingCart />
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;