"use client";

import { motion } from "framer-motion";

import { ktb } from "../data/summary-data";

const maxValue = Math.max(...ktb.map((item) => item.jumlah));

export default function KtbChart() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      {/* Header */}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Kelompok Tumbuh Bersama
        </h3>

        <p className="mt-2 text-slate-500">
          Distribusi jumlah anggota pada setiap kelompok.
        </p>
      </div>

      {/* List */}

      <div className="space-y-6">
        {ktb.map((item, index) => {
          const percent = (item.jumlah / maxValue) * 100;

          return (
            <motion.div
              key={item.nama}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-slate-700">
                  {item.nama}
                </span>

                <span className="text-lg font-bold text-blue-600">
                  {item.jumlah}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${percent}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}

      <div className="mt-10 rounded-2xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">Total Kelompok</p>

        <p className="mt-2 text-3xl font-black text-slate-900">{ktb.length}</p>
      </div>
    </motion.div>
  );
}
