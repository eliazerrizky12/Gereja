export function findTableByHeader(
  tables: string[][][],
  headers: string[],
): string[][] | null {
  const expected = headers.map((h) => h.trim().toLowerCase());

  for (const table of tables) {
    for (const row of table) {
      const current = row.map((c) => c.trim().toLowerCase());

      const match = expected.every(
        (header, index) => current[index] === header,
      );

      if (match) {
        return table;
      }
    }
  }

  return null;
}
