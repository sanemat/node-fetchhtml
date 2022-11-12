import { upsertmetadata } from "./upsertmetadata.mjs";
import test from "node:test";
import { strict as assert } from "node:assert";

test("insert", () => {
  const expected = {
    "example.com": {
      url: "example.com",
      num_links: 0,
      images: 0,
      last_fetch: new Date("2022-11-12T01:01:01"),
    },
  };
  assert.deepEqual(
    upsertmetadata("example.com", 0, 0, new Date("2022-11-12T01:01:01"), {}),
    expected
  );
});

test("update", () => {
  const expected = {
    "example.com": {
      url: "example.com",
      num_links: 2,
      images: 3,
      last_fetch: new Date("2022-11-12T03:01:01"),
    },
  };
  const prev = {
    "example.com": {
      url: "example.com",
      num_links: 0,
      images: 0,
      last_fetch: new Date("2022-11-12T01:01:01"),
    },
  };
  assert.deepEqual(
    upsertmetadata("example.com", 2, 3, new Date("2022-11-12T03:01:01"), prev),
    expected
  );
});
