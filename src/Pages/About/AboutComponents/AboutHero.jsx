import React from "react";
import img1 from "../../../assets/image/about.png";
import img2 from "../../../assets/image/about-2.png";
import img3 from "../../../assets/image/about-3.png";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";

const AboutHero = () => {
  return (

    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <img className="w-1/2 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300" src={img1} alt="About Us 1" />
          <div className="flex flex-col gap-3 md:gap-4 w-1/2">
            <img className="w-full rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300" src={img2} alt="About Us 2" />
            <img className="w-full rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300" src={img3} alt="About Us 3" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:pl-8">
          <SectionHeading
            heading={"Who "}
            colorHeading={"We Are?"}
          ></SectionHeading>
          
          <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-bold my-4 text-gray-700 leading-snug">
            We’re here to serve only the best products for you. Enriching your
            homes with the best essentials.
          </h3>
          
          <div className="tp text-gray-500 text-justify text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged. Lorem Ipsum has survived not 
              only five centuries, but also the leap into electronic typesetting.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;