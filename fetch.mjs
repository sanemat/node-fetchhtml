import { downloadhtml } from "./downloadhtml.mjs";

export function sum(a, b) {
  return a + b;
}

console.log(await downloadhtml("https://example.com"));
