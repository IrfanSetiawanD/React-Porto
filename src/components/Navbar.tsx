import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Import tombol tadi

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 p-6 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MY.DEV
        </Link>
        <div className="flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>

          {/* Tambahkan Tombol di Sini */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
