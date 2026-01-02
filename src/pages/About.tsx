export default function About() {
  const skills = [
    {
      name: "Frontend",
      items: ["React.js", "Vite", "Tailwind CSS v4", "TypeScript"],
    },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
    { name: "Lainnya", items: ["Git", "Vercel", "Figma"] },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Profil Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative group">
          {/* Efek Cahaya di Belakang Foto */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative w-56 h-56 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
            <img
              src="https://picsum.photos/seed/dev/400/400"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Tentang <span className="text-blue-600 font-mono">Saya</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Saya adalah seorang pengembang web yang senang membangun antarmuka
            yang bersih dan fungsional. Setelah mengeksplorasi Qwik, kini saya
            fokus mengembangkan ekosistem menggunakan **React Vite** dan
            **Tailwind CSS v4** untuk fleksibilitas desain yang lebih maksimal.
          </p>
        </div>
      </section>

      {/* Skill Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b-2 border-blue-500 inline-block pb-2">
          Keahlian & Teknologi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-blue-600 font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="p-10 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 text-white text-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Mari Berkolaborasi!</h2>
        <p className="mb-8 opacity-90 text-lg">
          Punya ide proyek atau sekadar ingin menyapa?
        </p>
        <a
          href="mailto:kamu@email.com"
          className="inline-block px-10 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Kirim Email
        </a>
      </section>
    </div> // Penutup container utama
  );
}
