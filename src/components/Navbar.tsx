import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State isDark menggantikan useStore di Qwik
  const [isDark, setIsDark] = useState(false);

  // useEffect menggantikan useVisibleTask$ untuk mengecek tema saat load
  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark");
    setIsDark(isDarkTheme);
  }, []);

  // Fungsi toggle menggantikan toggleTheme$
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter hover:text-blue-500 transition-colors"
        >
          DEV.PORTFOLIO
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex gap-6 font-medium">
            <Link
              to="/projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
            <Link to="/blog" className="hover:text-blue-500 transition-colors">
              Blog
            </Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
          </div>

          {/* Tombol Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
