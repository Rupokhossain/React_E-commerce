import React from "react";
import logo from "../../../src/assets/image/logo1.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";

const MidHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto py-3">
        <img className="w-20 p-1 -mt-4" src={logo} alt="" />

        <div>
          <label className="input w-md focus-within:outline-none focus:outline-none outline-0 ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="w-96 focus-within:outline-0" required placeholder="Search . . ." />
          </label>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <CiUser className="text-3xl"/>
            <div className="">
              <p className="ct">Account</p>
              <p className="ts">Login</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <CiShoppingCart  className="text-3xl"/>
            <div className="">
              <p className="ct">Cart</p>
              <p className="ts">Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
