import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogAuthor from "@/components/home/blog/components/BlogAuthor";
import BlogBreadcrumb from "@/components/home/blog/components/BlogBreadcrumb";
import BlogContent from "@/components/home/blog/components/BlogContent";
import RelatedPosts from "@/components/home/blog/components/RelatedPosts";

import {
  getBlogBySlug,
  getRelatedBlogs,
} from "@/components/home/blog/utils/getBlog";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.slug, blog.category, 3);

  return (
    <main className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <BlogBreadcrumb title={blog.title} />

        <BlogContent blog={blog} />

        <div className="mx-auto mt-10 max-w-4xl">
          <BlogAuthor blog={blog} />
        </div>

        <RelatedPosts blogs={relatedBlogs} />
      </div>
    </main>
  );
}
