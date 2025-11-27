//Homework 7.1 - Task 2
// Recursive function to count down

function counts(num) {
  console.log(num);

  if (num <= 0) {
    return; // stop condition
  }

  counts(num - 1); // recursive call
}

counts(11); // Calling the function with starting number