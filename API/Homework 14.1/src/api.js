const axios = require('axios');

// Function to create an Axios instance with optional interceptors
function createApi({ withInterceptors = false } = {}) { 
  const api = axios.create({ // axios instance creation
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
  });
// axios.create() - creates a new Axios instance that doesn't affect the global axios

  if (withInterceptors) {
    api.interceptors.request.use((config) => {
      console.log('REQUEST');
      console.log(config.method.toUpperCase(), config.url);
      return config;
    });

    api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error) 
    );
  }

  return api;
}

module.exports = { createApi };