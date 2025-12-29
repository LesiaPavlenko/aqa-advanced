const { fetchWithBrokenUrl } = require('../src/api');

describe('Task 1: Error handling', () => {
  it('returns 404 error for wrong URL', async () => {
    await expect(fetchWithBrokenUrl()).rejects.toMatchObject({
      response: { status: 404 },
    });
  });
});
