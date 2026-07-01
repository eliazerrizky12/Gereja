import * as cheerio from "cheerio";

export function debugTables($: cheerio.CheerioAPI) {
  $("table").each((index, table) => {
    console.log(`\n================ TABLE ${index + 1} ================`);

    $(table)
      .find("tr")
      .each((_, row) => {
        const cells = $(row)
          .find("td,th")
          .map((_, cell) => $(cell).text().trim())
          .get();

        console.log(cells);
      });
  });
}
