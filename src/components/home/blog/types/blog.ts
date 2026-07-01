// app/blog/types/blog.ts

export type BlogCategory =
  | "Pengumuman"
  | "Warta"
  | "Kegiatan"
  | "Renungan"
  | "Artikel";

export interface BlogAuthor {
  name: string;
  avatar?: string;
  role?: string;
}

export interface Blog {
  id: string;

  slug: string;

  title: string;

  excerpt: string;

  content: string[];

  coverImage: string;

  gallery?: string[];

  category: BlogCategory;

  author: BlogAuthor;

  createdAt: string;

  readingTime: number;

  featured?: boolean;

  published?: boolean;

  tags?: string[];
}
