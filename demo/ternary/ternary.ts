/* eslint-disable */
import { strict as assert } from "assert";

// 'ternary' is a condensed if..else statement that can fit on a
// single line.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
//

const age = 16;
const msg = age >= 18 ? "allow" : "deny";
assert.equal(msg, "deny");
