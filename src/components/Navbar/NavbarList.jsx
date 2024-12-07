import React from "react";
import NavbarLink from "./NavbarLinks";

import { useAuth } from "../../context/AuthContext";

const NavbarList = () => {
  const { user } = useAuth();

  return (
    <div className="md:flex ">
      <NavbarLink label="Now Playing" href="/nowplaying" />
      <NavbarLink label="Popular" href="/popular" />
      <NavbarLink label="Top Rated" href="/toprated" />
      {/* <NavbarLink label="Upcoming" href="#upcoming" /> */}
      {user && <NavbarLink label="Favorites" href="/favorites" />}
    </div>
  );
};

export default NavbarList;
