"use client";

import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Clock, Mic, User } from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Community = {
  title: string;
  description: string;
  leader?: string;
  mentor?: string;
  trainer?: string;
  logo?: string;
  schedule?: {
    date: string;
    mc: string;
    preacher: string;
    place: string;
    time: string;
  };
  trainings?: string[];
};

// Komponen Info untuk menampilkan detail jadwal
const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-2">
    <Icon className="mt-0.5 h-4 w-4 text-muted-foreground shrink-0" />
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

const communities = [
  {
    title: "KTB Kanaan",
    description:
      "Kelompok Tumbuh Bersama yang menjadi wadah persekutuan, doa, dan pertumbuhan iman jemaat.",
    leader: "Bpk. Nikolaus Boro Tulit, SE",
    schedule: {
      date: "7 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "KTB Yerusalem",
    description:
      "Kelompok Tumbuh Bersama yang menjadi wadah persekutuan, doa, dan pertumbuhan iman jemaat.",
    leader: "Bpk. Amirmasding",
    schedule: {
      date: "7 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "KTB Getsemani",
    description:
      "Kelompok Tumbuh Bersama yang menjadi wadah persekutuan, doa, dan pertumbuhan iman jemaat.",
    leader: "Bpk. Arwin Christian Loho",
    schedule: {
      date: "7 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "KTB Gunung Sinai",
    description:
      "Kelompok Tumbuh Bersama yang menjadi wadah persekutuan, doa, dan pertumbuhan iman jemaat.",
    leader: "Bpk. Hefsi Nehemya Wanca",
    schedule: {
      date: "7 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "Komunitas Perkaria",
    description:
      "Komunitas kaum pria yang bertujuan membangun karakter Kristus serta mempererat persaudaraan.",
    leader: "Bpk. Serka Impung Upai",
    schedule: {
      date: "5 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "Komunitas Perkauan",
    description:
      "Komunitas kaum wanita sebagai wadah pembinaan rohani, pelayanan, dan persekutuan.",
    leader: "Ibu. Ernawati Laing, S.Sos",
    schedule: {
      date: "5 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "Komunitas Pemuda (Light Generation)",
    description:
      "Komunitas pemuda yang bertumbuh dalam firman Tuhan dan melayani melalui berbagai talenta.",
    leader: "Sdr. Triaji Cahyadi, ST",
    logo: "/pemuda.jpeg",
    schedule: {
      date: "5 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "Komunitas Remaja (Followers of Christ)",
    description:
      "Komunitas remaja yang mendorong generasi muda hidup sesuai firman Tuhan.",
    mentor: "Ibu. Christine Ria Christina",
    logo: "/remaja.jpeg",
    schedule: {
      date: "10 Juli 2026",
      mc: "Menunggu info",
      preacher: "Menunggu info",
      place: "Menunggu info",
      time: "Menunggu info",
    },
  },
  {
    title: "Komunitas Group Musik",
    description:
      "Tim musik yang melayani dalam ibadah Sekolah Minggu dan Remaja.",
    leader: "Ibu Beni",
    trainer: "Kak Angky",
    logo: "/musik.jpeg",
    trainings: ["Selasa • 16.00 WITA", "Sabtu • 14.00 WITA"],
  },
];

export default function KomunitasGerejaSection() {
  // Fungsi untuk mengecek apakah ada data yang bisa ditampilkan
  const hasCommunityData = (community: Community) => {
    return !!(
      community.leader ||
      community.mentor ||
      community.trainer ||
      community.schedule ||
      community.trainings
    );
  };

  return (
    <section id="komunitas" className="scroll-mt-20 bg-background py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">Komunitas Gereja</h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Setiap komunitas merupakan wadah bagi jemaat untuk bertumbuh dalam
            iman, membangun persekutuan, serta melayani sesuai dengan panggilan
            yang Tuhan berikan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border bg-background shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {communities.map((community, index) => (
              <AccordionItem
                key={community.title}
                value={`item-${index}`}
                className="px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {community.title}
                </AccordionTrigger>

                <AccordionContent>
                  <div className="space-y-5 pb-4">
                    <p className="leading-7 text-muted-foreground">
                      {community.description}
                    </p>

                    {community.logo && (
                      <div className="mb-5 flex justify-center">
                        <Image
                          src={community.logo}
                          alt={community.title}
                          width={96}
                          height={96}
                          className="rounded-full border bg-white object-contain p-2"
                        />
                      </div>
                    )}

                    {/* Cek apakah ada data komunitas */}
                    {hasCommunityData(community) && (
                      <div className="grid gap-3 md:grid-cols-2">
                        {/* Leader */}
                        {community.leader && (
                          <div className="rounded-xl border p-4">
                            <p className="text-sm text-muted-foreground">
                              Ketua
                            </p>
                            <p className="font-semibold">{community.leader}</p>
                          </div>
                        )}

                        {/* Mentor */}
                        {community.mentor && (
                          <div className="rounded-xl border p-4">
                            <p className="text-sm text-muted-foreground">
                              Ketua Pembina
                            </p>
                            <p className="font-semibold">{community.mentor}</p>
                          </div>
                        )}

                        {/* Trainer */}
                        {community.trainer && (
                          <div className="rounded-xl border p-4">
                            <p className="text-sm text-muted-foreground">
                              Pelatih Musik
                            </p>
                            <p className="font-semibold">{community.trainer}</p>
                          </div>
                        )}

                        {/* Schedule */}
                        {community.schedule && (
                          <div className="col-span-full rounded-xl border bg-muted/30 p-5">
                            <h4 className="mb-4 text-lg font-semibold">
                              Jadwal Ibadah
                            </h4>

                            <div className="grid gap-3 md:grid-cols-2">
                              <InfoItem
                                icon={Calendar}
                                label="Tanggal"
                                value={community.schedule.date}
                              />
                              <InfoItem
                                icon={Mic}
                                label="MC"
                                value={community.schedule.mc}
                              />
                              <InfoItem
                                icon={User}
                                label="Pengkhotbah"
                                value={community.schedule.preacher}
                              />
                              <InfoItem
                                icon={MapPin}
                                label="Tempat"
                                value={community.schedule.place}
                              />
                              <InfoItem
                                icon={Clock}
                                label="Jam"
                                value={community.schedule.time}
                              />
                            </div>
                          </div>
                        )}

                        {/* Trainings */}
                        {community.trainings &&
                          community.trainings.length > 0 && (
                            <div className="col-span-full rounded-xl border bg-muted/30 p-5">
                              <h4 className="mb-3 text-lg font-semibold">
                                Jadwal Latihan
                              </h4>

                              <ul className="space-y-2">
                                {community.trainings.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-primary">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
