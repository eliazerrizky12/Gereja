// app/blog/data/categories.ts

import type { BlogCategory } from "../types/blog";

import { Bell, BookOpen, CalendarDays, FileText, Sparkles } from "lucide-react";

export interface CategoryItem {
  id: "all" | BlogCategory;
  label: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const categories: CategoryItem[] = [
  {
    id: "all",
    label: "Semua",
    description: "Seluruh artikel",
  },
  {
    id: "Pengumuman",
    label: "Pengumuman",
    description: "Informasi resmi gereja",
    icon: Bell,
  },
  {
    id: "Warta",
    label: "Warta",
    description: "Warta dan informasi mingguan",
    icon: FileText,
  },
  {
    id: "Kegiatan",
    label: "Kegiatan",
    description: "Dokumentasi dan agenda kegiatan",
    icon: CalendarDays,
  },
  {
    id: "Renungan",
    label: "Renungan",
    description: "Renungan firman Tuhan",
    icon: BookOpen,
  },
  {
    id: "Artikel",
    label: "Artikel",
    description: "Artikel dan tulisan rohani",
    icon: Sparkles,
  },
];
