// HamburgerMenu.js
import React, { useState } from "react";
import NavbarButton from "./NavbarButtons";
import NavbarList from "./NavbarList";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden relative">
        {/* Hamburger Icon */}
        <button className="text-gray-300 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white z-50">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center justify-center space-y-6 h-full text-lg">
              <NavbarList />
              <NavbarButton />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HamburgerMenu;
