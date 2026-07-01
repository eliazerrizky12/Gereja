import HeroSection from "@/components/home/HeroSection";
import VisiMisiSection from "@/components/home/VisiMisiSection";
import DataStatistikSection from "@/components/home/DataStatistikSection";
import TimPenggembalaanSection from "@/components/home/TimPenggembalaanSection";
import StrukturBPJSection from "@/components/home/StrukturBPJSection";
import PekerjaPenuhWaktuSection from "@/components/home/PekerjaPenuhWaktuSection";
import KomunitasGerejaSection from "@/components/home/KomunitasGerejaSection";
import PelayananPastoralSection from "@/components/home/PelayananPastoralSection";
import GaleriKegiatanSection from "@/components/home/GaleriKegiatanSection";
import KontakPelayananSection from "@/components/home/KontakPelayananSection";
import BeritaMingguanSection from "@/components/home/BeritaMingguanSection";

export default async function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <VisiMisiSection />
      <DataStatistikSection />
      <TimPenggembalaanSection />
      <StrukturBPJSection />
      <BeritaMingguanSection />
      <PekerjaPenuhWaktuSection />
      <KomunitasGerejaSection />
      <PelayananPastoralSection />
      <GaleriKegiatanSection />
      <KontakPelayananSection />
    </main>
  );
}
