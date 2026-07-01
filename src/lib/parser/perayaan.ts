import type { Perayaan } from "../docx/types";

import { clean } from "./utils";

export function parsePerayaan(tables: string[][][]): Perayaan[] {
  const table = tables.find((table) =>
    table[0]?.[0]?.toLowerCase().includes("jadwal perayaan ibadah hari raya"),
  );

  if (!table) {
    return [];
  }

  const result: Perayaan[] = [];

  // Skip judul dan header
  for (const row of table.slice(2)) {
    if (row.length < 6) continue;

    result.push({
      nama: clean(row[1]),
      tanggal: clean(row[2]),
      pukul: clean(row[3]),
      tempat: clean(row[4]),
      koordinator: clean(row[5]),
    });
  }

  return result;
}
