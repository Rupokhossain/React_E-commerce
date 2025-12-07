import React from "react";
import logo from "../../../src/assets/image/logo1.png"; // পাথ ঠিক আছে কিনা দেখে নিও
import { CiShoppingCart, CiUser } from "react-icons/ci";

const MidHeader = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-3 px-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4 md:gap-x-8">
        
        {/* 1. LOGO (Order-1) */}
        <div className="order-1">
          <img className="w-16 md:w-20 p-1 md:-mt-4 object-contain" src={logo} alt="Logo" />
        </div>

        {/* 2. SEARCH BAR (Order-3 on Mobile, Order-2 on Desktop) */}
        {/* w-full on mobile to take full width of the second row */}
        <div className="order-3 md:order-2 w-full md:w-auto grow max-w-2xl">
          <label className="input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus:outline-none h-10 md:h-12 bg-gray-100 rounded-full px-4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
              type="search" 
              className="grow bg-transparent border-none outline-none text-sm md:text-base w-full" 
              required 
              placeholder="Search . . ." 
            />
          </label>
        </div>

        {/* 3. ICONS (Order-2 on Mobile, Order-3 on Desktop) */}
        {/* Moves to the right of Logo on mobile */}
        <div className="order-2 md:order-3 flex items-center gap-4 md:gap-8">
          {/* Account Icon */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
            <CiUser className="text-2xl md:text-3xl" />
            <div className="hidden sm:block"> {/* Text hidden on very small screens if needed, or keep block */}
              <p className="ct text-xs text-gray-500">Account</p>
              <p className="ts text-sm font-semibold">Login</p>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
            <CiShoppingCart className="text-2xl md:text-3xl" />
            <div className="hidden sm:block">
              <p className="ct text-xs text-gray-500">Cart</p>
              <p className="ts text-sm font-semibold">Login</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MidHeader;