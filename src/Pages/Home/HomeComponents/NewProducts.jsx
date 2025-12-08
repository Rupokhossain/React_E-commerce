import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import useData from "../../../Hooks/useData";
import ProductCard from "../../../Components/ShareComponents/ProductCard";

const NewProducts = () => {

    const { products } = useData()

  return (
    <div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-10 md:py-16">
        <div className="mb-2 md:mb-4 text-center lg:text-start">
          <SectionHeading
            heading={"Day of"}
            colorHeading={"The deal"}
            description={"Don't wait. The time will never be just right."}
          ></SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 pt-10 md:pt-14">
            {
                products
                .slice(-5)
                .map((product, index) => (
                    <ProductCard key={product.id || index} product={product}></ProductCard>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default NewProducts;