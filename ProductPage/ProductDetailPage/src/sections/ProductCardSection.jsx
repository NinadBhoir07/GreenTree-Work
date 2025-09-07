import React from "react";
import ProductCard from "../components/ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductCardSection = () => {
  return (
    <div className="relative w-full mt-3 sm:mt-4 lg:mt-5">
      {/* Similar to this Section */}
      <div className="justify-center w-full flex my-4 sm:my-6 lg:my-8">
        <p className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-center px-4">
          Similar to this
        </p>
      </div>

      {/* Desktop Layout - Similar to this */}
      <div className="hidden md:flex relative w-full gap-4 px-4 border-0 mb-6 lg:mb-8">
        <div className="items-center flex border-0">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 border-0">
            <FaAngleLeft className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-4 w-full gap-4 border-0">
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
        </div>

        <div className="items-center flex border-0">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 border-0">
            <FaAngleRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Layout - Similar to this (2x2 Grid) */}
      <div className="block md:hidden px-4 mb-6">
        <div className="grid grid-cols-2 gap-3 w-full">
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
        </div>
      </div>

      {/* Top Picks For You Section */}
      <div className="justify-center w-full flex my-8 sm:my-6 lg:my-8">
        <p className="text-xl sm:text-2xl lg:text-4xl mt-8 font-extrabold text-center px-4">
          Top Picks For You
        </p>
      </div>

      {/* Desktop Layout - Top Picks */}
      <div className="hidden md:flex relative w-full gap-4 px-4 border-0">
        <div className="items-center flex border-0">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 border-0">
            <FaAngleLeft className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-4 w-full gap-4 border-0">
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
        </div>

        <div className="items-center flex border-0">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 border-0">
            <FaAngleRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Layout - Top Picks (2x2 Grid) */}
      <div className="block md:hidden px-4">
        <div className="grid grid-cols-2 gap-3 w-full">
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
          <ProductCard
            productName="Rose Gold Earrings with alloy"
            originalPrice={2999}
            discountedPrice={1999}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSection;
