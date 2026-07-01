export type SummaryData = {
  jemaat: number;
  kepalaKeluarga: number;
  lakiLaki: number;
  perempuan: number;
  lansia: number;
  sudahBaptis: number;
  belumBaptis: number;
};

export type GenderData = {
  name: string;
  value: number;
  color: string;
};

export type KtbData = {
  nama: string;
  jumlah: number;
};

export type TableData = {
  kategori: string;
  jumlah: number;
};

export const summary: SummaryData = {
  jemaat: 422,
  kepalaKeluarga: 112,
  lakiLaki: 215,
  perempuan: 207,
  lansia: 29,
  sudahBaptis: 329,
  belumBaptis: 93,
};

export const genderData: GenderData[] = [
  {
    name: "Laki-laki",
    value: summary.lakiLaki,
    color: "#2563eb",
  },
  {
    name: "Perempuan",
    value: summary.perempuan,
    color: "#ec4899",
  },
];

export const ktb: KtbData[] = [
  {
    nama: "Yerusalem",
    jumlah: 85,
  },
  {
    nama: "Kanaan",
    jumlah: 77,
  },
  {
    nama: "Getsemani",
    jumlah: 75,
  },
  {
    nama: "Perkauan",
    jumlah: 66,
  },
  {
    nama: "Perkaria",
    jumlah: 63,
  },
  {
    nama: "Gunung Sinai",
    jumlah: 13,
  },
];

export const tableData: TableData[] = [
  {
    kategori: "Total Jemaat",
    jumlah: summary.jemaat,
  },
  {
    kategori: "Kepala Keluarga",
    jumlah: summary.kepalaKeluarga,
  },
  {
    kategori: "Laki-laki",
    jumlah: summary.lakiLaki,
  },
  {
    kategori: "Perempuan",
    jumlah: summary.perempuan,
  },
  {
    kategori: "Lansia",
    jumlah: summary.lansia,
  },
  {
    kategori: "Sudah Baptis",
    jumlah: summary.sudahBaptis,
  },
  {
    kategori: "Belum Baptis",
    jumlah: summary.belumBaptis,
  },
  ...ktb.map((item) => ({
    kategori: `KTB ${item.nama}`,
    jumlah: item.jumlah,
  })),
];
