import React from "react";
import cover from "../../../assets/image/execulisive colloction.jpg";

const LatestExclusive = () => {
  return (
    <div className="pb-10 md:pb-16 px-4 md:px-8 lg:px-24">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat container mx-auto rounded-xl shadow-lg relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-black/20 md:bg-transparent rounded-xl"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 text-white flex justify-center h-full flex-col gap-3 md:gap-5 
          items-center text-center p-4 
          md:items-end md:text-right md:pr-16 lg:pr-24"
        >
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide uppercase drop-shadow-md">
            30% off sale
          </p>
          
          <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight md:leading-snug drop-shadow-md">
            Latest Exclusive <br />
            Summer Collection
          </h3>
          
          <button className="bgp hover:bg-white hover:text-green-600 border-2 border-transparent hover:border-white transition-all duration-300 cursor-pointer 
            px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-lg shadow-md hover:shadow-xl hover:-translate-y-1 mt-2">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;