// Mocking Axios in Jest

const axios = require('axios');
const { fetchPostById } = require('../src/api');

jest.mock('axios');

describe('Task 3: Mocking Axios', () => {
  it('handles successful response', async () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: { id: 1 },
    });

    const response = await fetchPostById(1);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  it('handles error response', async () => {
    axios.get.mockRejectedValue({
      response: { status: 500 },
    });

    await expect(fetchPostById(1)).rejects.toMatchObject({
      response: { status: 500 },
    });
  });
});
