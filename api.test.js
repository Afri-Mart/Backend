const request = require('supertest');
const server = require('./api/server.js'); // adjust path as needed

describe('API Endpoints', () => {
  it('should return 200 OK on main endpoint', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  it('should return items array', async () => {
    const response = await request(server).get('/api/items');
    expect(Array.isArray(response.body)).toBe(true);
  });
}); 