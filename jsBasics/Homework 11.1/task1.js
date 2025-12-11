// Homework 11.1 - Task 1
// Create function with setTimeout

function ShowTextAfterDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);    

}
export default ShowTextAfterDelay; // Exporting the function

// Example:
ShowTextAfterDelay("Hello, my async function!", 2000); 
