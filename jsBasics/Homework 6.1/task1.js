// Homework 6.1 - Task 1
// Create three functions that calculate the area of a rectangle.


// 1. Function declaration
console.log('1. Function Declaration:');
function getRectangleArea(width, height) {
    return width * height;
}

const result = getRectangleArea(1, 10);
console.log('Small Rectangle Area = ' + result);
console.log('Big Rectangle Area = ' + getRectangleArea(1, 666));


// 2. Function expression
console.log('\n2. Function Expression:');
const getRectangleAreaExpr = function(width, height) {
    return width * height;
}

const resultExpr = getRectangleAreaExpr(2, 10);
console.log('Small Rectangle Area = ' + resultExpr);
console.log('Big Rectangle Area = ' + getRectangleAreaExpr(1, 6666));


// 3. Arrow function
console.log('\n3. Arrow Function:');
const getRectangleAreaArrow = (width, height) => width * height;

const resultArrow = getRectangleAreaArrow(3, 10); 
console.log('Small Rectangle Area = ' + resultArrow);
console.log('Big Rectangle Area = ' + getRectangleAreaArrow(1, 66666)); 
