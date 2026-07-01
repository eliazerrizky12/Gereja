"use client";

import { Cross, Droplets, House, Users } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "./StatCard";
import { summary } from "../data/summary-data";

export default function SummaryCards() {
  const cards = [
    {
      title: "Total Jemaat",
      value: summary.jemaat,
      description: "Jumlah seluruh anggota jemaat yang terdaftar.",
      icon: <Users size={28} />,
      color: "blue" as const,
    },
    {
      title: "Kepala Keluarga",
      value: summary.kepalaKeluarga,
      description: "Jumlah kepala keluarga dalam data administrasi.",
      icon: <House size={28} />,
      color: "amber" as const,
    },
    {
      title: "Sudah Baptis",
      value: summary.sudahBaptis,
      description: "Jemaat yang telah menerima baptisan kudus.",
      icon: <Cross size={28} />,
      color: "emerald" as const,
    },
    {
      title: "Belum Baptis",
      value: summary.belumBaptis,
      description: "Jemaat yang belum menerima baptisan.",
      icon: <Droplets size={28} />,
      color: "rose" as const,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      {cards.map((card) => (
        <motion.div
          key={card.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <StatCard
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            color={card.color}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
