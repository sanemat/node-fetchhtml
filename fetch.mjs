#!/usr/bin/env node

import { downloadhtml } from "./downloadhtml.mjs";

export function sum(a, b) {
  return a + b;
}

const myArgs = process.argv.slice(2);

if (myArgs.length > 0) {
  if (myArgs[0] === "--metadata" && myArgs.length === 2) {
    console.log(`show metadata ${myArgs[1]}`);
  } else {
    try {
      console.log(await downloadhtml("https://example.com"));
    } catch (error) {
      console.log(error);
    }
  }
}
