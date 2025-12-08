import React from "react";
import { Link } from "react-router";
import SectionHeading from "../../../Components/ShareComponents/SectionHeading";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Fresh Farm Eggs — Everything You Need to Know 🍳",
      date: "November 8, 2025",
      author: "Siam",
      category: "Eggs",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_1.jpg",
      desc: "Discover how organic brown eggs are produced, their amazing health benefits, and why you should choose farm-fresh eggs over regular ones.",
    },
    {
      id: 2,
      title: "Top Trending Fashion in Casual Clothes 👕",
      date: "October 30, 2025",
      author: "Siam",
      category: "Clothes",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/35_2.jpg",
      desc: "From stylish men’s shirts to classic denim jeans, explore the latest clothing trends that combine comfort, quality, and modern design.",
    },
    {
      id: 3,
      title: "Elegant Timepieces — Choosing the Right Watch ⌚",
      date: "October 25, 2025",
      author: "Siam",
      category: "Watches",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/32_1.jpg",
      desc: "A wristwatch isn’t just for time — it’s a statement of class. Learn how to pick the perfect watch based on design, material, and durability.",
    },
    {
      id: 4,
      title: "Perfect Dresses for Every Occasion 👗",
      date: "October 18, 2025",
      author: "Siam",
      category: "Dresses",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/38_1.jpg",
      desc: "From floral maxi dresses to elegant party gowns, find out which styles are trending this season and how to match them perfectly.",
    },
    {
      id: 5,
      title: "The Sunglass Style Guide 🕶️",
      date: "October 10, 2025",
      author: "Siam",
      category: "Glasses",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-4.png",
      desc: "Sunglasses are more than an accessory — they’re protection and fashion in one. Discover which frame types suit your face best.",
    },
    {
      id: 6,
      title: "Complete Beauty Care with the Perfect Cosmetics 💄",
      date: "September 29, 2025",
      author: "Siam",
      category: "Cosmatics",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/50_1.jpg",
      desc: "Makeup is an art. Learn how to choose the right lipstick shades, foundation tones, and essential beauty kits for your skin type.",
    },
    {
      id: 7,
      title: "The Sunglass Style Guide 🕶️",
      date: "October 10, 2025",
      author: "Siam",
      category: "Glasses",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-4.png",
      desc: "Sunglasses are more than an accessory — they’re protection and fashion in one. Discover which frame types suit your face best.",
    },
    {
      id: 8,
      title: "Top Trending Fashion in Casual Clothes 👕",
      date: "October 30, 2025",
      author: "Siam",
      category: "Clothes",
      image:
        "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/35_2.jpg",
      desc: "From stylish men’s shirts to classic denim jeans, explore the latest clothing trends that combine comfort, quality, and modern design.",
    },
  ];

  return (
    <div className="bg-gray-50/50">
      <div className="container mx-auto py-10 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <SectionHeading
            heading={"Our "}
            colorHeading={"Blogs"}
            description={
              "Explore style tips, product guides, and expert advice from each of our categories."
            }
          ></SectionHeading>
        </div>

        {/* Blog Grid: Responsive (Mobile: 1, Tab: 2, Laptop: 3, Desktop: 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Image Container with Overflow Hidden */}
              <div className="relative overflow-hidden h-52 sm:h-56 rounded-t-xl">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                {/* Optional Category Badge on Image */}
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {blog.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col grow">
                {/* Date & Author */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                   <span>{blog.date}</span>
                   <span>By {blog.author}</span>
                </div>

                {/* Title (Line clamped to 2 lines) */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug line-clamp-2 group-hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
                
                {/* Description (Line clamped to 3 lines) */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 grow">
                  {blog.desc}
                </p>

                {/* Read More Link */}
                <div className="mt-auto pt-3 border-t border-gray-100">
                    <Link
                    to={`/blog/${blog.id}`}
                    className="text-green-600 font-semibold text-sm hover:underline flex items-center gap-1 transition-all"
                    >
                    Read More <span className="text-lg">→</span>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;