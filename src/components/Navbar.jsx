import React, { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import HamburgerMenu from "./HamburgerMenu";
import NavbarButtons from "./NavbarButtons";
import NavbarLink from "./NavbarLinks";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white px-4 py-3 sticky top-0 z-10">
      <div className="container mx-auto flex items-center flex  justify-between">
        <NavbarBrand />
        <div className="hidden md:flex">
          <NavbarList />
        </div>
        <div className="hidden md:flex">
          <NavbarButtons />
        </div>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
