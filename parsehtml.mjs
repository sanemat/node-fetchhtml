import { load } from "cheerio";

/**
 * @param {string} html - html
 * @returns {{ imageUrls: string[], linkUrls: string[] }} - included urls
 */
export async function parsehtml(html) {
  let $ = load(html);
  let imageUrls = [];
  let linkUrls = [];
  $("img").map(() => imageUrls.push(""));
  $("a").map(() => linkUrls.push(""));
  return {
    imageUrls: imageUrls,
    linkUrls: linkUrls,
  };
}
