"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BlogBreadcrumbProps {
  title: string;
}

export default function BlogBreadcrumb({ title }: BlogBreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <Link
        href="/"
        className="inline-flex items-center gap-1 transition hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Beranda
      </Link>

      <ChevronRight className="h-4 w-4" />

      <Link href="/blog" className="transition hover:text-primary">
        Blog
      </Link>

      <ChevronRight className="h-4 w-4" />

      <span className="font-medium text-foreground">{title}</span>
    </nav>
  );
}
