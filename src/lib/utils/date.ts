const MONTHS: Record<string, string> = {
  januari: "01",
  februari: "02",
  maret: "03",
  april: "04",
  mei: "05",
  juni: "06",
  juli: "07",
  agustus: "08",
  september: "09",
  oktober: "10",
  november: "11",
  desember: "12",
};

export function parseDate(text: string): string | null {
  const match = text.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, day, monthName, year] = match;

  const month = MONTHS[monthName.toLowerCase()];

  if (!month) {
    return null;
  }

  return `${year}-${month}-${day.padStart(2, "0")}`;
}
