import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    // basename helps on GitHub Pages when your site is under /myportfolio
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        {/* Fallback: any unknown path -> Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
