"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import type { Blog } from "../types/blog";
import { formatDate } from "../utils/formatDate";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-shadow hover:shadow-xl"
    >
      <Link href={`/blog/${blog.slug}`}>
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority={blog.featured}
          />

          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
            {blog.category}
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readingTime} menit baca</span>
            </div>
          </div>

          <h2 className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
            {blog.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-2 font-medium text-primary">
            <span>Baca Selengkapnya</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
