// Homework 11.1 - Task 4
// Using Classes to fetch TODO and User
// with async/await, Promise.all and Promise.race   

class HaveTodo {
  async fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
  }
}

class HaveUser {
  async fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
  }
}

async function runServices() {
  const haveTodo = new HaveTodo();
  const haveUser = new HaveUser();

  try {
    const all = await Promise.all([
      haveTodo.fetchTodo(),
      haveUser.fetchUser()
    ]);

    console.log("Promise.all:", all);

    const race = await Promise.race([
      haveTodo.fetchTodo(),
      haveUser.fetchUser()
    ]);

    console.log("Promise.race:", race);

  } catch (error) {
    console.error(error);
  }
}

runServices();

export { HaveTodo, HaveUser };