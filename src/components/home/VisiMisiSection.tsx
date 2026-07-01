"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisiMisiSection() {
  return (
    <section id="visi-misi" className="bg-background py-16 scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold">Visi & Misi Gereja</h1>

          <p className="mt-3 text-muted-foreground">
            Gereja Kemah Injil Indonesia Jemaat Barong Tongkok
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border bg-white shadow-xl"
        >
          <div className="group overflow-hidden">
            <Image
              src="/visi-misi.jpeg"
              alt="Visi dan Misi GKII Barong Tongkok"
              width={1600}
              height={1600}
              priority
              className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
