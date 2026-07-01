// app/blog/utils/getBlog.ts

import { blogs } from "../data/blogs";

/**
 * Mengambil semua artikel yang sudah dipublish.
 */
export function getBlogs() {
  return blogs.filter((blog) => blog.published);
}

/**
 * Mengambil artikel berdasarkan slug.
 */
export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug && blog.published);
}

/**
 * Mengambil artikel unggulan (featured).
 */
export function getFeaturedBlog() {
  return blogs.find((blog) => blog.featured && blog.published);
}

/**
 * Mengambil artikel berdasarkan kategori.
 */
export function getBlogsByCategory(category: string) {
  return blogs.filter((blog) => blog.category === category && blog.published);
}

/**
 * Mengambil artikel terkait.
 * (Kategori sama, selain artikel yang sedang dibuka)
 */
export function getRelatedBlogs(slug: string, category: string, limit = 3) {
  return blogs
    .filter(
      (blog) =>
        blog.slug !== slug && blog.category === category && blog.published,
    )
    .slice(0, limit);
}
