import type { Blog } from "../types/blog";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="flex min-h-75 items-center justify-center rounded-2xl border border-dashed">
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold">Belum ada artikel</h3>

          <p className="text-muted-foreground">Artikel akan segera tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
