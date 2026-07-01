import JSZip from "jszip";
import { XMLParser } from "fast-xml-parser";

type XmlPrimitive = string | number | boolean;

type XmlNode = XmlPrimitive | XmlObject | XmlNode[] | null | undefined;

interface XmlObject {
  [key: string]: XmlNode;
}

export async function extractTables(buffer: Buffer): Promise<string[][][]> {
  const zip = await JSZip.loadAsync(buffer);

  const document = zip.file("word/document.xml");

  if (!document) {
    throw new Error("word/document.xml tidak ditemukan.");
  }

  const xml = await document.async("text");

  const keyword = "Pembangunan";
  const index = xml.indexOf(keyword);

  if (index !== -1) {
    console.log(xml.substring(index - 300, index + 1500));
  }

  const parser = new XMLParser({
    ignoreAttributes: true,
    removeNSPrefix: true,

    parseTagValue: false,
    parseAttributeValue: false,
  });

  const doc = parser.parse(xml) as XmlObject;

  const body = findBody(doc);

  if (!body) {
    return [];
  }

  const tables = findTables(body);

  const uniqueTables = Array.from(
    new Map(tables.map((table) => [JSON.stringify(table), table])).values(),
  );

  return uniqueTables.map(parseTable);
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

function findTables(node: XmlNode): XmlObject[] {
  if (!isXmlObject(node)) {
    if (Array.isArray(node)) {
      return node.flatMap(findTables);
    }

    return [];
  }

  const result: XmlObject[] = [];

  for (const [key, value] of Object.entries(node)) {
    if (key === "tbl") {
      if (Array.isArray(value)) {
        result.push(...value.filter(isXmlObject));
      } else if (isXmlObject(value)) {
        result.push(value);
      }

      continue;
    }

    result.push(...findTables(value));
  }

  return result;
}

function parseTable(table: XmlObject): string[][] {
  const rows = table.tr;

  if (!rows) {
    return [];
  }

  const rowList = Array.isArray(rows) ? rows : [rows];

  return rowList.filter(isXmlObject).map(parseRow);
}

function parseRow(row: XmlObject): string[] {
  const cells = row.tc;

  if (!cells) {
    return [];
  }

  const cellList = Array.isArray(cells) ? cells : [cells];

  return cellList.filter(isXmlObject).map(parseCell);
}

function parseCell(cell: XmlObject): string {
  const raw = collectText(cell);
  const text = normalize(raw);

  if (raw.includes("472")) {
    console.log("RAW:", JSON.stringify(raw));
    console.log("NORMAL:", JSON.stringify(text));
  }

  return text;
}

function collectText(node: XmlNode): string {
  if (node == null) return "";

  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (typeof node === "boolean") return "";

  if (Array.isArray(node)) {
    return node.map(collectText).join("");
  }

  let text = "";

  for (const [key, value] of Object.entries(node)) {
    switch (key) {
      case "instrText":
      case "fldChar":
      case "fldSimple":
        continue;

      case "tab":
        text += "\t";
        continue;

      case "br":
      case "cr":
        text += "\n";
        continue;

      default:
        text += collectText(value);
    }
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
