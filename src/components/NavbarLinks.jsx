import React from "react";

const NavbarLink = ({ label, href }) => {
  return (
    <div className="md:flex space-x-4">
      <button className="block text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all">
        <a href={href}>{label}</a>
      </button>
    </div>
  );
};

export default NavbarLink;
