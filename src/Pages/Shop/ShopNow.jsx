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
      {/* Container Padding & Main Grid Responsive */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Filter Section */}
        <div className="lg:col-span-3">
          <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm sticky top-24">
            
            {/* Categories */}
            <div className="mb-8">
              <p className="border-b border-gray-200 pb-3 mb-4 font-bold text-lg text-gray-800">
                Category
              </p>
              <div className="space-y-2">
                {categorys.map((category) => (
                  <div key={category.id} className="flex gap-3 items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategory === category.id}
                      onChange={() => handleClick(category.id)}
                      className="cursor-pointer w-4 h-4 accent-green-600"
                    />
                    <p
                      className={`cursor-pointer transition-colors duration-200 ${selectedCategory === category.id ? "text-green-600 font-medium" : "text-gray-600 group-hover:text-green-600"}`}
                      onClick={() => handleClick(category.id)}
                    >
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Width Filter */}
            <div>
              <p className="border-b border-gray-200 pb-3 mb-4 font-bold text-lg text-gray-800">
                Width
              </p>
              <div className="space-y-2">
                {[...new Set(products.map((p) => p.width))].map((w, index) => (
                  <div key={index} className="flex gap-3 items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedWidth === w}
                      onChange={() => handleClickWidth(w)}
                      className="cursor-pointer w-4 h-4 accent-green-600"
                    />
                    <p
                      className={`cursor-pointer transition-colors duration-200 ${selectedWidth === w ? "text-green-600 font-medium" : "text-gray-600 group-hover:text-green-600"}`}
                      onClick={() => handleClickWidth(w)}
                    >
                      {w}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Filter Button */}
            {(selectedCategory || selectedWidth) && (
              <button
                onClick={clearFilters}
                className="mt-6 cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid Section */}

        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {filterData.length > 0 ? (
              filterData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-xl font-semibold">No products found</p>
                <p className="text-sm mt-2">Try changing your filters</p>
                <button 
                    onClick={clearFilters} 
                    className="mt-4 text-green-600 underline cursor-pointer"
                >
                    View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;