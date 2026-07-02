"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Eye, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function StrukturBPJSection() {
  return (
    <section id="struktur-bpj" className="scroll-mt-20 bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">Struktur Tim</h2>

          <p className="mt-3 text-muted-foreground">
            Susunan Badan Pengurus Jemaat GKII Barong Tongkok
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border bg-card shadow-xl"
        >
          {/* BPJ */}
          <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <FileText className="text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">Dokumen Struktur BPJ</h3>

                <p className="text-sm text-muted-foreground">
                  Lihat struktur lengkap dalam format PDF
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="rounded-full">
              <Link
                href="/SK-BPJ.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-4 w-4" />
                Detail Struktur
              </Link>
            </Button>
          </div>

          {/* PHHBK */}
          <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <FileText className="text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">Dokumen Struktur PHHBK</h3>

                <p className="text-sm text-muted-foreground">
                  Lihat struktur lengkap dalam format PDF
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="rounded-full">
              <Link
                href="/SK-PHHBK.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-4 w-4" />
                Detail Struktur
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
