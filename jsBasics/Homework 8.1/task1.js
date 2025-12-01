// Homework 8.1 - task 1 
// Program to count positive, negative, and zero numbers in an array

const numbers = [2, -5, 0, 7, -3, 0, 10, -8]; // Array of numbers

let positiveCount = 0; // Variable to count positive numbers
let negativeCount = 0; // Variable to count negative numbers
let zeroCount = 0;  // Variable to count zero numbers

// Loop through each number in the array
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }     
}
// Output the counts to the console
console.log("Positive numbers count:", positiveCount);
console.log("Negative numbers count:", negativeCount);
console.log("Zero numbers count:", zeroCount);      
