"use client";

import { motion } from "framer-motion";
import { Briefcase, UserCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const workers = [
  {
    name: "Pdt. Bernabas Bin Sala, S.Th",
    position: "Ketua BPJ / Gembala Sidang",
  },
  {
    name: "Ev. Trie Aprilliani, S.Th",
    position: "Asisten Gembala",
  },
  {
    name: "Ela Devi Permatasari J.S, S.Th",
    position: "Asisten Gembala",
  },
  {
    name: "Filemon Richard Franchoa, S.Sos",
    position: "Staf TU Sekretariat BPJ",
  },
  {
    name: "Berni Erlen Elizabeth",
    position: "Koster 1",
  },
  {
    name: "Nordinson",
    position: "Koster 2",
  },
];

const firstRow = workers.slice(0, Math.ceil(workers.length / 2));
const secondRow = workers.slice(Math.ceil(workers.length / 2));

function WorkerCard({ name, position }: { name: string; position: string }) {
  return (
    <div
      className={cn(
        "mx-3 w-80 cursor-pointer overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
      )}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <UserCircle2 className="h-8 w-8 text-primary" />
      </div>

      <h3 className="text-lg font-semibold leading-snug">{name}</h3>

      <div className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        {position}
      </div>
    </div>
  );
}

export default function PekerjaPenuhWaktuSection() {
  return (
    <section
      id="pekerja"
      className="scroll-mt-20 overflow-hidden bg-muted/30 py-20"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            Pekerja Penuh Waktu
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Kami bersyukur atas para pekerja yang Tuhan percayakan untuk
            melayani jemaat GKII Barong Tongkok dengan penuh dedikasi dan
            kesetiaan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:28s]">
            {firstRow.map((worker) => (
              <WorkerCard key={worker.name} {...worker} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:28s]">
            {secondRow.map((worker) => (
              <WorkerCard key={worker.name} {...worker} />
            ))}
          </Marquee>

          {/* Fade kiri */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-muted/30 to-transparent" />

          {/* Fade kanan */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-muted/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
