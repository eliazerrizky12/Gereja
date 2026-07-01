import data from "@/data/warta/latest.json";

export default function WartaJemaatPage() {
  return (
    <main className="container mx-auto py-12 space-y-10">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Warta Jemaat</h1>

        <p className="text-muted-foreground mt-3">{data.tanggal}</p>
      </section>

      <section className="rounded-xl border p-8">
        <h2 className="text-3xl font-bold">{data.tema}</h2>

        <p className="mt-2 text-primary">{data.ayat}</p>

        <p className="mt-4">Pengkhotbah: {data.pengkhotbah}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pengumuman</h2>

        <div className="grid gap-4">
          {data.pengumuman.map((item, index) => (
            <div key={index} className="rounded-xl border p-5">
              <h3 className="font-semibold">{item.judul}</h3>

              <p className="text-muted-foreground mt-2">{item.isi}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pokok Doa</h2>

        <ul className="space-y-2">
          {data.doa.map((nama, index) => (
            <li key={index}>• {nama}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
