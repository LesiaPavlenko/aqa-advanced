// Homework 4.1. Task 1
// Declaring variables for primitive data types
import chalk from 'chalk';
'use strict';

// String 
let userString = "Hello, JavaScript!";
console.log(userString); // only string

// Number 
let userNumber = 2025;
console.log(userNumber);  // only number

// Boolean
let userBoolean = true;  
console.log(userBoolean); // only boolean

// Null
let userNull = null;  
console.log("What is the a null:", userNull);

// Undefined
let userUndefined;
console.log("What is Undefined:", userUndefined);

// With colored text
console.log(chalk.bgGreen("Greeting:", userString));
console.log(chalk.bgGray("Current year:", userNumber));
console.log(chalk.bgBlue("Do you love coding:", userBoolean));

// Check types of variables
console.log(typeof userString);  // check the type of string
console.log(typeof userNumber);  // check the type of number
console.log(typeof userBoolean);  // check the type of boolean
console.log(typeof userUndefined);  // check the type of undefined
