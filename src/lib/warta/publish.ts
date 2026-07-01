import { supabase } from "@/lib/supabase/server";

import type { Warta } from "@/lib/docx/types";

export async function publishWarta(parsed: Warta) {
  const today = new Date();

  const tanggal = today.toISOString().slice(0, 10);

  const judul = `Warta Jemaat ${tanggal}`;

  const { data, error } = await supabase
    .from("warta")
    .insert({
      judul,
      tanggal,
      periode: parsed.kas.periode,
      status: "published",
      data: parsed,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
