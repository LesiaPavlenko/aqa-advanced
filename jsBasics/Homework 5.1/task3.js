// Task 3: Print the multiplication table using both FOR and WHILE.

const number = 1000;

// Using FOR
console.log("\nMultiplication table using FOR:\n");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Using WHILE
console.log("\nMultiplication table using WHILE:\n");
let j = 1;
while (j <= 10) {
  console.log(`${number} * ${j} = ${number * j}`);
  j++;
}
