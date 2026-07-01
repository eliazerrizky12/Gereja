"use client";

import { motion } from "framer-motion";

import { GenderChart, KtbChart, SummaryCards, SummaryTable } from ".";

export default function SummarySection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* Statistic Cards */}

        <SummaryCards />

        {/* Charts */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          <GenderChart />

          <KtbChart />
        </motion.div>

        {/* Table */}

        <SummaryTable />
      </div>
    </section>
  );
}
