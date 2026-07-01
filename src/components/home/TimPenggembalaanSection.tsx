"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, UserRound } from "lucide-react";

const pastors = [
  {
    name: "Pdt. Bernabas Bin Sala, S.Th",
    position: "Ketua BPJ / Gembala Sidang",
    phone: "0813-5062-0744",
    whatsapp: "6281350620744",
    image: "/gembala.jpeg",
  },
  {
    name: "Ev. Trie Aprilliani, S.Th",
    position: "Asisten Gembala",
    phone: "0822-5021-3737",
    whatsapp: "6282250213737",
    image: "/trie.jpeg",
  },
  {
    name: "Ela Devi Permatasari J.S, S.Th",
    position: "Asisten Gembala",
    phone: "0822-4603-4014",
    whatsapp: "6282246034014",
    image: "/ela.jpeg",
  },
];

export default function TimPenggembalaanSection() {
  return (
    <section
      id="tim-penggembalaan"
      className="scroll-mt-20 bg-background py-16"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">Tim Penggembalaan</h2>

          <p className="mt-3 text-muted-foreground">
            Gereja Kemah Injil Indonesia Jemaat Barong Tongkok
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pastors.map((pastor, index) => (
            <motion.div
              key={pastor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-4/5 bg-muted">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-primary">
                  <UserRound size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {pastor.position}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug">
                  {pastor.name}
                </h3>

                <a
                  href={`https://wa.me/${pastor.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <Phone size={16} />
                  {pastor.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
