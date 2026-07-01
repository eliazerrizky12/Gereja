export function findSection(paragraphs: string[], title: string): string[] {
  const result: string[] = [];

  const index = paragraphs.findIndex(
    (p) => p.toLowerCase() === title.toLowerCase(),
  );

  if (index === -1) {
    return result;
  }

  for (let i = index + 1; i < paragraphs.length; i++) {
    const current = paragraphs[i];

    if (current === current.toUpperCase() && current.length > 3) {
      break;
    }

    result.push(current);
  }

  return result;
}
