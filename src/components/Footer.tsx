import Link from "next/link";
import { MapPin, Phone, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Info Gereja */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">
            GKII Barong Tongkok
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Selamat Datang Beribadah, Tuhan Yesus Memberkati.
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              {/* Alamat berdasarkan warta jemaat */}
              <span>Jln. D.I. Panjaitan, RT XV Kelurahan Barong Tongkok</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 shrink-0" />
              <div className="flex flex-col">
                {/* Kontak Gembala dan Asisten */}
                <span>0813-5062-0744 (Pdt. Bernabas Bin Sala)</span>
                <span>0822-5021-3737 (Ev. Trie Aprilliani)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 2: Informasi Rekening (Menggantikan Tautan Cepat) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Rekening Persembahan
          </h3>
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <div className="flex items-start gap-2">
              <CreditCard className="h-4 w-4 mt-1 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white">
                  Gereja GKII Barong Tongkok
                </strong>
                <span>Bank BPD Kaltimtara</span>
                <span>0112531734</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-4 w-4 mt-1 shrink-0" />
              <div className="flex flex-col">
                <strong className="text-white">Seksi Pembangunan</strong>
                <span>Bank BPD Kaltimtara</span>
                <span>0112374060</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 3: Jadwal Ibadah Utama */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Jadwal Ibadah Minggu
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li>
              <strong className="text-white">Sekolah Minggu</strong>
              <br />
              Minggu, 09:30 WITA
            </li>
            <li>
              <strong className="text-white">Ibadah Perkaria / Perkauan</strong>
              <br />
              Minggu, 16:00 WITA
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} GKII Jemaat Barong Tongkok. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
