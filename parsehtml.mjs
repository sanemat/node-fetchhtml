/**
 * @param {string} html - html
 * @returns {{ imageUrls: string[], linkUrls: string[] }} - included urls
 */
export async function parsehtml(html) {
  return {
    imageUrls: [],
    linkUrls: [],
  };
}
