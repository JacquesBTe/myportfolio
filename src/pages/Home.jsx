import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Jacques.jpg"}
          alt="Jacques Te"
          className="w-100 h-100 rounded-full shadow-md"
        />
      </div>
    </section>
  );
};

export default Home;
