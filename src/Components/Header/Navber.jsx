import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6"; 
import { IoClose } from "react-icons/io5"; 
import { NavLink } from "react-router";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "cp font-semibold text-[#FF6347] transition-colors duration-300" 
      : "hover:text-[#FF6347] transition-colors duration-300";

  return (

 <div className="border-y py-3 border-gray-200 sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Left Side: All Category Button */}
        <div className="flex items-center gap-2 bgp bg-gray-800 text-white rounded-md px-4 py-2 md:px-6 md:py-2 hover:scale-105 transition-all cursor-pointer duration-300">
          <BiCategory className="text-xl" />
          <p className="text-sm md:text-base whitespace-nowrap">All Category</p>
        </div>

        {/* Desktop Menu (Links) */}
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

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4 border-b" : "max-h-0 opacity-0 py-0"
        } bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/">Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/shop">Shop Now</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/about">About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/blog">Blog</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={linkClasses} to="/contact">Contact</NavLink>
          
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