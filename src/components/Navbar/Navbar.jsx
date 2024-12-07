import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import NavbarBrand from "./NavbarBrand";
import HamburgerMenu from "../HamburgerMenu";
import NavbarList from "./NavbarList";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center flex  justify-between">
        <NavbarBrand />
        <div className="hidden md:flex">
          <NavbarList />
        </div>
        <div className="md:flex space-x-4 md:flex ">
          {user && (
            <>
              <button onClick={handleLogout} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all">
                <a href="#">Logout</a>
              </button>
              <button className="flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all">
                <Link to="/profile" className="flex items-center">
                  <FaUser className="mr-2" />
                  Profile
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
