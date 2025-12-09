// Created an EBook class that extends Book 
// with additional properties and methods

import Book from "./Book.js"; // Importing Book class

class EBook extends Book { // Extending Book class
  constructor(title, author, year, fileFormat) { // Added fileFormat property
    super(title, author, year); // Calling parent constructor
    this.fileFormat = fileFormat; // Setting file format
  }

  // Getter
  get fileFormat() {
    return this._fileFormat; // Accessing private property
  }

  // Setter with validation
  set fileFormat(value) { // Setting file format
    if (!value || typeof value !== "string") { 
      throw new Error("File format must be a non-empty string"); // Validation
    }
    this._fileFormat = value; // Assigning value
  }

  // Override printInfo
  printInfo() { // Including file format in output
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}` // Including file format
    );
  }

  // Static method to convert Book to EBook
  static fromBook(bookInstance, fileFormat) { // Accepts Book instance and file format
    if (!(bookInstance instanceof Book)) {
      throw new Error("Argument must be an instance of Book"); // Validation
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat); // Creating EBook from Book
  }
}

export default EBook;
