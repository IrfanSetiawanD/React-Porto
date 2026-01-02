import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        {/* Tambahkan pt-24 (padding top) di sini agar konten turun ke bawah navbar */}
        <main className="pt-24 px-6">
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
