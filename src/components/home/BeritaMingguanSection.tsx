"use client";

import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function BeritaMingguanSection() {
  return (
    <section
      id="berita"
      className="scroll-mt-20 relative overflow-hidden py-24"
    >
      {/* Dot Background */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-50",
          "mask-[radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Glow kiri */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* Glow kanan */}
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Newspaper className="h-10 w-10 text-primary" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold">Berita Mingguan</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Ikuti berbagai informasi terbaru mengenai kegiatan gereja,
            pengumuman, warta mingguan, renungan, dan pelayanan di GKII Barong
            Tongkok.
          </p>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Lihat Semua Berita
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
