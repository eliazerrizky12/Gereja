"use client";

import { motion } from "framer-motion";
import {
  Baby,
  BookHeart,
  Church,
  HeartHandshake,
  HeartPulse,
  Users,
  UserPlus,
} from "lucide-react";

const services = [
  {
    title: "Pendaftaran Jemaat",
    description:
      "Daftarkan diri Anda menjadi bagian dari keluarga besar GKII Barong Tongkok.",
    icon: UserPlus,
    url: "https://forms.gle/LLH11wvXWZTAf2D19",
  },
  {
    title: "Persembahan Anak",
    description: "Pengajuan pelayanan persembahan anak kepada Tuhan.",
    icon: Baby,
    url: "#",
  },
  {
    title: "Baptisan Kudus",
    description: "Pendaftaran bagi jemaat yang ingin menerima baptisan kudus.",
    icon: Church,
    url: "#",
  },
  {
    title: "Pernikahan Kudus",
    description: "Pengajuan pelayanan pemberkatan pernikahan kudus.",
    icon: HeartHandshake,
    url: "#",
  },
  {
    title: "Kunjungan Pastoral",
    description: "Permohonan kunjungan dari gembala atau tim pastoral.",
    icon: Users,
    url: "#",
  },
  {
    title: "Pertunangan",
    description: "Pengajuan pelayanan pemberkatan pertunangan.",
    icon: BookHeart,
    url: "#",
  },
  {
    title: "Pelayanan Doa Khusus",
    description: "Ajukan permohonan doa khusus sesuai kebutuhan Anda.",
    icon: HeartPulse,
    url: "#",
  },
];

export default function PelayananPastoralSection() {
  return (
    <section id="pelayanan" className="scroll-mt-20 bg-muted/30 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <HeartHandshake className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            Informasi Pelayanan Pastoral
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Kami siap melayani kebutuhan pastoral jemaat. Pilih jenis pelayanan
            yang Anda perlukan, kemudian isi formulir yang tersedia.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -6,
                }}
                className="flex h-full flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Ajukan Pelayanan
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
