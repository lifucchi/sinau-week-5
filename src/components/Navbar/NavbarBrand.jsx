import React from "react";
import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <div className="text-2xl font-bold hidden md:flex ">
      <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 font-bold">
        5Movies
      </Link>
    </div>
  );
};

export default NavbarBrand;
