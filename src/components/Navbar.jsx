import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  // Use PUBLIC_URL so it works even if the app is deployed under a subpath (e.g., GitHub Pages)
  const logoSrc = process.env.PUBLIC_URL + "/JT_logo.png";

  return (
    <nav className="bg-white shadow-md p-4 mb-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Left: Logo + Name (click returns Home) */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-85 transition">
          <img
            src={logoSrc}
            alt="JT logo"
            className="h-8 w-8 rounded-full ring-1 ring-black/10"
          />
          <span>Jacques Te</span>
        </Link>

        {/* Right: Nav links + Name button */}
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">
            Projects
          </Link>

          {/* Name button -> smooth scroll to #contact on Home */}
          <HashLink
            smooth
            to="/#contact"
            scroll={(el) => el?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium shadow-sm hover:shadow transition"
            aria-label="Contact Jacques Te"
          >
            <img
              src={logoSrc}
              alt=""
              className="h-5 w-5 rounded-full ring-1 ring-black/10"
            />
            <span>Jacques Te</span>
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
