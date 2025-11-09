import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="py-4 bg-[#F8F8FB]">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-12">
          <div className="ct flex items-center gap-2">
            <FiPhoneCall />
            <p className="text-xs">01636755280</p>
          </div>
          <div className="ct flex items-center gap-2">
            <FaWhatsapp />
            <p className="text-xs">01636755280</p>
          </div>
        </div>

        <div>
          <p className="ct text-xs">
            World's Fastest Online Shopping Destination
          </p>
        </div>

        <div className="flex items-center ct text-xs gap-5 ">
          <p>Help?</p>
          <p>Trac Order?</p>
          <p>English</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
