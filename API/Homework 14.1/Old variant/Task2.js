// Requests from JSONPlaceholder with Axios interceptors

import axios from 'axios';


const api = axios.create({ 
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

// REQUEST INTERCEPTOR - Logs outgoing requests
api.interceptors.request.use(
  (config) => {
    console.log('\nREQUEST');
    console.log('Method:', config.method.toUpperCase());
    console.log('URL:', `${config.baseURL}${config.url}`);
    if (config.data) {
      console.log('Body:', config.data);
    }
    return config;
  },
  (error) => {
    console.error('!-! REQUEST ERROR');
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR - Logs incoming responses
api.interceptors.response.use(
  (response) => {
    console.log('RESPONSE');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    return response;
  },
  (error) => {
    console.error('!-! RESPONSE ERROR');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    return Promise.reject(error);
  }
);

async function runTests() {
  try {
    // TEST 1: GET /posts/1
    const postResponse = await api.get('/posts/1');
    console.assert(postResponse.status === 200, 'Status is not 200');
    console.assert(postResponse.data.id === 1, 'Post ID is not 1');
    console.assert(typeof postResponse.data.title === 'string', 'Title is not string');
    console.log('YES! Test 1 passed');

    // TEST 2: GET /users/1
    const userResponse = await api.get('/users/1');
    console.assert(userResponse.status === 200, 'Status is not 200');
    console.assert(userResponse.data.id === 1, 'User ID is not 1');
    console.assert(userResponse.data.email.includes('@'), 'Invalid email');
    console.log('YES! Test 2 passed');

    // TEST 3: GET /comments?postId=1
    const commentsResponse = await api.get('/comments', {
      params: { postId: 1 }
    });
    console.assert(commentsResponse.status === 200, 'Status is not 200');
    console.assert(Array.isArray(commentsResponse.data), 'Comments is not array');
    console.assert(commentsResponse.data.length > 0, 'Comments array is empty');
    console.log('YES! Test 3 passed');

    // TEST 4: POST /posts
    const newPost = {
      title: 'New post',
      body: 'New post body',
      userId: 1
    };

    const createPostResponse = await api.post('/posts', newPost);
    console.assert(createPostResponse.status === 201, 'Status is not 201');
    console.assert(createPostResponse.data.title === newPost.title, 'Title mismatch');
    console.log('YES! Test 4 passed');

    // TEST 5: POST /comments
    const newComment = {
      postId: 1,
      name: 'New name',
      email: 'test@google.com',
      body: 'New body'
    };

    const createCommentResponse = await api.post('/comments', newComment);
    console.assert(createCommentResponse.status === 201, 'Status is not 201');
    console.assert(createCommentResponse.data.email === newComment.email, 'Email mismatch');
    console.log('YES! Test 5 passed');

    console.log('\n !WOW! ALL TESTS PASSED WITH SUCCESS!');
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    console.error('X TEST FAILED');
  }
}

runTests();