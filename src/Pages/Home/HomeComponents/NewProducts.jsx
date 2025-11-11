import React from "react";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";
import ProductCard from "../../../Components/ShareComponents/productCard";
import useData from "../../../Hooks/useData";

const NewProducts = () => {

    const { products } = useData()

  return (
    <div>
      <div className="container mx-auto px-24 py-16">
        <div>
          <SectionHeading
            heading={"Day of"}
            colorHeading={"The deal"}
            description={"Don't wait. The time will never be just right."}
          ></SectionHeading>
        </div>

        <div className="grid grid-cols-5 gap-4 pt-14">
            {
                products
                .slice(-5)
                .map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
