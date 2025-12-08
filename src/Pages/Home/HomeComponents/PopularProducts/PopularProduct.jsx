import React, { useState } from "react";
import SectionHeading from "../../../../Components/ShareComponents/SectionHeading";
import useData from "../../../../Hooks/useData";
import ProductCard from "../../../../Components/ShareComponents/productCard";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router";

const PopularProduct = () => {
  const { categorys, products } = useData();
  const [categoryId, setCategoryId] = useState();
  const handleCategoryId = (id) => {
    setCategoryId(id);
  };

  const filterProduct = categoryId
    ? products.filter((p) => p.categoryId == categoryId)
    : products;

  return (

    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-10 md:py-16">
      

      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-0 text-center xl:text-start">
        <SectionHeading
          heading={"Popular"}
          colorHeading={"Products"}
          description={"Shop online for new arrivals and get free shipping!"}
        ></SectionHeading>

        {/* ক্যাটাগরি লিস্ট: মোবাইলে wrap হয়ে সুন্দরভাবে সাজানো থাকবে */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
          {categorys.map((category) => (
            <div key={category?.id}> {/* Key prop added for safety */}
              <p
                onClick={() => handleCategoryId(category?.id)}
                // ক্যাটাগরি টেক্সট হোভার এফেক্ট এবং রেস্পন্সিভ ফন্ট সাইজ
                className={`cursor-pointer font-medium text-sm md:text-base transition-colors duration-300 hover:text-green-600 ${
                    categoryId === category?.id ? "text-green-600 font-bold" : "text-gray-600"
                }`}
              >
                {category?.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 pt-10 md:pt-14">
          {filterProduct
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 md:mt-12">
        <Link to="/shop">
          <div className="flex cursor-pointer justify-center items-center bgp hover:bg-bgp transition-all duration-300 py-3 md:py-4 px-6 md:px-8 rounded-md w-full sm:w-auto text-white font-semibold gap-2 md:gap-3 shadow-md hover:shadow-lg hover:-translate-y-1">
            <p className="text-sm md:text-base">View All Products</p>
            <TbCategory className="text-lg md:text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;