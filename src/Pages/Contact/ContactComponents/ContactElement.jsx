import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactElement = () => {
  return (

    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="py-10 md:py-16">
        <div className="flex justify-center text-center mb-8 md:mb-12">
          <SectionHeading
            heading={"Contact"}
            colorHeading={"With Us"}
            description={
              "Customer service should not be a department. It should be the entire company."
            }
          ></SectionHeading>
        </div>

        {/* Info Cards Section */}
        {/* মোবাইলে ১টি, ট্যাবলেটে ২টি, পিসিতে ৩টি কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          
          {/* Phone Card */}
          <div className="border border-gray-200 px-6 py-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl text-green-600 border p-4 rounded-full mb-4 border-green-100 bg-green-50">
                <FaPhone />
              </div>
              <p className="text-xl font-bold text-gray-800 mb-2">
                Phone Support
              </p>
              <h3 className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">+880 1753 924093</h3>
              <h3 className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">+880 1600 000000</h3>
            </div>
          </div>

          {/* Email Card */}
          <div className="border border-gray-200 px-6 py-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl text-green-600 border p-4 rounded-full mb-4 border-green-100 bg-green-50">
                <MdOutlineMail />
              </div>
              <p className="text-xl font-bold text-gray-800 mb-2">
                Email Support
              </p>
              <h3 className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">info@siam.com</h3>
              <h3 className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">support@siam.com</h3>
            </div>
          </div>

          {/* Location Card */}
          <div className="border border-gray-200 px-6 py-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl text-green-600 border p-4 rounded-full mb-4 border-green-100 bg-green-50">
                <IoLocationSharp />
              </div>
              <p className="text-xl font-bold text-gray-800 mb-2">
                Office Address
              </p>
              <h3 className="text-gray-600">Badda, Dhaka,</h3>
              <h3 className="text-gray-600">Bangladesh</h3>
            </div>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Map Section */}
            <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.485100878886!2d90.42419807479249!3d23.765734088188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762502803564!5m2!1sen!2sbd" 
                    className="w-full h-full border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-5 w-full bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
                
                <input 
                    className="w-full py-3 border border-gray-300 px-4 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all bg-white" 
                    type="text" 
                    placeholder="Your Name..." 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input 
                        className="w-full py-3 border border-gray-300 px-4 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all bg-white" 
                        type="text" 
                        placeholder="Your Phone..." 
                    />
                    <input 
                        className="w-full py-3 border border-gray-300 px-4 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all bg-white" 
                        type="email" 
                        placeholder="Email Address..." 
                    />
                </div>
                
                <textarea 
                    className="w-full py-3 border border-gray-300 px-4 rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all h-32 bg-white resize-none" 
                    placeholder="Your Message..." 
                ></textarea>

                <button className='bgp btn text-white py-3 rounded-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 font-semibold text-lg'>
                    Submit Message
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactElement;