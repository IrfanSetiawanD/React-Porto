import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-10">Proyek Unggulan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all shadow-sm"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600">{p.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 my-4">
              {p.description}
            </p>
            <div className="flex gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
