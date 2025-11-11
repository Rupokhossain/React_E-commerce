import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactElement = () => {
  return (
    <div className="container mx-auto px-24">
      <div className="py-16">
        <div className="flex justify-center text-center mb-4">
          <SectionHeading
            heading={"Contact"}
            colorHeading={"With Us"}
            description={
              "Customer service should not be a department. It should be the entire company."
            }
          ></SectionHeading>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-6">
          <div className="border border-gray-200 px-8 py-5 rounded-md">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="text-3xl border p-4 rounded-md my-3 border-gray-200">
                <FaPhone />
              </div>
              <p className="text-xl font-semibold text-gray-700">
                Contact With Phone
              </p>
              <h3>Phone: 01753924093</h3>
              <h3>Phone: 01753924093</h3>
            </div>
          </div>
          <div className="border border-gray-200 px-8 py-5 rounded-md">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="text-3xl border p-4 rounded-md my-3 border-gray-200">
                <MdOutlineMail  />
              </div>
              <p className="text-xl font-semibold text-gray-700">
                Contact With Phone
              </p>
              <h3>Phone: 01753924093</h3>
              <h3>Phone: 01753924093</h3>
            </div>
          </div>
          <div className="border border-gray-200 px-8 py-5 rounded-md">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="text-3xl border p-4 rounded-md my-3 border-gray-200">
                <IoLocationSharp />
              </div>
              <p className="text-xl font-semibold text-gray-700">
                Contact With Phone
              </p>
              <h3>Phone: 01753924093</h3>
              <h3>Phone: 01753924093</h3>
            </div>
          </div>
        </div>

        <div className="pt-16 grid grid-cols-2 gap-3">
            <div className="place-items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.485100878886!2d90.42419807479249!3d23.765734088188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762502803564!5m2!1sen!2sbd" width="600" height="400" className='rounded-md' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="flex flex-col gap-5 items-start mt-4">
                <input className="w-lg py-2 border border-gray-200 px-3 rounded-md" type="text" placeholder="Your Name..." />
                <input className="w-lg py-2 border border-gray-200 px-3 rounded-md" type="text" placeholder="Your Phone..." />
                <input className="w-lg py-2 border border-gray-200 px-3 rounded-md" type="text" placeholder="Email Address..." />
                <input className="w-lg py-12 border border-gray-200 px-3 rounded-md" type="text" placeholder="Your Message..." />

                   <button className='bgp btn text-gray-100'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactElement;
