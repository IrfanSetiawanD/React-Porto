import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "Memulai Perjalanan Web Dev dengan React",
      description:
        "Mengapa saya belajar React dan bagaimana ekosistemnya membantu saya membangun UI.",
      date: "2024-05-21",
      slug: "hello-world",
      tags: ["React", "Vite"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4 dark:text-white">
          Blog & Artikel
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Berbagi pemikiran seputar teknologi, koding, dan tips pengembangan
          web.
        </p>
      </header>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
          >
            <time className="text-sm text-gray-500 mb-2">{post.date}</time>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {post.description}
            </p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-blue-600 dark:text-blue-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {/* Overlay link agar satu kartu bisa diklik */}
            <Link
              to={`/blog/${post.slug}`}
              className="absolute inset-0 z-0"
              aria-label={post.title}
            />
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl border-gray-200 dark:border-gray-800">
          <p className="text-gray-500">
            Belum ada artikel yang dipublikasikan.
          </p>
        </div>
      )}
    </section>
  );
}
