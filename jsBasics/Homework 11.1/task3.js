// Homework 11.1 - Task 3
// Using async/await to fetch TODO and User 


async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json(); // Parsing JSON response
}

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json(); // Parsing JSON response
}

try { 
  const [todoResult, userResult] = await Promise.all([fetchTodo(), fetchUser()]); // Using Promise.all to fetch all results
  console.log("To-do result:", todoResult); // Handling results
  console.log("User result:", userResult); // Handling results

  const firstResult = await Promise.race([fetchTodo(), fetchUser()]); // Using Promise.race to fetch the first completed
  console.log("First completed result:", firstResult);
  
} catch (error) {
  console.error("Error occurred:", error); // Handling errors
}

export { fetchTodo, fetchUser }; 