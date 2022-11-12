#!/usr/bin/env node

import { downloadhtml } from "./downloadhtml.mjs";
import { parsehtml } from "./parsehtml.mjs";
import { upsertmetadata } from "./upsertmetadata.mjs";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const myArgs = process.argv.slice(2);
let metadataPath = "metadata.json";

if (myArgs.length === 0) {
  process.exit();
}
if (myArgs[0] === "--metadata" && myArgs.length === 2) {
  console.log(`show metadata ${myArgs[1]}`);
  const url = new URL(myArgs[1]);
  let metadataContent;
  if (existsSync(metadataPath)) {
    metadataContent = JSON.parse(readFileSync(metadataPath));
  } else {
    metadataContent = {};
  }
  const meta = metadataContent[url.hostname];
  if (meta) {
    console.log(`site: ${meta.url}`);
    console.log(`num_links: ${meta.num_links}`);
    console.log(`images: ${meta.images}`);
    console.log(`last_fetch: ${new Date(meta.last_fetch)}`);
  }
  process.exit();
}

myArgs.map((urlInput) => {
  let lastFetch;
  const url = new URL(urlInput);
  downloadhtml(urlInput)
    .then((html) => {
      lastFetch = Date.now();
      writeFileSync(`${url.hostname}.html`, html);
      return parsehtml(html);
    })
    .then((meta) => {
      let metadataContent;
      if (existsSync(metadataPath)) {
        metadataContent = JSON.parse(readFileSync(metadataPath));
      } else {
        metadataContent = {};
      }
      writeFileSync(
        metadataPath,
        JSON.stringify(
          upsertmetadata(
            url.hostname,
            meta.linkUrls.length,
            meta.imageUrls.length,
            lastFetch,
            metadataContent
          )
        )
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
