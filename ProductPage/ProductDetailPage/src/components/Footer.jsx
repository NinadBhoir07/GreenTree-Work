import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { quickLinks, detailsLinks } from "../data/index";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-4">
      {/* Main footer content */}
      <div className="container w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-primary-dark font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-primary-dark text-lg transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details Columns */}
          {[1, 2].map((columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-primary-dark text-lg font-semibold mb-4">
                Details
              </h3>
              <ul className="space-y-2">
                {detailsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-primary-dark text-lg transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Column */}
          <div>
            <h3 className="text-primary-dark text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 mb-4">
              <p className="font-semibold">Elegant Jewels</p>
              <p className="text-lg">
                SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida,
                Uttar Pradesh 201301
              </p>

              <div className="mt-4">
                <p className="text-sm mb-2">
                  For any suggestions, queries or complaints please contact us:
                </p>
                <p className="font-semibold">Elegantjewel Private Limited</p>
                <p className="text-lg">contact@elegantjewels.com</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className=" md:hidden gap-4 grid grid-cols-2">
          {/* Quick Links */}
          <div className>
            <h3 className="text-primary-dark font-semibold text-base mb-3 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-primary-dark text-sm transition-colors block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-primary-dark font-semibold text-base mb-3 pb-2">
              Details
            </h3>
            <ul className="space-y-2">
              {detailsLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-primary-dark text-sm transition-colors block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-primary-dark font-semibold text-base mb-3 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm">Elegant Jewels</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida,
                  Uttar Pradesh 201301
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">
                  For any suggestions, queries or complaints please contact us:
                </p>
                <p className="font-semibold text-sm">
                  Elegantjewel Private Limited
                </p>
                <p className="text-sm text-gray-600">
                  contact@elegantjewels.com
                </p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-primary-dark font-semibold text-base mb-3 py-2">
              Our Social Links:
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:block my-10 py-10">
          <div className="flex flex-col items-center mb-5 float-start">
            <span className="text-gray-700 text-lg">Our Social Links:</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="#"
                className="text-primary-dark hover:text-primary transition-colors"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="bg-red-400 text-white py-3">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm">
            © 2024 Elegant Jewels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
