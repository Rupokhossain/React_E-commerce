import React from "react";
import cover from "../../../assets/image/execulisive colloction.jpg";
const LatestExclusive = () => {
  return (
    <div className="py-16">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="h-[60vh] bg-cover container mx-auto rounded-md pr-20"
      >
        <div className="text-white flex justify-center h-full gap-4 flex-col items-center text-center md:items-end md:text-right">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            30% off sale
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-14">
            Latest Exclusive <br />
            Summer Collection
          </h3>
          <button className="bgp transition-all duration-300 cursor-pointer px-5 py-2 rounded-md text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;
