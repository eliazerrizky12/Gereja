"use client";

import { motion } from "framer-motion";

import { tableData } from "../data/summary-data";

export default function SummaryTable() {
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
      className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}

      <div className="border-b border-slate-100 p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Ringkasan Statistik Jemaat
        </h3>

        <p className="mt-2 text-slate-500">
          Seluruh data administrasi jemaat yang digunakan sebagai dasar
          penyusunan laporan pelayanan gereja.
        </p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                No
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Kategori
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Jumlah
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => (
              <motion.tr
                key={item.kategori}
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
                  delay: index * 0.03,
                }}
                className="group border-t transition-colors hover:bg-blue-50/40"
              >
                <td className="px-6 py-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 group-hover:bg-blue-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="font-medium text-slate-800">
                    {item.kategori}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <span className="rounded-full bg-blue-50 px-4 py-2 font-bold text-blue-700">
                    {item.jumlah}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 bg-slate-50 px-8 py-5">
        <p className="text-sm text-slate-500">
          Data di atas diperoleh dari administrasi jemaat dan akan diperbarui
          secara otomatis melalui sistem upload Warta Jemaat.
        </p>
      </div>
    </motion.div>
  );
}
