/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


let n = 1;
// post fix increment
n++;
assert.equal(n, 2);

// prefix increment
++n;
assert.equal(n, 3);

//this does not work as expected
n = 5;
const k = n++;
assert.equal(k, 6);

// use the prefix version when doing this below
n = 5;
const j = ++n;
assert.equal(j, 6);

n = 5;
const t = --n;
assert.equal(t, 4);

// this method is preferred to avoid the pre/post fix issues
// arithmetic assignment
n = 5;
n += 5;
assert.equal(n, 10);
n -= 5;
assert.equal(n, 5);
n -= 1;
assert.equal(n, 4);
