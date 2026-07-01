"use client";

import { useState } from "react";

import { uploadWarta } from "@/actions/upload-warta";
import { publishWartaAction } from "@/actions/publish-warta";

import type { LaporanKas } from "@/lib/docx/types";

import type { JadwalIbadah, JadwalSepekan } from "@/lib/docx/types";

import type { Ibadah } from "@/lib/docx/types";

import type { Perayaan } from "@/lib/docx/types";

import type { Pelayan } from "@/lib/docx/types";

import type { Birthday } from "@/lib/docx/types";

import type { Anniversary } from "@/lib/docx/types";

type Result = Awaited<ReturnType<typeof uploadWarta>>;

export default function UploadWartaPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [publishing, setPublishing] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await uploadWarta(formData);

      setResult(res);
    } catch (err) {
      console.error(err);
      alert("Gagal memproses file.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePublish() {
    if (!result) return;

    try {
      setPublishing(true);

      await publishWartaAction(result.parsed);

      alert("Berhasil dipublish.");
    } catch (e) {
      console.error(e);

      alert("Gagal publish.");
    } finally {
      setPublishing(false);
    }
  }

  return (
    <div className="container mx-auto max-w-7xl py-10">
      <h1 className="mb-2 text-3xl font-bold">DOCX Parser Inspector</h1>

      <p className="mb-8 text-muted-foreground">
        Upload Warta Jemaat (.docx) untuk melihat hasil extractor dan parser.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-xl border bg-background p-6"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            name="file"
            type="file"
            accept=".docx"
            required
            className="flex-1 rounded-lg border p-3"
          />

          <button
            disabled={loading}
            className="rounded-lg bg-primary px-6 py-3 text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Upload"}
          </button>
        </div>
      </form>

      {!result && (
        <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
          Belum ada file yang diproses.
        </div>
      )}

      {result && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Stat title="Tables" value={result.tables.length} />

            <Stat title="Ultah" value={result.parsed.ulangTahun.length} />

            <Stat
              title="Nikah"
              value={result.parsed.ulangTahunPernikahan.length}
            />

            <Stat title="Kas" value={result.parsed.kas.transaksi.length} />

            <Stat
              title="Jadwal"
              value={
                result.parsed.jadwalIbadah.length +
                result.parsed.jadwalSepekan.length
              }
            />

            <Stat title="Pelayan" value={result.parsed.pelayan.length} />

            <Stat title="Ibadah" value={result.parsed.jadwalIbadah.length} />

            <Stat title="Perayaan" value={result.parsed.perayaan.length} />

            <Stat title="Doa" value={result.parsed.doa.length} />
          </div>

          <KasTable data={result.parsed.kas} />

          <JadwalIbadahTable data={result.parsed.jadwalIbadah} />

          <JadwalSepekanTable data={result.parsed.jadwalSepekan} />

          <JadwalKTBTable data={result.parsed.ibadah} />

          <PerayaanTable data={result.parsed.perayaan} />

          <PelayanTable data={result.parsed.pelayan} />

          <UltahTable data={result.parsed.ulangTahun} />

          <UltahPernikahanTable data={result.parsed.ulangTahunPernikahan} />
        </>
      )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={handlePublish}
          disabled={!result || publishing}
          className="rounded-lg bg-green-600 px-6 py-3 text-white"
        >
          {publishing ? "Publishing..." : "Publish Warta"}
        </button>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-xl border bg-background p-5">
      <div className="text-sm text-muted-foreground">{title}</div>

      <div className="mt-2 text-3xl font-bold">{value}</div>
    </div>
  );
}

// function Inspector({ title, data }: { title: string; data: unknown }) {
//   return (
//     <details open className="mb-6 overflow-hidden rounded-xl border">
//       <summary className="cursor-pointer border-b bg-muted px-5 py-3 font-semibold">
//         {title}
//       </summary>

//       <pre className="max-h-162.5 overflow-auto bg-muted/20 p-5 text-sm">
//         {JSON.stringify(data, null, 2)}
//       </pre>
//     </details>
//   );
// }

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function InfoItem({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase text-muted-foreground">{title}</div>

      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

function KasTable({ data }: { data: LaporanKas }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Laporan Kas
      </div>

      <div className="grid gap-4 border-b bg-muted/20 p-5 md:grid-cols-2 lg:grid-cols-5">
        <InfoItem title="Periode" value={data.periode || "-"} />

        <InfoItem title="Saldo Awal" value={formatRupiah(data.saldoAwal)} />

        <InfoItem title="Total Masuk" value={formatRupiah(data.totalMasuk)} />

        <InfoItem title="Total Keluar" value={formatRupiah(data.totalKeluar)} />

        <InfoItem title="Saldo Akhir" value={formatRupiah(data.saldoAkhir)} />
      </div>

      {data.transaksi.length === 0 ? (
        <div className="p-5 text-muted-foreground">
          Tidak ada transaksi kas.
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">No</th>
                <th className="px-4 py-3 text-left">Uraian</th>
                <th className="px-4 py-3 text-right">Masuk</th>
                <th className="px-4 py-3 text-right">Keluar</th>
              </tr>
            </thead>

            <tbody>
              {data.transaksi.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3">{item.uraian}</td>

                  <td className="px-4 py-3 text-right font-medium text-green-600">
                    {item.masuk > 0 ? formatRupiah(item.masuk) : "-"}
                  </td>

                  <td className="px-4 py-3 text-right font-medium text-red-600">
                    {item.keluar > 0 ? formatRupiah(item.keluar) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="border-t bg-muted/30 font-semibold">
              <tr>
                <td colSpan={2} className="px-4 py-3">
                  Total
                </td>

                <td className="px-4 py-3 text-right">
                  {formatRupiah(data.totalMasuk)}
                </td>

                <td className="px-4 py-3 text-right">
                  {formatRupiah(data.totalKeluar)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

function JadwalIbadahTable({ data }: { data: JadwalIbadah[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Jadwal Ibadah Minggu
      </div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        data.map((jadwal, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div className="bg-muted/30 px-5 py-4">
              <div className="font-semibold">{jadwal.tanggal}</div>

              <div className="text-sm text-muted-foreground">
                {jadwal.jenisIbadah}
              </div>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-muted/20">
                <tr>
                  <th className="px-4 py-3 text-left">Tugas</th>

                  <th className="px-4 py-3 text-left">Petugas</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.petugas.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3 font-medium">{item.tugas}</td>

                    <td className="px-4 py-3">{item.nama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

function JadwalSepekanTable({ data }: { data: JadwalSepekan[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Jadwal Ibadah Sepekan
      </div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">Nama Ibadah</th>

                <th className="px-4 py-3 text-left">Tanggal</th>

                <th className="px-4 py-3 text-left">Jam</th>

                <th className="px-4 py-3 text-left">MC</th>

                <th className="px-4 py-3 text-left">Pengkhotbah</th>

                <th className="px-4 py-3 text-left">Tempat</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{item.namaIbadah}</td>

                  <td className="px-4 py-3">{item.tanggal}</td>

                  <td className="px-4 py-3">{item.jam}</td>

                  <td className="px-4 py-3">{item.mc}</td>

                  <td className="px-4 py-3">{item.pengkhotbah}</td>

                  <td className="px-4 py-3">{item.tempat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function JadwalKTBTable({ data }: { data: Ibadah[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Jadwal KTB
      </div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">Nama Ibadah</th>

                <th className="px-4 py-3 text-left">Tanggal</th>

                <th className="px-4 py-3 text-left">Jam</th>

                <th className="px-4 py-3 text-left">MC</th>

                <th className="px-4 py-3 text-left">Pengkhotbah</th>

                <th className="px-4 py-3 text-left">Tempat</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{item.nama}</td>

                  <td className="px-4 py-3">{item.tanggal}</td>

                  <td className="px-4 py-3">{item.pukul}</td>

                  <td className="px-4 py-3">{item.mc}</td>

                  <td className="px-4 py-3">{item.pengkhotbah}</td>

                  <td className="px-4 py-3">{item.tempat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function PerayaanTable({ data }: { data: Perayaan[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">Perayaan</div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">Nama Perayaan</th>

                <th className="px-4 py-3 text-left">Tanggal</th>

                <th className="px-4 py-3 text-left">Pukul</th>

                <th className="px-4 py-3 text-left">Tempat</th>

                <th className="px-4 py-3 text-left">Koordinator</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 font-medium">{item.nama}</td>

                  <td className="px-4 py-3">{item.tanggal}</td>

                  <td className="px-4 py-3">{item.pukul}</td>

                  <td className="px-4 py-3">{item.tempat}</td>

                  <td className="px-4 py-3">{item.koordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function PelayanTable({ data }: { data: Pelayan[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">Pelayan</div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">Tugas</th>

                <th className="px-4 py-3 text-left">Nama</th>

                <th className="px-4 py-3 text-left">No. Telepon</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 font-medium">{item.tugas}</td>

                  <td className="px-4 py-3">{item.nama}</td>

                  <td className="px-4 py-3">{item.telepon || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function UltahTable({ data }: { data: Birthday[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Ulang Tahun
      </div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="w-16 px-4 py-3 text-left">No</th>

                <th className="px-4 py-3 text-left">Nama</th>

                <th className="px-4 py-3 text-left">Tanggal Lahir</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">{item.nama}</td>

                  <td className="px-4 py-3">{item.tanggalLahir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function UltahPernikahanTable({ data }: { data: Anniversary[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border">
      <div className="border-b bg-muted px-5 py-3 font-semibold">
        Ulang Tahun Pernikahan
      </div>

      {data.length === 0 ? (
        <div className="p-5 text-muted-foreground">Tidak ada data.</div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="w-16 px-4 py-3 text-left">No</th>

                <th className="px-4 py-3 text-left">Suami</th>

                <th className="px-4 py-3 text-left">Istri</th>

                <th className="px-4 py-3 text-left">Tanggal Pernikahan</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">{item.suami}</td>

                  <td className="px-4 py-3">{item.istri}</td>

                  <td className="px-4 py-3">{item.tanggalPernikahan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
