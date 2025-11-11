import React, { useState } from "react";
import useData from "../../Hooks/useData";
import ProductCard from "../../Components/ShareComponents/productCard";



const ShopNow = () => {
  const { products, categorys } = useData();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState(null);

  const handleClick = (id) => {
    setSelectedCategory((prev) => (prev === id ? null : id));
  };
  const handleClickWidth = (w) => {
    setSelectedWidth((prev) => (prev === w ? null : w));
  };

  // clear filter
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedWidth(null);
  };

  const filterData = products.filter((p) => {
    const matchCategory = selectedCategory
      ? p.categoryId == selectedCategory
      : products;
    const matchWidth = selectedWidth ? p.width == selectedWidth : products;

    return matchCategory && matchWidth;
  });
  return (
    <div>
      <div className="grid grid-cols-12 gap-8 container mx-auto mt-12">
        <div className="col-span-3">
          <div className="border border-gray-200 p-3 rounded-md">
            <p className="border-b border-gray-200 pb-3 mb-4 font-semibold text-lg">
              Category
            </p>
            {categorys.map((category) => (
              <div className="flex gap-2 items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategory === category.id}
                  onChange={() => handleClick(category.id)}
                  className="cursor-pointer"
                />
                <p
                  className="cursor-pointer"
                  onClick={() => handleClick(category.id)}
                >
                  {category.name}
                </p>
              </div>
            ))}

            <div className="mt-12">
              <p className="border-b border-gray-200 pb-3 mb-4 font-semibold text-lg">
                Width
              </p>
              {[...new Set(products.map((p) => p.width))].map((w) => (
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedWidth === w}
                    onChange={() => handleClickWidth(w)}
                    className="cursor-pointer"
                  />
                  <p
                    className="cursor-pointer"
                    onClick={() => handleClickWidth(w)}
                  >
                    {w}
                  </p>
                </div>
              ))}
            </div>

            {/* Clear Filter */}
            {(selectedCategory || selectedWidth) && (
              <button
                onClick={clearFilters}
                className="mt-6 cursor-pointer bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filterData.length > 0 ? (
              filterData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 mt-10">
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
