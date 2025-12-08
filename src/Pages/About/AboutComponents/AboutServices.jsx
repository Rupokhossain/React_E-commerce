import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import Support from "../../Home/HomeComponents/Support";

const AboutServices = () => {
  return (
    <div className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center text-center md:mb-6">
          <div className="max-w-2xl">
            <SectionHeading
                heading={"Our "}
                colorHeading={"Services"}
            ></SectionHeading>
          </div>
        </div>
        
        <Support></Support>
      </div>
    </div>
  );
};

export default AboutServices;