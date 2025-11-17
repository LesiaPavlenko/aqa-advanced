// Homework 4.2. Tasks 4.1-4.3
// Calculating area and volumes of geometric shapes
'use strict';    

// 4.1 Calculate the area of a circle
{
let radius = 10;
let area = Number((Math.PI * ( radius * radius)).toFixed(2)); // Two ways of calculating area, + made it number after toFixed
let area2 = Number((Math.PI * radius ** 2).toFixed(2));
// Result 
console.log("\n4.1 Calculate the area of a circle:"); // with new line
console.log("Radius =", radius);
console.log("Area =", area);
console.log("Area2 =", area2);
}

// 4.2 Calculate the area of ​​the rectangle
{
let length = 50.15;
let width = 40.038;
let area = Number((length * width).toFixed(2));
// Result
console.log("\n4.2 Calculate the area of ​​the rectangle:"); // with new line
console.log("Length =", length);
console.log("Width =", width);
console.log("Area =", area);
console.log(`Length = ${length}, Width = ${width}, Area = ${area}`); // using template string
}

// 4.3 Calculate the volume of ​​the cylinder
{
let radius = 6; // radius of the cylinder
let height = 13; // height of the cylinder
let volume = Number((Math.PI * ( radius ** 2 ) * height).toFixed(2));
// Result
console.log("\n4.3 Calculate the volume of ​​the cylinder:"); // with new line
console.log("Radius =", radius);
console.log("Height =", height);
console.log("Volume =", volume);
}