const axios = require('axios');

function fetchWithBrokenUrl() {
  return axios.get('https://jsonplaceholder.typicode.com/broken159191');
}

function fetchWithHeadersAndParams(params, headers) {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    params,
    headers,
  });
}

function fetchPostById(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

module.exports = {
  fetchWithBrokenUrl,
  fetchWithHeadersAndParams,
  fetchPostById,
};
