import type { JadwalIbadah, PetugasIbadah } from "../docx/types";

function parseHeader(text: string) {
  const cleaned = text.replace(/\s+/g, " ").trim();

  const match = cleaned.match(/^(.+?)\((.+)\)$/);

  return {
    tanggal: match?.[1].trim() ?? cleaned,
    jenisIbadah: match?.[2].trim() ?? "",
  };
}

export function parseJadwalIbadah(tables: string[][][]): JadwalIbadah[] {
  const table = tables.find(
    (table) =>
      table[0]?.[0]?.toLowerCase().includes("jadwal ibadah") &&
      !table[0]?.[0]?.toLowerCase().includes("sepekan"),
  );

  if (!table) return [];

  if (table.length < 2) return [];

  const kiri = parseHeader(table[1][0] ?? "");
  const kanan = parseHeader(table[1][1] ?? "");

  const jadwalKiri: JadwalIbadah = {
    ...kiri,
    petugas: [],
  };

  const jadwalKanan: JadwalIbadah = {
    ...kanan,
    petugas: [],
  };

  for (const row of table.slice(2)) {
    if (row.length < 6) continue;

    const tugasKiri = row[0]?.trim();
    const namaKiri = row[2]?.trim();

    if (tugasKiri && namaKiri) {
      jadwalKiri.petugas.push({
        tugas: tugasKiri,
        nama: namaKiri,
      });
    }

    const tugasKanan = row[3]?.trim();
    const namaKanan = row[5]?.trim();

    if (tugasKanan && namaKanan) {
      jadwalKanan.petugas.push({
        tugas: tugasKanan,
        nama: namaKanan,
      });
    }
  }

  return [jadwalKiri, jadwalKanan];
}
