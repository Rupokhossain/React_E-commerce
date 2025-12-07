import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="py-2 md:py-4 bg-[#F8F8FB]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        
        {/* Left Section: Phone & Whatsapp */}
        <div className="md:flex items-center gap-4 md:gap-12 hidden">
          <div className="ct flex items-center gap-2">
            <FiPhoneCall />
            <p className="text-xs">01636755280</p>
          </div>
          <div className="ct flex items-center gap-2">
            <FaWhatsapp />
            <p className="text-xs">01636755280</p>
          </div>
        </div>

        {/* Center Section: Slogan (Hidden on very small mobile for space, visible on tablet+) */}
        <div className="hidden lg:block">
          <p className="ct text-xs">
            World's Fastest Online Shopping Destination
          </p>
        </div>

        {/* Right Section: Menu Links */}
        <div className="flex items-center ct text-xs gap-3 md:gap-5">
          <p className="cursor-pointer">Help?</p>
          <p className="cursor-pointer">Trac Order?</p>
          <p className="cursor-pointer">English</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;