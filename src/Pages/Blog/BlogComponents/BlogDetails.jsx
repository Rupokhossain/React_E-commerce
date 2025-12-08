import React from "react";
import { Link, useParams } from "react-router";

const blogs = [
  {
    id: 1,
    title: "Fresh Farm Eggs — Everything You Need to Know 🍳",
    date: "November 8, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_1.jpg",
    content: `
      🥚 Organic Brown Eggs are rich in protein and essential nutrients. 
      They come from healthy hens fed with natural grains — no chemicals or preservatives.
      
      ✅ Benefits:
      • High-quality protein source  
      • Great for muscle recovery  
      • Contains essential vitamins and minerals  
      
      Pro Tip: Store eggs in a cool, dry place. Avoid washing before storing!
    `,
  },
  {
    id: 2,
    title: "Top Trending Fashion in Casual Clothes 👕",
    date: "October 30, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/35_2.jpg",

    content: `
      Casual wear is all about comfort and style. Our best-selling men's shirts and denim jeans 
      bring you both — made from 100% soft cotton and premium denim.
      
      👕 Tips:
      • Pair a light shirt with dark jeans for contrast.  
      • Roll sleeves for a relaxed look.  
      • Add a leather belt and sneakers to complete the outfit.
    `,
  },
  {
    id: 3,
    title: "Elegant Timepieces — Choosing the Right Watch ⌚",
    date: "October 25, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/32_1.jpg",

    content: `
      A great watch defines your personality. 
      Choose from leather straps for class or stainless steel for durability.
      
      🕰️ Quick Guide:
      • Formal: Leather strap watches  
      • Casual: Digital or minimal design  
      • Luxury: Gold or metallic finish  
      
      Keep your watch clean and avoid direct sunlight for long durability.
    `,
  },
  {
    id: 4,
    title: "Perfect Dresses for Every Occasion 👗",
    date: "October 18, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/38_1.jpg",
    content: `
      Every woman deserves to shine. From maxi dresses to party gowns — 
      we bring you the best materials like satin and cotton blend.
      
      🌸 Fashion Tip:
      • Pair floral dresses with light accessories.  
      • Use pastel tones for day events and darker tones for evening parties.  
      • Always choose a size that fits comfortably.
    `,
  },
  {
    id: 5,
    title: "The Sunglass Style Guide 🕶️",
    date: "October 10, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-4.png",
    content: `
      Sunglasses not only protect your eyes but also elevate your look. 
      Whether round, square, or aviator — choose the right pair for your face shape.
      
      😎 Quick Tips:
      • Round face → Square frames  
      • Square face → Round frames  
      • Heart shape → Cat-eye frames  
      
      All our sunglasses come with UV protection and durable frames.
    `,
  },
  {
    id: 6,
    title: "Complete Beauty Care with the Perfect Cosmetics 💄",
    date: "September 29, 2025",
    author: "Siam",
    image:
      "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/50_1.jpg",
    content: `
      Beauty starts with good products. 
      Our cosmetics collection includes lipsticks, foundation, and beauty kits made from safe ingredients.
      
      💄 Beauty Guide:
      • Always match foundation to your skin tone.  
      • Use matte lipstick for long wear.  
      • Clean brushes regularly for hygiene.  
      
      Discover your glow — naturally and safely.
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto text-center py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Blog Not Found</h2>
        <p className="text-gray-500 mb-6">The blog post you are looking for doesn't exist.</p>
        <Link to="/blog" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 md:py-16 px-4 md:px-8 lg:px-16 max-w-4xl">
      
      <div className="mb-6 md:mb-8">
        <Link
          to="/blog"
          className="text-gray-500 font-semibold hover:text-green-600 transition-all flex items-center gap-2 w-max"
        >
          <span>←</span> Back to All Blogs
        </Link>
      </div>

      <div className="w-full h-64 sm:h-80 md:h-[450px] overflow-hidden rounded-xl shadow-lg mb-8 bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-sm md:text-base text-gray-500 mb-8 border-b border-gray-100 pb-6">
          <p className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
             {blog.date}
          </p>
          <p>
            By <span className="font-semibold text-gray-800">{blog.author}</span>
          </p>
        </div>

        <div className="text-gray-700 text-base md:text-lg lg:text-xl whitespace-pre-line leading-relaxed md:leading-loose">
          {blog.content}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <Link 
            to="/blog" 
            className="inline-block px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-600 hover:text-white transition-all duration-300"
        >
            View More Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;