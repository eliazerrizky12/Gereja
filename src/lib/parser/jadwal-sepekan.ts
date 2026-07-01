import type { JadwalSepekan } from "../docx/types";

export function parseJadwalSepekan(tables: string[][][]): JadwalSepekan[] {
  const table = tables.find((table) =>
    table[0]?.[0]?.toLowerCase().includes("jadwal ibadah sepekan"),
  );

  if (!table) return [];

  const result: JadwalSepekan[] = [];

  for (const row of table.slice(2)) {
    if (row.length < 7) continue;

    result.push({
      namaIbadah: row[1]?.trim() ?? "",
      tanggal: row[2]?.trim() ?? "",
      jam: row[3]?.trim() ?? "",
      mc: row[4]?.trim() ?? "",
      pengkhotbah: row[5]?.trim() ?? "",
      tempat: row[6]?.trim() ?? "",
    });
  }

  return result;
}
