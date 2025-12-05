// Homework 9.1 - Task 4
// Program to create a person object, add and delete properties

const person = {
    firstName: "John",
    lastName: "Snow",
    age: 20,
};

person.email = "johnsnow@winterfell.com"; 
delete person.age;
console.log(person);
