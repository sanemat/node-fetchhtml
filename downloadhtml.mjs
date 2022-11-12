import fetch from "node-fetch";

/**
 * @param {string} url - url
 * @returns {string} - html
 */
export async function downloadhtml(url) {
  const response = await fetch(url);
  return await response.text();
}
