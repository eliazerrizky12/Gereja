"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function FormulirDoa() {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [pokokDoa, setPokokDoa] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Mengirim data ke tabel 'formulir_doa' di Supabase
      const { error } = await supabase.from("formulir_doa").insert([
        {
          nama: nama,
          no_hp: noHp,
          pokok_doa: pokokDoa,
          is_public: isPublic,
        },
      ]);

      if (error) throw error;

      // Jika sukses, reset form dan tampilkan pesan berhasil
      setStatus({
        type: "success",
        message:
          "Permohonan doa berhasil dikirim. Tim pendoa kami akan mendoakannya.",
      });
      setNama("");
      setNoHp("");
      setPokokDoa("");
      setIsPublic(false);
    } catch (error: unknown) {
      // PERBAIKAN: Mengganti 'any' dengan 'unknown' dan mengecek tipe error
      if (error instanceof Error) {
        console.error("Error submitting form:", error.message);
      } else {
        console.error("Error submitting form:", String(error));
      }
      setStatus({
        type: "error",
        message:
          "Terjadi kesalahan saat mengirim permohonan doa. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-8 shadow-md">
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle className="text-2xl text-primary">
          Formulir Permohonan Doa
        </CardTitle>
        <CardDescription>
          Tuliskan pokok doa Anda. Tim pendoa kami siap mendukung Anda di dalam
          doa.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {status.type === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
            {status.message}
          </div>
        )}

        {status.type === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              id="nama"
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Contoh: Budi Santoso"
            />
          </div>

          <div>
            <label
              htmlFor="noHp"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              No. WhatsApp (Opsional)
            </label>
            <input
              id="noHp"
              type="tel"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="0812-xxxx-xxxx"
            />
          </div>

          <div>
            <label
              htmlFor="pokokDoa"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Pokok Doa
            </label>
            <textarea
              id="pokokDoa"
              required
              rows={4}
              value={pokokDoa}
              onChange={(e) => setPokokDoa(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Ceritakan pergumulan atau ucapan syukur Anda di sini..."
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              id="isPublic"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="h-4 w-4 text-primary rounded border-slate-300 focus:ring-primary"
            />
            <label htmlFor="isPublic" className="text-sm text-slate-600">
              Izinkan pokok doa ini dibacakan di warta jemaat (publik)
            </label>
          </div>

          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Mengirim..." : "Kirim Permohonan Doa"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
