import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { asset } from "../lib/asset";

const Navbar = () => {
  const logoSrc = asset("JT_logo.png");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-accent" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logoSrc}
            alt="JT logo"
            className="h-8 w-8 rounded-full ring-1 ring-white/15 group-hover:ring-accent/60 transition"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            Jacques<span className="text-accent">.</span>Te
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-7">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <HashLink
            smooth
            to="/#contact"
            className="rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/10 hover:shadow-glow transition"
          >
            Contact
          </HashLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-gray-200 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-ink-900/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
            Projects
          </NavLink>
          <HashLink
            smooth
            to="/#contact"
            className="text-accent text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
