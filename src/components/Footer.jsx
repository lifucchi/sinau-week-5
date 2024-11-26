import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} | Developed by Rifka Annisa</p>
      </div>
    </footer>
  );
};

export default Footer;