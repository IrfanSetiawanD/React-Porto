import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Ambil preferensi awal dari localStorage atau sistem
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-500 transition-all"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <span className="text-yellow-400">🌞</span> // Icon Matahari
      ) : (
        <span className="text-gray-700">🌙</span> // Icon Bulan
      )}
    </button>
  );
}
