// Homework 9.1 - Task 5
// Program to create an array of user objects and extract properties

// massive of user objects
const users = [
  { name: "Olesia", email: "olesia@tcl.com", age: 30 },
  { name: "Andriy", email: "andrey@tcl.com", age: 32 },
  { name: "Pavlo", email: "pavlo@tcl.com", age: 29 }
];

// Iterate over the array and destructure each user object
for (const { name, email, age } of users) {
  console.log(`User name: ${name}, Email address: ${email}, User age: ${age}`);
};
