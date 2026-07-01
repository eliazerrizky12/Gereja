import type { Anniversary, Birthday, UltahResult } from "../docx/types";

import { parseDate } from "../utils/date";
import { findTableByHeader } from "../utils/find-table";

export function parseUltah(tables: string[][][]): UltahResult {
  const table = findTableByHeader(tables, [
    "Nama",
    "Tanggal Lahir",
    "Nama Pasangan",
    "Tanggal Pernikahan",
  ]);

  if (!table) {
    return {
      ulangTahun: [],
      ulangTahunPernikahan: [],
    };
  }

  const ulangTahun: Birthday[] = [];
  const ulangTahunPernikahan: Anniversary[] = [];

  const headerIndex = table.findIndex(
    (row) =>
      row[0]?.trim().toLowerCase() === "nama" &&
      row[1]?.trim().toLowerCase() === "tanggal lahir",
  );

  if (headerIndex === -1) {
    return {
      ulangTahun,
      ulangTahunPernikahan,
    };
  }

  for (const row of table.slice(headerIndex + 1)) {
    const nama = row[0]?.trim() ?? "";
    const tanggalLahir = row[1]?.trim() ?? "";

    const pasangan = row[2]?.trim() ?? "";
    const tanggalPernikahan = row[3]?.trim() ?? "";

    // Stop jika semua kolom kosong
    if (!nama && !tanggalLahir && !pasangan && !tanggalPernikahan) {
      break;
    }

    if (nama && tanggalLahir) {
      ulangTahun.push({
        nama,
        tanggalLahir: parseDate(tanggalLahir) ?? tanggalLahir,
      });
    }

    if (pasangan && tanggalPernikahan) {
      const [suami = "", istri = ""] = pasangan.split("&").map((v) => v.trim());

      ulangTahunPernikahan.push({
        suami,
        istri,
        tanggalPernikahan: parseDate(tanggalPernikahan) ?? tanggalPernikahan,
      });
    }
  }

  return {
    ulangTahun,
    ulangTahunPernikahan,
  };
}
