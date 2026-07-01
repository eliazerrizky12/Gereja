"use server";

import { parseWarta } from "@/lib/docx/parser-warta";

export async function uploadWarta(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("File tidak ditemukan.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await parseWarta(buffer);

  return {
    success: true,
    ...result,
  };
}
