// Testing Request Headers and Params

const axios = require('axios');
const { fetchWithHeadersAndParams } = require('../src/api');

jest.mock('axios');

describe('Task 2: Headers and Params', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({ status: 200, data: [] });
  });

  it('sends correct headers and params', async () => {
    const params = { userId: 1 };
    const headers = { Authorization: 'Bearer token' };

    await fetchWithHeadersAndParams(params, headers);

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      { params, headers }
    );
  });
});
