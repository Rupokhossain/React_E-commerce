import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import Support from "../../Home/HomeComponents/Support";

const AboutServices = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-center text-center mb-8">
          <SectionHeading
            heading={"Our "}
            colorHeading={"Services"}
            discription={
              "Customer service should not be a department. It should be the entire company."
            }
          ></SectionHeading>
        </div>
        <Support></Support>
      </div>
    </div>
  );
};

export default AboutServices;
