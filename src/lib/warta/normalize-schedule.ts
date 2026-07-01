import type { ScheduleItem, Warta } from "@/lib/docx/types";

export function normalizeSchedule(warta: Warta): ScheduleItem[] {
  const result: ScheduleItem[] = [];

  // Jadwal Minggu
  for (const item of warta.jadwalIbadah) {
    result.push({
      kategori: "minggu",

      title: item.jenisIbadah,

      tanggal: item.tanggal,

      petugas: item.petugas,
    });
  }

  // Jadwal Sepekan
  for (const item of warta.jadwalSepekan) {
    result.push({
      kategori: "sepekan",

      title: item.namaIbadah,

      tanggal: item.tanggal,

      jam: item.jam,

      tempat: item.tempat,

      mc: item.mc,

      pengkhotbah: item.pengkhotbah,
    });
  }

  // Jadwal KTB
  for (const item of warta.ibadah) {
    result.push({
      kategori: "ktb",

      title: item.nama,

      tanggal: item.tanggal,

      jam: item.pukul,

      tempat: item.tempat,

      mc: item.mc,

      pengkhotbah: item.pengkhotbah,
    });
  }

  return result;
}
