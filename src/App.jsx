import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// Vite exposes the GitHub Pages base path here ("/myportfolio/").
// react-router wants it without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
