// Homework 7.1 - Task 1

// Callback for even numbers ( by arrow function)
const handleEven = () => {
  console.log("number is even");
};
// Callback for odd numbers (by regular function)
function handleOdd() {
  console.log("number is odd");
}
// Main function
function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven();   // calls callback for even numbers
  } else {
    onOdd();    // calls callback for odd numbers
  }
}

// Calling the function with a number
handleNum(4654, handleEven, handleOdd);