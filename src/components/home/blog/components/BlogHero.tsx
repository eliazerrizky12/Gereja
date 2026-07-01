"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

import { cn } from "@/lib/utils";
import { DotPattern } from "../../../ui/dot-pattern";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b py-20">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-50",
          "mask-[radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Newspaper className="h-10 w-10 text-primary" />
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Berita & Warta Gereja
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Temukan berbagai informasi terbaru mengenai kegiatan gereja,
            pengumuman, warta mingguan, renungan, serta artikel pelayanan di
            GKII Barong Tongkok.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
