import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About"; // Pastikan file About.tsx sudah ada

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
