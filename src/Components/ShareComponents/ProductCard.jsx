import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/shop/${product.id}`}>
        <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col h-90 ">
          <img
            className="w-80 h-[200px] object-cover"
            src={product.image}
            alt=""
          />

          <div>
            <div className="p-4 flex flex-col">
              <p className="text-gray-400 mb-2">{product.categoryName}</p>
              <h3 className="font-semibold text-gray-700 h-12">
                {product.name}
              </h3>

              <div className="flex gap-1 text-orange-500 my-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex gap-3">
                <p className="cp flex items-center">
                  {product.price}
                  <TbCurrencyTaka />
                </p>
                <p className="line-through flex items-center text-gray-400">
                  {product.mrp}
                  <TbCurrencyTaka />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
