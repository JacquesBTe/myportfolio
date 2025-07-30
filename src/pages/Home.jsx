import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 py-10 gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Jacques Benzly Te</h1>
          <p className="text-lg text-gray-700 mb-6">
            Electrical Engineer focused on VLSI Design, Embedded Systems, AI, and Hardware Engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/jacques-te/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:jacquezte@gmail.com"
              className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
            >
              Email Me
            </a>

            <Link
              to="/projects"
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            >
              View Projects
            </Link>

            {/* New: smooth-scroll to #contact on Home */}
            <HashLink
              smooth
              to="/#contact"
              className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
            >
              Contact
            </HashLink>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/Jacques.jpg"}
            alt="Jacques Te"
            className="w-48 h-48 rounded-full shadow-md object-cover"
          />
        </div>
      </section>

      {/* CONTACT (target for /#contact) */}
      <section
        id="contact"
        className="scroll-mt-24 bg-white px-6 py-16 border-t"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            I’m open to opportunities and collaborations in VLSI, embedded systems, and hardware design.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:jacquezte@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
            >
              <span>📧</span>
              <span>jacquezte@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jacques-te/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
