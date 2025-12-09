// Created Book class with properties and methods

class Book { // Defining Book class
  constructor(title, author, year) { // Constructor with title, author, year
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Getters
  get title() { // Getter for title
    return this._title; // Accessing private property
  }

  get author() {
    return this._author; // Accessing private property
  }

  get year() {
    return this._year; // Accessing private property
  }

  // Setters with validation
  set title(value) { // Setting title
    if (!value || typeof value !== "string") { // Validation
      throw new Error("Title must be a non-empty string"); // Error if invalid
    }
    this._title = value; // Assigning value
  }

  set author(value) { // Setting author
    if (!value || typeof value !== "string") { // Validation
      throw new Error("Author must be a non-empty string"); // Error if invalid
    }
    this._author = value; // Assigning value
  }

  set year(value) { // Setting year
    if (typeof value !== "number" || value <= 0) { // Validation
      throw new Error("Year must be a positive number"); // Error if invalid
    }
    this._year = value; // Assigning value
  }

  // Method to print book info
  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`); // Output book details
  }

  // Static method to find the oldest book in an array
  static findOldestBook(booksArray) { // Accepts array of Book instances
    return booksArray.reduce((oldest, current) => // Reducing array to find oldest
      current.year < oldest.year ? current : oldest // Comparing years
    );
  }
}

export default Book;
