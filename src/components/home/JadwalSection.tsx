import { CalendarDays, Church, Clock3, Users } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";

import type { ScheduleItem } from "@/lib/docx/types";

import JadwalCard from "./JadwalCard";

interface Props {
  data: ScheduleItem[];
}

export default function JadwalSection({ data }: Props) {
  const minggu = data.filter((x) => x.kategori === "minggu").length;
  const sepekan = data.filter((x) => x.kategori === "sepekan").length;
  const ktb = data.filter((x) => x.kategori === "ktb").length;

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
              Jadwal Persekutuan
            </span>

            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Jadwal Minggu Ini
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Seluruh kegiatan gereja ditampilkan otomatis dari Warta Jemaat
              terbaru.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <div className="mx-auto mb-14 grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
            <StatCard
              icon={<CalendarDays className="h-8 w-8 text-primary" />}
              value={data.length}
              label="Total"
            />

            <StatCard
              icon={<Church className="h-8 w-8 text-primary" />}
              value={minggu}
              label="Ibadah Minggu"
            />

            <StatCard
              icon={<Clock3 className="h-8 w-8 text-primary" />}
              value={sepekan}
              label="Sepekan"
            />

            <StatCard
              icon={<Users className="h-8 w-8 text-primary" />}
              value={ktb}
              label="KTB"
            />
          </div>
        </BlurFade>

        {data.length === 0 ? (
          <div className="rounded-2xl border bg-white p-10 text-center text-slate-500 shadow-sm">
            Belum ada jadwal yang dipublikasikan.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {data.map((item, index) => (
              <BlurFade
                key={`${item.kategori}-${item.title}-${index}`}
                delay={0.2 + index * 0.05}
                inView
              >
                <JadwalCard jadwal={item} />
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex justify-center">{icon}</div>

      <h3 className="text-3xl font-bold text-slate-900">{value}</h3>

      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}
