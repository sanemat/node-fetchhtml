import { sum } from "./fetch";
import test from "node:test";
import { strict as assert } from "node:assert";

test("sum", (t) => {
  assert.deepEqual(sum(2, 3), 5);
});
