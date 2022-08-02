const assert = require('chai').assert;
const tail = require("../tail");


// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
  const result = ["Hello", "Lighthouse", "Labs"];
  it("returns 3 for result.length", () => {
    assert.strictEqual((result.length), 3);
  });
  it("returns 2 for tail(result).length", () => {
    assert.strictEqual(tail(result).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(result)", () => {
    assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
  });
});