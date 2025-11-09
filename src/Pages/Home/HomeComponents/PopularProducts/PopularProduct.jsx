import React from "react";
import SectionHeading from "../../../../Components/ShareComponents/SectionHeading";
import useData from "../../../../Hooks/useData";
import ProductCard from "../../../../Components/ShareComponents/productCard";

const PopularProduct = () => {
  const { categorys, products } = useData();
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
              <p className="cursor-pointer">{category?.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          {products.map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
