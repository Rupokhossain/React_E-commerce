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
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
        <Link to="/blog" className="text-green-600 underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 flex flex-col justify-start items-center">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-96 h-96 object-cover rounded-2xl mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">
        {blog.date} • By {blog.author}
      </p>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-10">
        {blog.content}
      </div>
      <Link to="/blog" className="text-green-600 font-semibold hover:underline">
        ← Back to All Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
