import { supabase } from "@/lib/supabase/server";

import type { Warta } from "@/lib/docx/types";

export async function getLatestWarta() {
  const { data, error } = await supabase
    .from("warta")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    throw error;
  }

  return data.data as Warta;
}
