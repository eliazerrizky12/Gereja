import type { Metadata } from "next";

import BlogGrid from "../../components/home/blog/components/BlogGrid";
import BlogHero from "../../components/home/blog/components/BlogHero";

import { getBlogs } from "../../components/home/blog//utils/getBlog";

export const metadata: Metadata = {
  title: "Berita & Warta | GKII Barong Tongkok",
  description:
    "Ikuti berbagai informasi terbaru mengenai kegiatan, pengumuman, warta mingguan, renungan, dan pelayanan di GKII Barong Tongkok.",
};

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <main className="min-h-screen bg-background">
      <BlogHero />

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <BlogGrid blogs={blogs} />
        </div>
      </section>
    </main>
  );
}
