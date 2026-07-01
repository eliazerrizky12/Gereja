export function normalize(text: string): string {
  return text
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeLower(text: string): string {
  return normalize(text).toLowerCase();
}

export function isEmpty(value?: string): boolean {
  return !normalize(value ?? "");
}
