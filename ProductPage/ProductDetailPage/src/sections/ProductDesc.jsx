import React from "react";
import { RiArrowRightDownBoxLine } from "react-icons/ri";

const ProductDesc = () => {
  return (
    <div className="mt-4 lg:mt-5 px-2 lg:px-0">
      {/* Product Description Title */}
      <h2 className="font-bold text-lg sm:text-xl lg:text-xl mb-3 lg:mb-4">
        Product Description
      </h2>

      {/* Product Details */}
      <div className="space-y-2 lg:space-y-1">
        <p className="font-bold text-sm flex sm:text-base lg:text-base">
          <RiArrowRightDownBoxLine size={20} color={"green"} />
          Material:{" "}
          <span className="text-gray-400 font-normal">925 Sterling Silver</span>
        </p>

        <p className="font-bold text-sm flex sm:text-base lg:text-base">
          <RiArrowRightDownBoxLine size={20} color={"green"} />
          Plating: <span className="text-gray-400 font-normal">18K Gold</span>
        </p>

        <p className="font-bold text-sm flex sm:text-base lg:text-base">
          <RiArrowRightDownBoxLine size={20} color={"green"} />
          Weight: <span className="text-gray-400 font-normal">10grams</span>
        </p>

        <p className="font-bold text-sm flex sm:text-base lg:text-base">
          <RiArrowRightDownBoxLine size={20} color={"green"} />
          Stone Type:{" "}
          <span className="text-gray-400 font-normal">Premium Jerkin</span>
        </p>
      </div>

      {/* Shipping Section */}
      <h2 className="text-base sm:text-lg lg:text-xl font-bold mt-4 lg:mt-8">
        Shipping
      </h2>

      <p className="text-gray-400 text-sm sm:text-base lg:text-base mt-1">
        Get it by <span className="text-primary font-medium">25 Sept</span>
      </p>

      {/* Divider */}
      <div className="h-px bg-primary my-3 lg:my-4" />
    </div>
  );
};

export default ProductDesc;
