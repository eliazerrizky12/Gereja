export interface Birthday {
  nama: string;
  tanggalLahir: string;
}

export interface Anniversary {
  suami: string;
  istri: string;
  tanggalPernikahan: string;
}

export interface UltahResult {
  ulangTahun: Birthday[];
  ulangTahunPernikahan: Anniversary[];
}

export interface Kas {
  tanggal: string;
  uraian: string;
  masuk: number;
  keluar: number;
}

export interface LaporanKas {
  periode: string;
  saldoAwal: number;
  saldoAkhir: number;
  totalMasuk: number;
  totalKeluar: number;
  transaksi: Kas[];
}

export interface PetugasIbadah {
  tugas: string;
  nama: string;
}

export interface JadwalIbadah {
  tanggal: string;
  jenisIbadah: string;
  petugas: PetugasIbadah[];
}

export interface JadwalSepekan {
  namaIbadah: string;
  tanggal: string;
  jam: string;
  mc: string;
  pengkhotbah: string;
  tempat: string;
}

export interface Doa {
  kategori: string;
  isi: string;
}

export interface Perayaan {
  nama: string;
  tanggal: string;
  pukul: string;
  tempat: string;
  koordinator: string;
}

export interface Ibadah {
  nama: string;
  tanggal: string;
  pukul: string;
  mc: string;
  pengkhotbah: string;
  tempat: string;
}

export interface Pelayan {
  tugas: string;
  nama: string;
  telepon: string;
}

export interface ScheduleItem {
  kategori: "minggu" | "sepekan" | "ktb";

  title: string;
  tanggal: string;

  jam?: string;
  tempat?: string;
  mc?: string;
  pengkhotbah?: string;

  petugas?: PetugasIbadah[];
}

export interface Warta {
  ulangTahun: Birthday[];

  ulangTahunPernikahan: Anniversary[];

  kas: LaporanKas;

  jadwalIbadah: JadwalIbadah[];

  jadwalSepekan: JadwalSepekan[];

  pelayan: Pelayan[];

  doa: Doa[];

  ibadah: Ibadah[];

  perayaan: Perayaan[];
}
