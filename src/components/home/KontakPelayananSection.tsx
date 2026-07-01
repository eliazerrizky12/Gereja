"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { contacts } from "./data/contact";

export default function KontakPelayananSection() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-muted/30 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-4xl font-bold">Nomor Kontak Pelayanan</h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Hubungi pengurus atau pelayan sesuai kebutuhan Anda. Klik tombol
            WhatsApp untuk langsung memulai percakapan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((person, index) => {
            const Icon = person.icon;

            return (
              <motion.a
                key={person.phone}
                href={`https://wa.me/${person.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group flex h-full flex-col rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold">{person.name}</h3>

                <p className="mt-2 text-muted-foreground">{person.role}</p>

                <div className="mt-6 flex items-center justify-between border-t pt-5">
                  <span className="font-medium text-primary">
                    Chat WhatsApp
                  </span>

                  <MessageCircle className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
