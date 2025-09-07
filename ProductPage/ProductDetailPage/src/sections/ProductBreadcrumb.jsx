import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductBreadcrumb = ({
  breadcrumbs = [],
  onBackClick,
  productDetailsText = "Product Details",
}) => {
  // Default breadcrumb data if none provided
  const defaultBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Jewellery", href: "/jewellery" },
    { label: "Gifts", href: "/gifts" },
    { label: "Necklace", href: "/necklace" },
    { label: "Chains", href: "/chains" },
    { label: "Shining Diamond...", href: "#", active: true },
  ];

  const items = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  return (
    <>
      {/* Desktop Breadcrumb - Hidden on mobile */}
      <nav className="hidden md:block ml-40 mt-10 py-4 px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <FaChevronRight className="h-3 w-3 text-gray-400 mx-2" />
              )}
              {item.active ? (
                <span className="text-gray-900 font-medium truncate max-w-32">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors truncate"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Mobile Product Details Button - Hidden on desktop */}
      <div className="block md:hidden bg-white border-b border-gray-200">
        <button
          onClick={onBackClick}
          className="flex items-center w-full px-4 py-3 text-left"
        >
          <FaChevronLeft className="h-5 w-5 text-gray-600 mr-3" />
          <span className="text-gray-900 font-medium text-lg">
            {productDetailsText}
          </span>
        </button>
      </div>
    </>
  );
};

export default ProductBreadcrumb;
