export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-6xl font-extrabold tracking-tighter md:text-7xl">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          YourName
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px] leading-relaxed">
        A passionate Frontend Developer specializing in building beautiful,
        functional, and high-performance web applications.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
          View Projects
        </button>
        <button className="px-8 py-3 border border-gray-200 dark:border-gray-800 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
          Contact Me
        </button>
      </div>
    </div>
  );
}
