import React, { useState } from "react";
import { FaBars, FaTimes, FaHeart, FaShoppingBag } from "react-icons/fa";
import Button from "./Button";

import { User } from "lucide-react";

const ResponsiveNavbar = ({ navigation }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Default navigation data if none provided
  const defaultNavigation = [
    { name: "Gold Jewellery", href: "#", hasDropdown: true },
    { name: "Silver Jewellery", href: "#", hasDropdown: true },
    { name: "Trending Collection", href: "#", hasDropdown: false },
    { name: "Gifts", href: "#", hasDropdown: true },
    { name: "Shop by Occasion", href: "#", hasDropdown: true },
  ];

  const navItems = navigation || defaultNavigation;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav className="hidden lg:block bg-gray-100 shadow-lg">
        <div className="w-full mx-auto pt-2 px-40">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-2xl font-bold text-black">LOGO</div>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 text-xl hover:text-[#ff8f8f] font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <div className="space-x-4">
              <Button bgColor="#ff8f8f" textColor="white">
                LOGIN
              </Button>
              <Button
                bgColor="bg-gray"
                textColor="#ff8f8f"
                borderColor="#ff8f8f"
              >
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Visible on mobile only */}
      <nav className="lg:hidden bg-gray-100 shadow-lg">
        <div className="flex items-center justify-between px-2 py-4">
          {/* Hamburger Menu */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <FaBars className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="text-xl -ml-5 font-bold text-black">LOGO</div>

          {/* Empty div for spacing */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <FaHeart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <FaShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-primary shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-100">
          <h2 className="text-xl font-bold text-black">LOGO</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-gray-900 p-1"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Menu Items */}
        <nav className="py-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center justify-between px-6 py-4 text-white hover:text-[#ff8f8f] hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={toggleSidebar}
            >
              <span className="font-medium text-lg">{item.name}</span>
            </a>
          ))}

          {/* Login/Register Buttons */}
          <div className=" py-3 px-4 flex items-center justify-start">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-rose-400 transition-colors duration-200 text-gray-700 font-medium rounded shadow-sm">
              <User size={18} className="text-gray-600" />
              <span>Login / SignUp</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
