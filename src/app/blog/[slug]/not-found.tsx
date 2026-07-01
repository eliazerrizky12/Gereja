import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="h-12 w-12 text-primary" />
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight">
          Artikel Tidak Ditemukan
        </h1>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Maaf, artikel yang Anda cari tidak tersedia atau mungkin telah
          dipindahkan maupun dihapus.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition hover:bg-muted"
          >
            <Home className="h-4 w-4" />
            Ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
