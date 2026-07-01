"use server";

import { publishWarta } from "@/lib/warta/publish";

import type { Warta } from "@/lib/docx/types";

export async function publishWartaAction(parsed: Warta) {
  return await publishWarta(parsed);
}
