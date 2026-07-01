import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gereja Kasih",
  description:
    "Website resmi Gereja Kasih. Temukan jadwal ibadah, kegiatan, dan pelayanan kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Navbar dipasang di paling atas */}
        <Navbar />

        {/* Konten utama akan mengambil sisa ruang yang ada */}
        <main className="grow">{children}</main>

        {/* Footer dipasang di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}
