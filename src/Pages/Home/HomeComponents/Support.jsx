import React from "react";
import { PiContactlessPayment } from "react-icons/pi";
import { AiFillBank } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Support = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "Free shipping on all US order or order above $200",
      icon: (
        <PiContactlessPayment className="text-4xl cp mx-auto"></PiContactlessPayment>
      ),
    },
    {
      id: 2,
      title: "24x7 Support",
      subtitle: "Contact us 24 hours a day, 7 days a week",
      icon: <AiFillBank className="text-4xl cp mx-auto"></AiFillBank>,
    },
    {
      id: 3,
      title: "30 Days Return",
      subtitle: "Simply return it within 30 days for an exchange",
      icon: <IoCartOutline className="text-4xl cp mx-auto"></IoCartOutline>,
    },
    {
      id: 4,
      title: "Payment Secure",
      subtitle: "Secure payment processing available 24/7",
      icon: <BiSupport className="text-4xl cp mx-auto"></BiSupport>,
    },
  ];
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-4  cursor-pointer px-24">
        {features.map((f) => (
          <div>
            <div className="border border-gray-200 text-center rounded-md px-4 py-6 h-full hover:shadow-lg transition-all duration-300">
              {f.icon}
              <p className=" text-gray-500 font-semibold my-2">{f.title}</p>
              <p className="ts  text-gray-500">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
