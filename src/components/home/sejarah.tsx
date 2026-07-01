"use client";

import { Church } from "lucide-react";

export default function HistoryPage() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2">
            <Church className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-blue-700">
              SEJARAH GEREJA
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-black text-slate-900 md:text-5xl">
            Sejarah Singkat GKII Barong Tongkok
          </h1>

          <p className="mt-4 text-xl text-slate-600">
            Dari Ibadah Rumah ke Rumah Menjadi Bangunan Penuh Berkat
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-slate mx-auto max-w-none leading-8">
          <p>
            <strong>
              Perjalanan sejarah Gereja Kemah Injil Indonesia (GKII) Barong
              Tongkok
            </strong>{" "}
            adalah sebuah kisah inspiratif tentang ketekunan, semangat
            kebersamaan, dan penyertaan Tuhan. Bermula pada rentang tahun 1984
            hingga 1990-an, gereja ini diawali dengan langkah yang sangat
            sederhana. Pada masa itu, belum ada bangunan fisik yang berdiri;
            ibadah hanya dilakukan dari rumah ke rumah oleh enam kepala keluarga
            (KK) perintis, di bawah asuhan pelayanan <strong>Pdt. Doyos</strong>{" "}
            dari GKII Bigung.
          </p>
          <br></br>
          <p>
            Memasuki era 1990-an hingga tahun 1996, tongkat estafet pelayanan
            diteruskan oleh <strong>Pdt. Wira Thomas</strong>. Pada masa inilah
            fondasi awal GKII Barong Tongkok mulai terbentuk secara nyata.
            Berkat pembagian lahan oleh Camat Barong Tongkok saat itu,
            <strong> Bpk. Drs. Murni Neri</strong>, sekitar tahun 1992, jemaat
            mulai mendirikan sebuah gereja kecil berukuran{" "}
            <strong>7 × 14 meter</strong>
            yang memadukan konstruksi beton dan kayu.
          </p>
          <br></br>
          <p>
            Pelayanan kemudian dilanjutkan secara singkat oleh
            <strong> Ev. Edison Suanto, S.Th</strong> selama sembilan bulan pada
            tahun 1996, sebelum diteruskan oleh
            <strong> Pdt. Margaretha Imau, S.Th</strong> dari tahun 1997 hingga
            2006. Di bawah kepemimpinan beliau, bangunan gereja kecil yang
            dirintis sebelumnya berhasil diselesaikan pada tahun 1998. Tidak
            hanya itu, fasilitas gereja perlahan bertambah dengan dibangunnya
            pastori gembala sekitar tahun 2002, dan pelayanan pun semakin meluas
            dengan dibukanya Pos Pekabaran Injil (PI) Juhan Asa.
          </p>
          <br></br>
          <p>
            Periode kepemimpinan selanjutnya yang dipegang oleh
            <strong> Pdt. Ubang Laing, S.Th</strong> (2006–2011) menjadi babak
            baru yang krusial bagi GKII Barong Tongkok. Seiring dengan adanya
            pemekaran kabupaten yang membawa banyak pekerja dari luar daerah,
            jumlah jemaat bertumbuh dengan sangat pesat. Hal ini memunculkan
            kebutuhan mendesak akan gedung peribadatan yang lebih besar. Pada
            tahun 2007, peletakan batu pertama untuk gereja baru pun
            dilaksanakan, beriringan dengan pembangunan pastori kedua.
          </p>
          <br></br>
          <p>
            Masa pembangunan ini adalah masa yang penuh dinamika. Proses
            peribadatan jemaat sempat berpindah-pindah, mulai dari pastori
            kedua, gedung gereja baru yang masih setengah jadi, hingga meminjam
            kantor Kelurahan Barong Tongkok. Peminjaman fasilitas ini terwujud
            berkat dukungan dari <strong>Bpk. Kantun (Almarhum)</strong>, lurah
            setempat yang juga merupakan jemaat GKII Barong Tongkok. Pembangunan
            gedung gereja besar ini didukung penuh oleh dana swadaya jemaat,
            serta tambahan bantuan material dari pihak luar yang peduli.
          </p>
          <br></br>
          <p>
            Setelah pelayanan Pdt. Ubang selesai, estafet kepemimpinan
            dilanjutkan oleh <strong>Pdt. Ajan Jiu, S.Th., M.A.</strong>
            (2011–2021). Pada masa bakti beliau, doa dan perjuangan jemaat yang
            memakan waktu hingga 14 tahun lamanya akhirnya berbuah manis. Gedung
            gereja baru yang megah dan representatif berhasil diselesaikan dan
            diresmikan secara langsung oleh
            <strong> Ketua Umum GKII, Pdt. Dr. Daniel Ronda, S.Th.</strong>,
            pada tanggal <strong>14 November 2021</strong>. Di era ini pula,
            gereja semakin aktif menjangkau jiwa-jiwa baru dengan membuka
            sejumlah cabang pelayanan, yaitu Pos PI Mencimai, Pos PI Tuncum, dan
            Pos PI Asa.
          </p>
          <br></br>
          <p>
            Saat ini, tonggak pelayanan GKII Barong Tongkok diteruskan oleh
            <strong> Pdt. Bernabas Bin Sala, S.Th.</strong> (2021–sekarang).
            Penyempurnaan gedung dan fasilitas terus dilakukan, di antaranya
            adalah pembangunan pagar gereja dan penyelesaian (finishing) plafon
            bagian belakang gereja, guna memberikan kenyamanan maksimal bagi
            jemaat yang terus bertumbuh.
          </p>
          <br></br>
          <p className="rounded-2xl border border-blue-100 bg-blue-50 p-6 font-medium italic text-slate-700">
            Dari persekutuan enam keluarga di ruang tamu hingga memiliki gedung
            yang kokoh dan cabang peribadatan yang luas, sejarah GKII Barong
            Tongkok menjadi bukti nyata dari kekuatan gotong royong jemaat dan
            kesetiaan penyertaan Tuhan dari generasi ke generasi.
          </p>
        </article>
      </div>
    </section>
  );
}
