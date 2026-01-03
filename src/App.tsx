import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog"; // Import halaman daftar blog
import BlogPost from "./pages/BlogPost"; // Import halaman isi blog

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />

        {/* Konten Utama */}
        <main className="pt-24 px-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />

            {/* Rute Blog Baru */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
