import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeText(text: string) {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/[ ]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function between(text: string, start: string, end: string) {
  const s = text.indexOf(start);

  if (s === -1) return "";

  const e = text.indexOf(end, s);

  if (e === -1) return text.substring(s);

  return text.substring(s + start.length, e);
}
