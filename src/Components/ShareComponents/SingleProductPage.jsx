import React from "react";
import useData from "../../Hooks/useData";
import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import ProductCard from "./productCard";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const findProducts = products.find((p) => p.id == id);

  return (
    // কন্টেইনার প্যাডিং রেস্পন্সিভ করা হয়েছে
    <div className="container mx-auto py-10 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      
      {/* মেইন গ্রিড: মোবাইলে ১ কলাম, ল্যাপটপে ২ কলাম */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* ----------- Image Section ----------- */}
        <div className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden p-6 relative group">
          <img
            src={findProducts?.image}
            alt={findProducts?.title}
            // ইমেজ সাইজ রেস্পন্সিভ এবং হোভার ইফেক্ট দেওয়া হয়েছে
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ----------- Details Section ----------- */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-green-600 font-bold bg-green-50 w-max px-3 py-1 rounded-full mb-2">
            {findProducts?.categoryName}
          </p>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {findProducts?.name}
          </h3>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-4">
            <div className="flex gap-1 text-orange-400 text-sm md:text-base">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <p className="text-gray-500 text-sm md:text-base">
                ({findProducts?.ratings} Reviews)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-6">
            <p className="text-green-600">$ {findProducts?.price}</p>
            <p className="line-through text-gray-400 text-lg md:text-xl">
              $ {findProducts?.mrp}
            </p>
          </div>

          <div className="space-y-2 mb-6 text-gray-600">
            <p className="text-sm md:text-base leading-relaxed">
              {findProducts?.description}
            </p>
            <div className="pt-2">
                <p className="font-semibold text-gray-800">
                SKU : <span className="font-normal text-gray-500 ml-2">{findProducts?.sku}</span>
                </p>
                <p className="font-semibold text-gray-800">
                Stock : <span className="font-normal text-gray-500 ml-2">{findProducts?.stock}</span>
                </p>
                <p className="font-semibold text-gray-800">
                Closure : <span className="font-normal text-gray-500 ml-2">{findProducts?.closure}</span>
                </p>
            </div>
          </div>

          {/* Size Selector */}
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <p className="font-semibold text-gray-800 mr-2">Size : </p>
            {findProducts?.weightOptions.map((w, index) => (
              <div key={index}>
                <span className="cursor-pointer border border-gray-200 px-3 py-1 rounded hover:bg-green-600 hover:text-white transition-all text-sm font-medium text-gray-600">
                  {w}
                </span>
              </div>
            ))}
          </div>

          {/* Cart Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4 border border-gray-300 md:px-6 md:py-3 px-4 py-2 rounded-md">
              <button className="cursor-pointer hover:text-green-600 text-xl font-bold">-</button>
              <p className="font-semibold w-4 text-center">1</p>
              <button className="cursor-pointer hover:text-green-600 text-xl font-bold">+</button>
            </div>
            
            <button className="flex-1 sm:flex-none bgp cursor-pointer hover:bg-green-700 text-white md:px-8 md:py-3 px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              Add To Cart
            </button>
          </div>

          <div>
            <Link
              to="/"
              className="text-[#3BB77E] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              <span>←</span> Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16 md:mt-24">
        <div className="text-center mb-10">
          <SectionHeading
            heading={"Top Rated"}
            colorHeading={"Selling Products"} // Spelling fixed: Seleing -> Selling
            description={"High-quality denim jeans for men with a comfortable fit."}
          ></SectionHeading>
        </div>
        
        {/* প্রোডাক্ট গ্রিড রেস্পন্সিভ করা হয়েছে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.slice(0, 5).map((p) => (
            <ProductCard key={p.id} product={p}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;