import {
  BookOpen,
  CalendarDays,
  Clock,
  MapPin,
  Mic2,
  User,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { ScheduleItem } from "@/lib/docx/types";

interface Props {
  jadwal: ScheduleItem;
}

const categoryStyle = {
  minggu: {
    label: "Ibadah Minggu",
    className: "bg-blue-100 text-blue-700",
  },

  sepekan: {
    label: "Ibadah Sepekan",
    className: "bg-emerald-100 text-emerald-700",
  },

  ktb: {
    label: "KTB",
    className: "bg-orange-100 text-orange-700",
  },
};

export default function JadwalCard({ jadwal }: Props) {
  const badge = categoryStyle[jadwal.kategori];

  return (
    <Card className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
              <CalendarDays className="h-5 w-5 text-primary group-hover:text-white" />
            </div>

            <div>
              <CardTitle className="text-lg font-semibold leading-tight">
                {jadwal.title}
              </CardTitle>

              <p className="text-xs text-slate-500">{jadwal.tanggal}</p>
            </div>
          </div>

          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 pt-0">
        {jadwal.kategori === "minggu" ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {jadwal.petugas?.map((petugas, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-2.5"
              >
                <div className="rounded-lg bg-primary/10 p-2">
                  <User className="h-3.5 w-3.5 text-primary" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] uppercase tracking-wide text-slate-500">
                    {petugas.tugas}
                  </p>

                  <p className="truncate text-sm font-medium text-slate-900">
                    {petugas.nama || "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {jadwal.jam && (
              <InfoRow
                icon={<Clock className="h-5 w-5 text-primary" />}
                title="Jam"
                value={jadwal.jam}
              />
            )}

            {jadwal.tempat && (
              <InfoRow
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Tempat"
                value={jadwal.tempat}
              />
            )}

            {jadwal.mc && (
              <InfoRow
                icon={<Mic2 className="h-5 w-5 text-primary" />}
                title="MC"
                value={jadwal.mc}
              />
            )}

            {jadwal.pengkhotbah && (
              <InfoRow
                icon={<BookOpen className="h-5 w-5 text-primary" />}
                title="Pengkhotbah"
                value={jadwal.pengkhotbah}
              />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  title: string;
  value?: string;
}

function InfoRow({ icon, title, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-slate-100 p-2">{icon}</div>

      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <p className="truncate text-sm font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );
}
