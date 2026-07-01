"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import { genderData, summary } from "../data/summary-data";

export default function GenderChart() {
  const total = summary.lakiLaki + summary.perempuan;

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
        <h3 className="text-2xl font-bold text-slate-900">Komposisi Jemaat</h3>

        <p className="mt-2 text-slate-500">
          Perbandingan jumlah jemaat berdasarkan jenis kelamin.
        </p>
      </div>

      {/* Chart */}

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={genderData}
              dataKey="value"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={5}
            >
              {genderData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-8 space-y-4">
        {genderData.map((item) => {
          const percent = ((item.value / total) * 100).toFixed(1);

          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="font-medium text-slate-700">{item.name}</span>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">{item.value}</p>

                <p className="text-sm text-slate-500">{percent}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
