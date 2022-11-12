import fetch from "node-fetch";

export async function downloadhtml(url) {
  const response = await fetch(url);
  return await response.text();
}
