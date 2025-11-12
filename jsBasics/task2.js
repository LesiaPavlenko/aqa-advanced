// Homework 4.2. Task 2
// Concatenation of strings and template strings

'use strict';    

let maleUserName = "Jimmy";
let femaleUserName = "Louise";

// String concatenation
let greetingUsers = "Hello, " + maleUserName + " and " + femaleUserName + "! Happy to see you.";
console.log(greetingUsers);

// Template string
let greetUsers = `Hello, ${maleUserName} and ${femaleUserName}! Nice to meet you.`;
console.log(greetUsers);