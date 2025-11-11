import React from "react";
import useData from "../../Hooks/useData";
import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import ProductCard from "./productCard";
import { IoCartOutline } from "react-icons/io5";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const findProducts = products.find((p) => p.id == id);
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* ----------- Image Section ----------- */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
          <img
            src={findProducts?.image}
            alt={findProducts?.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* ----------- Details Section ----------- */}
        <div>
          <p className="ts">{findProducts?.categoryName}</p>
          <h3 className="text-4xl font-semibold">{findProducts?.name}</h3>

          <div className="flex items-center gap-12">
            <div className="flex gap-1 py-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <p className="ts">Total Rating : {findProducts?.ratings}</p>
            </div>
          </div>

          <div className="flex gap-4 text-2xl ">
            <p>Price : $ {findProducts?.price}</p>
            <p className="line-through text-gray-400">$ {findProducts?.mrp}</p>
          </div>

          <div>
            <p className="ts mb-4">{findProducts?.description}</p>
            <p className="font-semibold ">
              SKU :
              <span className="font-normal text-gray-600 ml-2">
                {findProducts?.sku}
              </span>
            </p>
            <p className="font-semibold">
              Stock:
              <span className="font-normal text-gray-600 ml-2">
                {findProducts?.stock}
              </span>
            </p>
            <p className="font-semibold">
              Closure :
              <span className="font-normal text-gray-600 ml-2">
                {findProducts?.closure}
              </span>
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="font-semibold mr-3 my-4">Size : </p>
            {findProducts?.weightOptions.map((w) => (
              <div>
                <p>
                  <span className="font-normal text-gray-600 btn btn-xs">
                    {w}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 my-4">
            <div className="flex gap-4 border border-gray-200 px-8 py-2 rounded-md">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div>
              <button className="btn bgp text-gray-100">Add To Cart</button>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="text-[#3BB77E] font-semibold hover:underline duration-300 transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 mt-20 ">
        <div className="text-center">
          <SectionHeading
            heading={"Top Rated"}
            colorHeading={"Seleing Products"}
            discription={"High-quality denim jeans for men with a comfortable"}
          ></SectionHeading>
        </div>
        <div className="grid grid-cols-5 mt-10 gap-6">
          {products.slice(0, 5).map((p) => (
            <ProductCard product={p}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
