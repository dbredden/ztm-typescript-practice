/* eslint-disable */
import { strict as assert, equal } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const add = 1 + 1;
assert.equal(add, 2);

const sub = 2 - 1;
assert.equal(sub, 1);

const mul = 3 * 1;
assert.equal(mul, 3);

const div = 8 / 2;
assert.equal(div, 4);

const inf = 1 / 0;
assert.equal(inf, Infinity);

const nan = 0 / 0;
assert(isNaN(nan));

const rem = 10 % 3;
assert.equal(rem, 1);

const neg = -rem;
assert.equal(neg, -1);


// can do decimal, hex, and scientific notation 
