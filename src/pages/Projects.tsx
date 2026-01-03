import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        My Projects
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Beberapa karya terbaik yang pernah saya bangun.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Badges / Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="https://github.com/IrfanSetiawanD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium hover:underline inline-flex items-center"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
