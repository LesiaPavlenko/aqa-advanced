const { createApi } = require('../src/api'); // Import the API creation function

describe('JSONPlaceholder API tests', () => { // Test suite for JSONPlaceholder API
  let api;

  beforeAll(() => {
    // Jest-hook, initialize API with interceptors for logging
    api = createApi({ withInterceptors: true });
  });

  it('GET /posts/1 returns valid post', async () => {
    const response = await api.get('/posts/1');

    expect(response.status).toBe(200);
    expect(typeof response.data.userId).toBe('number');
    expect(typeof response.data.id).toBe('number');
    expect(typeof response.data.title).toBe('string');
    expect(typeof response.data.body).toBe('string');
  });

  it('GET /users/1 returns valid user', async () => {
    const response = await api.get('/users/1');

    expect(response.status).toBe(200);
    expect(typeof response.data.id).toBe('number');
    expect(typeof response.data.name).toBe('string');
    expect(response.data.email).toContain('@');
  });

  it('GET /comments?postId=1 returns comments list', async () => {
    const response = await api.get('/comments', { params: { postId: 1 } });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    response.data.forEach((comment) => {
      expect(comment.postId).toBe(1);
      expect(typeof comment.id).toBe('number');
      expect(typeof comment.name).toBe('string');
      expect(typeof comment.email).toBe('string');
      expect(typeof comment.body).toBe('string');
    });
  });

  it('POST /posts creates post', async () => {
    const newPost = { title: 'Test', body: 'Body', userId: 1 };

    const response = await api.post('/posts', newPost);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  it('POST /comments creates comment', async () => {
    const newComment = {
      postId: 1,
      name: 'Test',
      email: 'test@test.com',
      body: 'Body',
    };

    const response = await api.post('/comments', newComment);

    expect(response.status).toBe(201);
    expect(response.data.email).toBe(newComment.email);
  });
});
