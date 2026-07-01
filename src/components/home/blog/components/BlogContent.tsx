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
    </article>
  );
}
