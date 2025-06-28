// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

const firstName = 'Danny'
const lastName = 'Redden'
function myFirstName() {
    console.log(firstName)
}

function myLastName() {
    console.log(lastName)
}
myFirstName();
myLastName();

function fullName() {
    console.log(firstName, lastName)
}

fullName();