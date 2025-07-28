import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 mb-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:opacity-80">
          Jacques Benzly Te
          </Link>
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
