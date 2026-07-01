"use client";

import { motion } from "framer-motion";
import { Church } from "lucide-react";

const history = [
  {
    year: "1984",
    title: "Awal Pelayanan",
    description:
      "Ibadah rumah ke rumah oleh 6 Kepala Keluarga perintis di bawah pelayanan Pdt. Doyos.",
  },
  {
    year: "1992",
    title: "Pembangunan Gereja Pertama",
    description:
      "Dimulai pembangunan gedung gereja pertama berukuran 7 × 14 meter hasil pembagian lahan oleh pemerintah.",
  },
  {
    year: "1998",
    title: "Gedung Pertama Selesai",
    description:
      "Pembangunan gereja pertama berhasil diselesaikan dan mulai digunakan untuk ibadah jemaat.",
  },
  {
    year: "2007",
    title: "Tonggak Baru",
    description:
      "Peletakan batu pertama pembangunan gedung gereja baru yang lebih besar seiring pertumbuhan jemaat.",
  },
  {
    year: "2021",
    title: "Peresmian Gedung Baru",
    description:
      "Gedung gereja baru diresmikan oleh Ketua Umum GKII setelah proses pembangunan selama 14 tahun.",
  },
  {
    year: "Sekarang",
    title: "Terus Bertumbuh",
    description:
      "Penyempurnaan fasilitas gereja dan pengembangan pelayanan terus dilakukan demi melayani jemaat dengan lebih baik.",
  },
];

export default function HistorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-100 blur-3xl opacity-40" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2">
            <Church className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold tracking-wide text-blue-700">
              SEJARAH GKII BARONG TONGKOK
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-6xl">
            Perjalanan Iman
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Dari persekutuan enam keluarga sederhana hingga menjadi gereja yang
            terus bertumbuh dan menjadi berkat bagi banyak orang.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-0.75 rounded-full bg-linear-to-b from-blue-500 via-sky-400 to-amber-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {history.map((item, index) => (
              <motion.div
                key={item.year}
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
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className={`
                  relative
                  flex
                  flex-col
                  md:flex-row
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                  items-center
                `}
              >
                {/* Content */}

                <div className="w-full md:w-1/2">
                  <div
                    className={`
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                      ${index % 2 === 0 ? "md:mr-14" : "md:ml-14"}
                    `}
                  >
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-6
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-blue-600
                    text-sm
                    font-bold
                    text-white
                    shadow-xl
                    md:left-1/2
                  "
                >
                  {index + 1}
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-24 max-w-3xl rounded-3xl border border-blue-100 bg-linear-to-r from-blue-50 via-white to-amber-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Ebenezer, Sampai Di Sini Tuhan Menolong Kita
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Setiap langkah perjalanan GKII Barong Tongkok merupakan bukti nyata
            penyertaan Tuhan. Dari enam keluarga sederhana hingga menjadi gereja
            yang bertumbuh, setiap generasi turut mengambil bagian dalam
            membangun iman, pelayanan, dan kasih bagi sesama.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
