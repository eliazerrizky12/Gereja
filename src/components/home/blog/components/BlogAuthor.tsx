import { CalendarDays, Clock, UserRound } from "lucide-react";

import type { Blog } from "../types/blog";
import { formatDate } from "../utils/formatDate";

interface BlogAuthorProps {
  blog: Blog;
}

export default function BlogAuthor({ blog }: BlogAuthorProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 border-y py-5 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <UserRound className="h-4 w-4" />
        <span>{blog.author.name}</span>
      </div>

      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4" />
        <span>{formatDate(blog.createdAt)}</span>
      </div>

      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>{blog.readingTime} menit baca</span>
      </div>
    </div>
  );
}
