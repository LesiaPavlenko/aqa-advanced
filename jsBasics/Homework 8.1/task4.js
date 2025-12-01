// Homework 8.1 - task 4
// Program to filter even numbers from an array and create a new array with them


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0); // Filter even numbers

console.log("New array with even numbers:", evenNumbers); // Even numbers array
console.log("Count of even numbers:", evenNumbers.length); // Count of even numbers

