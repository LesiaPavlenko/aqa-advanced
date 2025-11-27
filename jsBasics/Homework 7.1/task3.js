// homework 7.1 - task 3
// Function to divide two numbers with error handling

function divide(numerator, denominator) {
  // Both arguments as numbers check
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  // Division by zero check
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  
  return numerator / denominator;
}

// Successful division
try {
  console.log(divide(20, 10)); 
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed!");
}

// Division by zero
try {
  console.log(divide(11, 0)); 
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed!");
}

// One argument is not a number
try {
  console.log(divide("Urkaine", 10)); 
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work completed!");
}
