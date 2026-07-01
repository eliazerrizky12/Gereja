import JSZip from "jszip";
import { XMLParser } from "fast-xml-parser";

type XmlPrimitive = string | number | boolean;

type XmlNode = XmlPrimitive | XmlObject | XmlNode[] | null | undefined;

interface XmlObject {
  [key: string]: XmlNode;
}

export async function extractText(buffer: Buffer): Promise<string[]> {
  const zip = await JSZip.loadAsync(buffer);

  const document = zip.file("word/document.xml");

  if (!document) {
    throw new Error("word/document.xml tidak ditemukan.");
  }

  const xml = await document.async("text");

  const parser = new XMLParser({
    ignoreAttributes: true,
    removeNSPrefix: true,
  });

  const doc = parser.parse(xml) as XmlObject;

  const body = findBody(doc);

  if (!body) {
    return [];
  }

  return extractParagraphs(body);
}

function findBody(node: XmlNode): XmlObject | null {
  if (!isXmlObject(node)) {
    return null;
  }

  if ("body" in node && isXmlObject(node.body)) {
    return node.body;
  }

  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const found = findBody(item);

        if (found) {
          return found;
        }
      }

      continue;
    }

    const found = findBody(value);

    if (found) {
      return found;
    }
  }

  return null;
}

function extractParagraphs(body: XmlObject): string[] {
  const paragraphs: string[] = [];

  for (const value of Object.values(body)) {
    collectParagraphs(value, paragraphs, false);
  }

  return paragraphs.filter(Boolean);
}

function collectParagraphs(
  node: XmlNode,
  result: string[],
  insideTable: boolean,
): void {
  if (node == null) {
    return;
  }

  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "boolean"
  ) {
    return;
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectParagraphs(item, result, insideTable);
    }

    return;
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === "tbl") {
      collectParagraphs(value, result, true);
      continue;
    }

    if (key === "p") {
      const list = Array.isArray(value) ? value : [value];

      for (const paragraph of list) {
        if (!isXmlObject(paragraph)) {
          continue;
        }

        const text = normalize(collectText(paragraph));

        if (!insideTable && text) {
          result.push(text);
        }
      }

      continue;
    }

    collectParagraphs(value, result, insideTable);
  }
}

function collectText(node: XmlNode): string {
  if (node == null) return "";

  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number" || typeof node === "boolean") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(collectText).join("");
  }

  // hanya ambil teks yang benar-benar tampil di Word
  if ("t" in node) {
    return collectText(node.t);
  }

  let text = "";

  for (const [key, value] of Object.entries(node)) {
    // abaikan MERGEFIELD dan field code lainnya
    if (key === "instrText" || key === "fldChar" || key === "fldSimple") {
      continue;
    }

    text += collectText(value);
  }

  return text;
}

function normalize(text: string): string {
  return text
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isXmlObject(value: XmlNode): value is XmlObject {
  return (
    value !== null &&
    value !== undefined &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
}
