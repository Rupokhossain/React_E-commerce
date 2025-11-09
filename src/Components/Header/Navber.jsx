import React from "react";
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router";

const Navber = () => {
  return (
    <div className="border-y py-3 border-gray-200">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-2 bgp text-white rounded-md px-6 py-2 hover:scale-110 transition-all cursor-pointer duration-300">
          <BiCategory />
          <p>All Category</p>
        </div>

        <div className="flex gap-12">
          <NavLink className={({ isActive }) => (isActive ? `cp font-semibold` : ``)} to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp font-semibold` : ``)}
            to="/shop"
          >
            Shop Now
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp font-semibold` : ``)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp font-semibold` : ``)}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `cp font-semibold` : ``)}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2 bgp text-white rounded-md px-6 py-2 hover:scale-110 transition-all cursor-pointer duration-300">
          <LuShoppingCart />
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navber;
