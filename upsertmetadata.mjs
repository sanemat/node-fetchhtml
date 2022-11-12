/**
 * @param {string} url - url
 * @param {number} numLinks - count of links
 * @param {number} images - count of images
 * @param {Date} lastFetch - latest fetch date
 * @param {Object} metadata - metadata
 * @returns {string} - upserted metadata
 */
export function upsertmetadata(url, numLinks, images, lastFetch, metadata) {
  return {
    "example.com": {
      url: "example.com",
      num_links: 0,
      images: 0,
      last_fetch: new Date("2022-11-12T01:01:01"),
    },
  };
}
