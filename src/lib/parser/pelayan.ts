import type { Pelayan } from "../docx/types";

import { clean } from "./utils";

export function parsePelayan(tables: string[][][]): Pelayan[] {
  const table = tables.find((table) =>
    table[0]?.[0]?.toLowerCase().includes("info pelayanan"),
  );

  if (!table) return [];

  const result: Pelayan[] = [];

  for (const row of table.slice(1)) {
    const left = clean(row[0] ?? "");
    const right = clean(row[1] ?? "");

    // stop ketika masuk informasi lain
    if (left.startsWith("Ruang Sekretariat") || left.startsWith("Rekening")) {
      break;
    }

    // khusus Staff TU
    if (left.startsWith("Staf TU")) {
      const match = left.match(/^(.+?)\s*:\s*(.+?)\s*\(([\d\s-]+)\)$/);

      if (match) {
        result.push({
          tugas: clean(match[1]),
          nama: clean(match[2]),
          telepon: clean(match[3]),
        });
      }

      continue;
    }

    // Assisten Gembala kedua (kolom kiri kosong)
    if (!left && right) {
      const match = right.match(/^:\s*(.+?)\s*\(([\d\s-]+)\)$/);

      if (match && result.length > 0) {
        result.push({
          tugas: result[result.length - 1].tugas,
          nama: clean(match[1]),
          telepon: clean(match[2]),
        });
      }

      continue;
    }

    if (!left || !right) continue;

    const match = right.match(/^:\s*(.+?)\s*\(([\d\s-]+)\)$/);

    if (!match) continue;

    result.push({
      tugas: left,
      nama: clean(match[1]),
      telepon: clean(match[2]),
    });
  }

  return result;
}
