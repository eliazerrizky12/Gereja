import * as cheerio from "cheerio";

export function clean(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d)([A-Za-z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function paragraphs($: cheerio.CheerioAPI) {
  return $("p")
    .map((_, el) => clean($(el).text()))
    .get()
    .filter(Boolean);
}

export function tables($: cheerio.CheerioAPI) {
  return $("table").toArray();
}

export function parseNominal(text: string): number {
  return Number(text.replace(/Rp\.?/gi, "").replace(/[^\d]/g, "")) || 0;
}
