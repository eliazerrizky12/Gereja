"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";

import { albums } from "./data/gallery";

export default function GaleriKegiatanSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Camera className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-4xl font-bold">Galeri Foto Kegiatan</h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Dokumentasi berbagai kegiatan ibadah, pelayanan, dan persekutuan di
            GKII Barong Tongkok. Klik salah satu album untuk melihat seluruh
            dokumentasi melalui Google Drive.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {albums.map((album, index) => {
            const Icon = album.icon;

            return (
              <motion.div
                key={album.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={album.url}
                  target="_blank"
                  className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={album.image}
                      alt={album.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/90 px-3 py-2 backdrop-blur">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">
                        {album.total} Foto
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 p-6">
                    <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {album.category}
                    </div>

                    <h3 className="text-2xl font-semibold">{album.title}</h3>

                    <div className="flex items-center justify-between pt-2 font-medium text-primary">
                      <span>Lihat Album</span>

                      <ExternalLink className="h-5 w-5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
