import type { Kas, LaporanKas } from "../docx/types";

function parseNominal(text: string): number {
  return Number(text.replace(/Rp\.?/gi, "").replace(/[^\d]/g, "")) || 0;
}

export function parseKas(tables: string[][][]): LaporanKas {
  const table = tables.find((table) =>
    table.flat().join(" ").toLowerCase().includes("laporan kas"),
  );

  if (!table) {
    return {
      periode: "",
      saldoAwal: 0,
      saldoAkhir: 0,
      totalMasuk: 0,
      totalKeluar: 0,
      transaksi: [],
    };
  }

  const transaksi: Kas[] = [];

  let periode = "";
  let saldoAwal = 0;
  let saldoAkhir = 0;
  let totalMasuk = 0;
  let totalKeluar = 0;

  // ==========================
  // Header
  // ==========================

  periode = table[0]?.[0]?.replace(/^LAPORAN KAS\s*/i, "").trim();

  saldoAwal = parseNominal(table[1]?.[0] ?? "");

  let started = false;

  for (const row of table) {
    const first = row[0]?.trim() ?? "";

    if (!started) {
      if (first === "UANG MASUK") {
        started = true;
      }

      continue;
    }

    // Baris kosong
    if (row.every((c) => !c.trim())) {
      continue;
    }

    // Heading seperti "Perpuluhan"
    if (row.length <= 2) {
      continue;
    }

    // ==========================
    // Total
    // ==========================

    if (first.startsWith("Jumlah")) {
      totalMasuk = parseNominal(row[2] ?? "");
      totalKeluar = parseNominal(row[5] ?? "");
      continue;
    }

    // ==========================
    // Saldo akhir
    // ==========================

    if (first.startsWith("Saldo")) {
      saldoAkhir = parseNominal(first);
      break;
    }

    // Lewati informasi lain
    if (first.startsWith("Selisih") || first.startsWith("Rumus")) {
      continue;
    }

    // ==========================
    // Uang Masuk
    // ==========================

    const uraianMasuk = row[0]?.trim() ?? "";
    const nominalMasuk = parseNominal(row[2] ?? "");

    if (uraianMasuk && nominalMasuk > 0) {
      transaksi.push({
        tanggal: "",
        uraian: uraianMasuk,
        masuk: nominalMasuk,
        keluar: 0,
      });
    }

    // ==========================
    // Uang Keluar
    // ==========================

    const uraianKeluar = row[3]?.trim() ?? "";
    const nominalKeluar = parseNominal(row[5] ?? "");

    if (uraianKeluar && nominalKeluar > 0) {
      transaksi.push({
        tanggal: "",
        uraian: uraianKeluar,
        masuk: 0,
        keluar: nominalKeluar,
      });
    }
  }

  return {
    periode,
    saldoAwal,
    saldoAkhir,
    totalMasuk,
    totalKeluar,
    transaksi,
  };
}
