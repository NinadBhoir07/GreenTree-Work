import { FaRegUserCircle } from "react-icons/fa";
import SmallImageContainer from "../components/SmallImageContainer";

const ProductReview = () => {
  return (
    <div className="px-2 lg:px-0">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl lg:text-xl font-bold">
        Customer Ratings
      </h2>

      {/* Divider */}
      <div className="h-px bg-primary my-3 lg:my-4" />

      {/* First Review */}
      <div className="mb-4 lg:mb-6">
        {/* User Info */}
        <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
          <span>
            <FaRegUserCircle
              size={24}
              className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-600"
            />
          </span>
          <p className="text-base sm:text-lg lg:text-xl font-medium">Anu</p>
        </div>

        {/* Date */}
        <p className="text-gray-400 text-xs sm:text-sm lg:text-sm mb-2">
          15/08/24
        </p>

        {/* Review Text */}
        <p className="text-sm sm:text-base lg:text-lg my-2 lg:my-3 leading-relaxed">
          Such a gorgeous necklace. Got many compliments as well. Absolutely
          loved it
        </p>

        {/* Review Images */}
        <div className="flex flex-wrap gap-2 lg:space-x-2 lg:gap-0">
          <SmallImageContainer />
          <SmallImageContainer />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-primary my-3 lg:my-4" />

      {/* Second Review */}
      <div className="mb-4 lg:mb-6">
        {/* User Info */}
        <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
          <span>
            <FaRegUserCircle
              size={24}
              className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-600"
            />
          </span>
          <p className="text-base sm:text-lg lg:text-xl font-medium">Anu</p>
        </div>

        {/* Date */}
        <p className="text-gray-400 text-xs sm:text-sm lg:text-sm mb-2">
          15/08/24
        </p>

        {/* Review Text */}
        <p className="text-sm sm:text-base lg:text-lg my-2 lg:my-3 leading-relaxed">
          Looks beautiful 😻❤❤❤Go for it girls😍💝🎉the quality is good.
        </p>

        {/* Review Images */}
        <div className="flex flex-wrap gap-2 lg:space-x-2 lg:gap-0 mb-4 lg:mb-5">
          <SmallImageContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
