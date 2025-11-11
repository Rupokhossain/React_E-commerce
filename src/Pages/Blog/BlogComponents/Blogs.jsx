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
    <div>
      <div className="container mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionHeading
            heading={"Our "}
            colorHeading={"Blogs"}
            description={
              "Explore style tips, product guides, and expert advice from each of our categories."
            }
          ></SectionHeading>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl cursor-pointer shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img src={blog.image} alt={blog.title} className="w-[360px] h-[200px] object-top-left" />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2">
                  {blog.date} • By {blog.author} • {blog.category}
                </p>
                <h3 className="text-xl font-semibold mb-2 h-12">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm h-28">
                  {blog.desc}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
