// Importing classes
import Book from "./Book.js";
import EBook from "./EBook.js";

// Creating Book instances
const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997); 
const book2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998);
const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
const book4 = new Book("A Song of Ice and Fire", "George R.R. Martin", 1996);

// Calling methods
console.log("\nBooks:")
book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();  

// Creating EBook instance
const ebook1 = new EBook("The Wheel of Time", "Robert Jordan", 2013, "PDF"); // Using latest book year for demonstration
console.log("\nEBook:")
ebook1.printInfo();

// Array with books of both types
const books = [book1, book2, book3, book4, ebook1]; // Mixed array of Book and EBook

// Static method to find the oldest
const oldest = Book.findOldestBook(books);
console.log("\nOldest book:");
oldest.printInfo();

// Static method for EBook to convert Book to EBook
const ebook2 = EBook.fromBook(book1, "docx");
console.log("\nConverted to EBook:");
ebook2.printInfo();
