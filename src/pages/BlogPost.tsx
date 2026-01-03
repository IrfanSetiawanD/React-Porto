import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
  // Mengambil slug dari URL (misal: /blog/hello-world)
  const { slug } = useParams<{ slug: string }>();

  // Konten artikel (Bisa dipindahkan ke file terpisah nantinya)
  const content = `
# Memulai Perjalanan Web Dev dengan React

Halo semuanya! Ini adalah artikel pertama di blog portofolio saya. Di sini, saya ingin berbagi alasan mengapa saya memilih **React** sebagai pustaka utama untuk membangun antarmuka website ini.

### Mengapa Memilih React?

Meskipun banyak framework baru bermunculan, React tetap menjadi standar industri berkat ekosistemnya yang sangat matang dan fleksibilitasnya yang tinggi:

1. **Ekosistem Raksasa**: Dengan komunitas yang sangat besar, hampir semua masalah yang kamu hadapi sudah ada solusinya di internet, serta ribuan library siap pakai yang mempercepat pengembangan.
2. **Kekuatan Virtual DOM**: React meminimalkan manipulasi DOM secara langsung dengan sistem perbandingannya yang cerdas, memastikan aplikasi tetap responsif saat ada perubahan data.
3. **Komponen Reusable**: Filosofi React yang membagi UI menjadi komponen-komponen kecil membuat kode kita jauh lebih mudah dikelola, diuji, dan digunakan kembali di proyek lain.

---

### Contoh Kode di React

Berikut adalah cuplikan sederhana bagaimana cara membuat komponen tombol di React menggunakan *Hook* \`useState\` yang sangat populer:

\`\`\`tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Jumlah Klik: {count}
    </button>
  );
}
\`\`\`

### Kesimpulan

React mungkin menggunakan konsep **Hydration**, namun dengan optimasi yang tepat, performanya tetap luar biasa untuk kebutuhan web modern saat ini.
  `;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Header Kecil Menggunakan Slug agar TypeScript Tidak Error */}
      <header className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
        <nav className="flex space-x-2 text-sm text-gray-500 mb-2">
          <Link to="/blog" className="hover:text-blue-500">
            Blog
          </Link>
          <span>/</span>
          <span className="text-blue-500 font-medium truncate">{slug}</span>
        </nav>
      </header>

      {/* Konten Utama */}
      <article className="prose dark:prose-invert lg:prose-xl mb-10 max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>

      {/* Footer Navigasi */}
      <div className="border-t border-gray-200 pt-6 dark:border-gray-800">
        <Link
          to="/blog"
          className="text-blue-500 hover:underline flex items-center"
        >
          <span className="mr-2">←</span> Kembali ke Blog
        </Link>
      </div>
    </div>
  );
}
