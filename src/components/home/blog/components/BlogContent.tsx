import Image from "next/image";

import type { Blog } from "../types/blog";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <div className="mb-5 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        {blog.category}
      </div>

      <h1 className="text-4xl font-bold leading-tight md:text-5xl">
        {blog.title}
      </h1>

      <div className="mt-8 overflow-hidden rounded-3xl border">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {blog.images && blog.images.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Dokumentasi Kegiatan</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blog.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${blog.title} ${index + 1}`}
                width={800}
                height={600}
                className="aspect-4/3 rounded-xl object-cover"
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
