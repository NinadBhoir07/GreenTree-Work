import React from "react";
import Button from "../components/Button";
import ProductDesc from "./ProductDesc";
import ProductReview from "./ProductReview";
import { GoPackageDependents } from "react-icons/go";
import { FaShieldAlt, FaRegStar } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";

const ProductContainer = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-52 py-4">
      {/* Product Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        Gold-Plated Pearls Necklace
      </h1>

      {/* Product Subtitle */}
      <h2 className="text-xl sm:text-2xl lg:text-xl text-gray-400 mt-2 lg:mt-3">
        Made with 925 Silver
      </h2>

      {/* Rating Section */}
      <div className="flex items-center  text-white p-2 shadow-sm w-fit rounded mt-3 lg:mt-4">
        <div className="bg-green-500">
          <span className="text-sm lg:text-base">4.1</span>
          <span className="text-lg lg:text-xl ml-1">★</span>
        </div>
        <span className="text-black text-lg lg:text-2xl font-bold px-2">
          (23)
        </span>
      </div>

      {/* Price Section */}
      <div className="flex flex-wrap items-center gap-2 mt-2">
        <p className="text-xl lg:text-2xl font-bold">&#8377;1600</p>
        <p className="line-through text-gray-400 text-base lg:text-lg">
          &#8377;2000
        </p>
        <p className="text-lg lg:text-2xl text-green-600 font-bold">
          (20% off)
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
        <div className="p-2 rounded flex text-base lg:text-xl">
          <GoPackageDependents size={30} />
          Easy 30 Day Return
        </div>
        <div className="p-2 rounded flex text-base lg:text-xl">
          <FaRegStar size={30} />
          925 Silver Plating
        </div>
        <div className="p-2 rounded text-base flex lg:text-xl">
          {" "}
          <FaShieldAlt size={30} />
          6-month Warranty
        </div>
        <div className="p-2 rounded text-base flex lg:text-xl">
          <IoRibbonOutline size={30} />
          Premium Gold
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <Button
          bgColor="bg-gray"
          textColor="#ff8f8f"
          borderColor="#ff8f8f"
          className="w-full sm:w-56 h-12 lg:h-14 text-lg lg:text-xl"
        >
          ADD TO CART
        </Button>
        <Button
          bgColor="#ff8f8f"
          textColor="white"
          className="w-full sm:w-56 h-12 lg:h-14 text-lg lg:text-xl"
        >
          BUY NOW
        </Button>
      </div>

      {/* Delivery Section */}
      <div className="w-full p-2 mt-5">
        <h3 className="text-gray-700 font-medium text-lg lg:text-xl my-3">
          Estimated Delivery Time
        </h3>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="w-full px-3 py-3 lg:py-4 pr-20 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 text-sm lg:text-base"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 text-primary hover:bg-red-50 rounded transition-colors duration-200 font-medium text-sm lg:text-base">
            Check
          </button>
        </div>
      </div>

      {/* Offers Section */}
      <div className="flex justify-between items-center w-full mt-4 pr-12">
        <h3 className="px-2 text-base lg:text-lg">
          Offers <span className="text-sm text-gray-400">2 available</span>
        </h3>
        <button className="text-primary rounded font-medium text-sm lg:text-base">
          Check
        </button>
      </div>

      <p className="italic px-2 text-sm lg:text-base text-gray-600 mt-1">
        Coupon can be applied at checkout
      </p>

      {/* Divider */}
      <div className="h-px bg-primary my-4" />

      {/* Additional Components */}
      <ProductDesc />
      <ProductReview />
    </div>
  );
};

export default ProductContainer;
