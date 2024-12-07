import { Link } from "react-router-dom";

const NavbarLink = ({ label, href }) => {
  return (
    <div className="md:flex space-x-4">
      <Link to={href} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all text-lg" aria-label={label}>
        {label}
      </Link>
    </div>
  );
};

export default NavbarLink;
