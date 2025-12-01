// Homework 8.1 - task 6
// Sort an array of numbers in ascending order  

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedNumbers = [...numbersList]; //Copy the original array
sortedNumbers.sort((a, b) => a - b); // Sort the copied array (ascending order)

console.log("Original array:", numbersList);
console.log("Sorted array:", sortedNumbers);
   

// (a, b) => a - b:
// Negative result → a comes before b 
// Positive result → b comes before a
// Zero → order stays the same