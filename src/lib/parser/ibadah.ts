import type { Ibadah } from "../docx/types";

import { clean } from "./utils";

export function parseIbadah(tables: string[][][]): Ibadah[] {
  const table = tables.find((table) =>
    table[0]?.[0]?.toLowerCase().includes("jadwal ibadah ktb"),
  );

  if (!table) return [];

  const result: Ibadah[] = [];

  // skip judul dan header
  for (const row of table.slice(2)) {
    if (row.length < 7) continue;

    result.push({
      nama: clean(row[1]),
      tanggal: clean(row[2]),
      pukul: clean(row[3]),
      mc: clean(row[4]),
      pengkhotbah: clean(row[5]),
      tempat: clean(row[6]),
    });
  }

  return result;
}
