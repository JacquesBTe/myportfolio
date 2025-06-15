import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 mb-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Jacques Te</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
