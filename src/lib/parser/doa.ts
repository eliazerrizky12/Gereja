import type { Doa } from "../docx/types";
import { clean } from "./utils";

export function parseDoa(tables: string[][][]): Doa[] {
  const table = tables.find((table) => {
    const text = table.flat().join(" ").toLowerCase();

    return text.includes("bpj") && text.includes("barong tongkok");
  });

  if (!table) return [];

  const result: Doa[] = [];

  let kategori = "";

  for (const row of table) {
    const value = clean(row.join(" "));

    if (!value) continue;

    // baris pertama = kategori
    if (!kategori) {
      kategori = value;
      continue;
    }

    result.push({
      kategori,
      isi: value,
    });
  }

  return result;
}
