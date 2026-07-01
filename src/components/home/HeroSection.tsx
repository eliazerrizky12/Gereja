"use client";

import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { Church, Cross, House, Users } from "lucide-react";
import HistoryPage from "./sejarah";

import CountUp from "react-countup";

import BlurText from "@/components/BlurText";
import { summary } from "@/components/home/summary/data/summary-data";
import { Button } from "@/components/ui/button";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const handleAnimationComplete = () => {
  console.log("Hero animation completed");
};

export default function HeroSection() {
  return (
    <section id="beranda" className="scroll-mt-20">
      <div
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/foto-gereja.jpeg')",
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80" />

        {/* Glow */}

        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md mt-2">
            <Church className="h-4 w-4 text-amber-300" />

            <span className="text-sm font-semibold tracking-wide">
              GKII BARONG TONGKOK
            </span>
          </div>

          {/* Title */}

          <BlurText
            text="Gereja Yang Bertumbuh, Bertambah, dan Berdampak"
            delay={180}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`
              ${cormorant.className}
              mt-8
              flex
              w-full
              flex-wrap
              justify-center
              px-4
              text-center
              text-5xl
              font-semibold
              leading-tight
              tracking-wide
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,.6)]
              md:text-7xl
            `}
          />

          {/* Subtitle */}

          <BlurText
            text="Selamat datang di GKII Barong Tongkok. Bersama bertumbuh dalam iman, melayani dengan kasih, dan menjadi berkat bagi sesama."
            delay={280}
            animateBy="words"
            direction="top"
            className="
              mx-auto
              mt-6
              flex
              max-w-3xl
              flex-wrap
              justify-center
              text-center
              text-lg
              font-light
              leading-relaxed
              text-slate-200
              md:text-2xl
            "
          />

          {/* Buttons */}

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {/* Warta Jemaat */}
            <Button asChild size="lg" className="text-md">
              <Link
                href="/28 Juni 2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Warta Jemaat
              </Link>
            </Button>

            {/* Google Maps */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
      border-white
      bg-white/10
      text-md
      text-white
      backdrop-blur-md
      hover:bg-white
      hover:text-slate-900
    "
            >
              <Link
                href="https://maps.app.goo.gl/mTAKAn5Gyudpa3LDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lokasi Gereja
              </Link>
            </Button>

            {/* YouTube Live */}
            <Button asChild size="lg" className="text-md">
              <Link
                href="https://youtube.com/@gkii_barongtongkok?si=Ej-_CLvB3Azp9NHE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Streaming
              </Link>
            </Button>
          </div>

          {/* Statistics */}

          <div className="mx-auto mt-15 grid max-w-4xl grid-cols-3 gap-8 border-t border-white/20 pt-3 mb-5">
            <HeroStat
              icon={<Users className="h-6 w-6" />}
              value={summary.jemaat}
              label="Total Jemaat"
            />

            <HeroStat
              icon={<House className="h-6 w-6" />}
              value={summary.kepalaKeluarga}
              label="Kepala Keluarga"
            />

            <HeroStat
              icon={<Cross className="h-6 w-6" />}
              value={summary.sudahBaptis}
              label="Sudah Baptis"
            />
          </div>
        </div>
      </div>
      {/* Sejarah Gereja */}
      <HistoryPage />
    </section>
  );
}

type HeroStatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
};

function HeroStat({ icon, value, label }: HeroStatProps) {
  return (
    <div className="group flex flex-col items-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-amber-300 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
        {icon}
      </div>

      <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">
        <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce />
      </h3>

      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">
        {label}
      </p>
    </div>
  );
}
