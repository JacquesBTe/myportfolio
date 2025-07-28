import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-16 px-4">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jacques Benzly Te 👋</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-600 mb-8">
        VLSI & Hardware Design | Embedded Systems | AI | Analog Circuits | Communications
      </p>

      {/* Call to Action Buttons */}
      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/about">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            About Me
          </button>
        </Link>

        <Link to="/projects">
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
            View Projects
          </button>
        </Link>
      </div>

      {/* Optional Quote or Vibe */}
      <p className="mt-12 text-sm italic text-gray-500">
        "Engineering is the art of turning imagination into reality."
      </p>
    </div>
  );
};

export default Home;
