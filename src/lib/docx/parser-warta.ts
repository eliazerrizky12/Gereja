import { extractTables } from "./extract-table";
import { extractText } from "./extract-text";

import {
  parseUltah,
  parseKas,
  parseJadwalIbadah,
  parseJadwalSepekan,
  parsePelayan,
  parseDoa,
  parseIbadah,
  parsePerayaan,
} from "../parser";

import type { Warta } from "./types";

export interface ParseWartaResult {
  tables: string[][][];
  paragraphs: string[];
  parsed: Warta;
}

export async function parseWarta(buffer: Buffer): Promise<ParseWartaResult> {
  const [tables, paragraphs] = await Promise.all([
    extractTables(buffer),
    extractText(buffer),
  ]);

  const { ulangTahun, ulangTahunPernikahan } = parseUltah(tables);

  const parsed: Warta = {
    ulangTahun,
    ulangTahunPernikahan,

    kas: parseKas(tables),

    jadwalIbadah: parseJadwalIbadah(tables),

    jadwalSepekan: parseJadwalSepekan(tables),

    pelayan: parsePelayan(tables),

    doa: parseDoa(tables),

    ibadah: parseIbadah(tables),

    perayaan: parsePerayaan(tables),
  };

  return {
    tables,
    paragraphs,
    parsed,
  };
}
