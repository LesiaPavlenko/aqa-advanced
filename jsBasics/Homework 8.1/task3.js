// Homework 8.1 - task 3
// Program to calculate the sum of all numbers in an array using reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 101];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of current array: Sum =", sum);
