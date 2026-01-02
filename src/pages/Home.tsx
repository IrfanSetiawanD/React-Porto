import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center">
      {/* Judul dengan Gradient identik dengan Qwik */}
      <h1 className="mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
        Web Developer & Creative Coder (REACT)
      </h1>

      {/* Deskripsi */}
      <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">
        A passionate Frontend Developer specializing in building beautiful,
        functional, and high-performance web applications.
      </p>

      {/* Tombol Aksi */}
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700 transition-colors"
        >
          Lihat Project
        </Link>
        <Link
          to="/about" // Di Qwik "/contact", sesuaikan dengan route yang kamu punya
          className="rounded-full border border-blue-600 px-8 py-3 font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
        >
          Hubungi Saya
        </Link>
      </div>
    </section>
  );
}
