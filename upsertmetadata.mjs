/**
 * @param {string} url - url
 * @param {number} numLinks - count of links
 * @param {number} images - count of images
 * @param {Date} lastFetch - latest fetch date
 * @param {Object} metadata - metadata
 * @returns {string} - upserted metadata
 */
export function upsertmetadata(url, numLinks, images, lastFetch, metadata) {
  const result = Object.assign({}, metadata);
  result[url] = {
    url: url,
    num_links: numLinks,
    images: images,
    last_fetch: lastFetch,
  };
  return result;
}
