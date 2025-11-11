import React, { useState } from "react";
import SectionHeading from "../../../../Components/ShareComponents/SectionHeading";
import useData from "../../../../Hooks/useData";
import ProductCard from "../../../../Components/ShareComponents/productCard";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router";

const PopularProduct = () => {
  const { categorys, products } = useData();
  const[categoryId, setCategoryId] = useState()
  const handleCategoryId = (id) => {
    setCategoryId(id) 
  }

  const filterProduct = categoryId ? products.filter(p=> p.categoryId == categoryId) : products

  return (
    <div className="container mx-auto px-24 py-16">
      <div className="flex items-center justify-between">
        <SectionHeading
          heading={"Popular"}
          colorHeading={"Products"}
          description={"Shop online for new arrivals and get free shipping!"}
        ></SectionHeading>

        <div className="flex gap-8">
          {categorys.map((category) => (
            <div>
              <p onClick={() => handleCategoryId(category?.id)} className="cursor-pointer">{category?.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-4 pt-14">
          {filterProduct
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
            .map((product) => (
              <ProductCard product={product}></ProductCard>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/shop">
          <div className="flex cursor-pointer justify-center items-center bgp hover:bg-bgp transition-all duration-300 py-4 px-8 rounded-md w-full sm:w-auto text-white font-semibold gap-3 ">
            <p>View All Products</p>
            <TbCategory />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;
