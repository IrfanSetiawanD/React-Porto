import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Gunakan py-10 bukannya py-20 agar tidak terlalu jauh ke bawah
    <section className="mx-auto max-w-4xl px-4 py-10 text-center">
      <h1 className="mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl leading-tight">
        Web Developer & <br /> Creative Coder (REACT)
      </h1>

      <p className="mb-10 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A passionate Frontend Developer specializing in building beautiful,
        functional, and high-performance web applications.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700 transition-all"
        >
          Lihat Project
        </Link>
        <Link
          to="/about"
          // Gunakan border-gray-200 agar halus seperti di Qwik, bukan border-blue
          className="rounded-full border border-gray-200 dark:border-gray-800 px-8 py-3 font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all shadow-sm"
        >
          Hubungi Saya
        </Link>
      </div>
    </section>
  );
}
