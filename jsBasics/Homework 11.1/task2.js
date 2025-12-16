// homework 11.1 task 2
// Using Promises to fetch TODO and User

function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
		if (!response.ok) {
			throw new Error(`Todo request failed: ${response.status} ${response.statusText}`);
		}
		return response.json();
	});
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
		if (!response.ok) {
			throw new Error(`User request failed: ${response.status} ${response.statusText}`);
		}
		return response.json();
	});
}

// Create each fetch promise once so we don't start the same request multiple times
const todoPromise = getTodo();
const userPromise = getUser();

const allResults = Promise.all([todoPromise, userPromise]); // Fetching both TODO and User
const raceResults = Promise.race([todoPromise, userPromise]); // Fetching the first completed between TODO and User

allResults
	.then(([todoResult, userResult]) => {
		// Both requests succeeded
		console.log('TODO result:', todoResult);
		console.log('User result:', userResult);
	})
	.catch((errorReceived) => {
		console.error('Error in Promise.all:', errorReceived);
	});

raceResults
	.then((firstResult) => {
		// First request succeeded
		console.log('Promise.race result (first completed):', firstResult);
	})
	.catch((error) => {
		console.error('Error in Promise.race:', error);
	});

export { getTodo, getUser };
