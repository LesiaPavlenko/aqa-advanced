// homework 11.1 task 2
// Using Promises to fetch TODO and User

function getTodo() { // Fetching TODO item
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json()); // Parsing JSON response
}

function getUser() { // Fetching User item
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()); // Parsing JSON response
}

const allResults = Promise.all([getTodo(), getUser()]); // Using Promise.all to fetch all results
const raceResults = Promise.race([getTodo(), getUser()]); // Using Promise.race to fetch the first completed    

allResults
  .then(data => { // Handling results
    console.log("Promise.all results:", data);
  })
  .catch(errorReceived => { // Handling errors
    console.error("Error in Promise.all:", errorReceived);
  });

raceResults
  .then(data => {
    console.log("Promise.race results:", data); // Handling first completed result
  })
  .catch(error => {
    console.error("Error in Promise.race:", error); // Handling errors
  });

export { getTodo, getUser }; 