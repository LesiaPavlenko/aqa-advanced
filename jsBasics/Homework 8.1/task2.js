// Homework 8.1 - task 2
// Program to create a new array where each element is the product of the original element and its index

const numbers = [1, 2, 3, 4, 5];
const MutatedNumbers = numbers.map((num, index) => num * index ); // Array to store mutated numbers

console.log("Original numbers:", numbers); 
console.log("Mutated numbers:", MutatedNumbers);
