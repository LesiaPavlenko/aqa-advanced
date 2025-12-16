// Homework 11.1 - Task 3
// Using async/await to fetch TODO and User

async function fetchTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

	if (!response.ok) {
		throw new Error(`Failed to fetch TODO: ${response.status}`);
	}

	return response.json();
}

async function fetchUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

	if (!response.ok) {
		throw new Error(`Failed to fetch USER: ${response.status}`);
	}

	return response.json();
}

async function main() {
	try {
		// Promise.all
		const [todoResult, userResult] = await Promise.all([fetchTodo(), fetchUser()]);
		console.log('To-do result:', todoResult);
		console.log('User result:', userResult);

		// Promise.race
		const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
		console.log('First completed result:', firstResult);
	} catch (error) {
		console.error('Error occurred:', error);
	}
}

main();

export { fetchTodo, fetchUser };
