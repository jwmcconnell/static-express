const request = require('supertest');
const app = require('../lib/app');

describe('Static Express Server', () => {
  it('returns an html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('<h1>Colors</h1>'));
      });
  });
});
