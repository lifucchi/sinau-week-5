import React from "react";
import NavbarLink from "./NavbarLinks";

const NavbarBrand = () => {
  return (
    <div className="md:flex ">
      <NavbarLink label="Now Playing" href="#nowplaying" />
      <NavbarLink label="Popular" href="#popular" />
      <NavbarLink label="Top Rated" href="#toprated" />
      <NavbarLink label="Upcoming" href="#upcoming" />
    </div>
  );
};

export default NavbarBrand;
