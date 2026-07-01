import BlogGrid from "./BlogGrid";
import type { Blog } from "../types/blog";

interface RelatedPostsProps {
  blogs: Blog[];
}

export default function RelatedPosts({ blogs }: RelatedPostsProps) {
  if (!blogs.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">Artikel Lainnya</h2>

      <BlogGrid blogs={blogs} />
    </section>
  );
}
