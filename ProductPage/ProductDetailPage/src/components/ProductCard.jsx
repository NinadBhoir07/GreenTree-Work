import React from "react";
import Button from "./Button";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({
  imageSrc,
  productName,
  originalPrice,
  discountedPrice,
  isBestseller = true,
}) => {
  return (
    <div className="relative overflow-hidden transform transition duration-300 hover:scale-105 border-none mt-3 sm:mt-4 lg:mt-5">
      {/* Bestseller Badge */}
      {isBestseller && (
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-10">
          <span className="bg-red-700 text-white text-xs sm:text-sm lg:text-lg font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            BestSeller
          </span>
        </div>
      )}

      {/* Heart Icon */}
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10">
        <button className="p-1.5 sm:p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-sm">
          <FaRegHeart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative pb-56 sm:pb-56 lg:pb-56 overflow-hidden border-0">
        {imageSrc && (
          <img
            className="absolute h-full w-full object-cover border-0 outline-none"
            src={imageSrc}
            alt={productName}
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-2 sm:p-3 lg:p-4">
        {/* Product Name */}
        <h3 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg mb-1 truncate">
          {productName}
        </h3>

        {/* Price Section */}
        <div className="flex items-baseline mb-2 flex-wrap gap-1">
          {discountedPrice && (
            <span className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl">
              ₹{discountedPrice}
            </span>
          )}
          {originalPrice && (
            <span className="text-gray-500 line-through text-xs sm:text-sm lg:text-sm">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          bgColor="#ff8f8f"
          textColor="white"
          className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base lg:text-lg"
          size="default"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
