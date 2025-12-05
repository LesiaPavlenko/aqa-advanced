// Homework 9.1 - Task 2
// Program to create a book object and extract specific properties 
// using destructuring

const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genres: ["Fantasy fiction", "children's literature", "novel"]

};

// Destructuring assignment to extract title and author
const { title, author } = book;

console.log("Title:", title);
console.log("Author:", author); 