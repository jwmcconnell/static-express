const request = require('supertest');
const app = require('../lib/app');

const colors = require('../lib/colors.json');

describe('Static Express Server', () => {
  it('returns an html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('<h1>Colors</h1>'));
      });
  });
});

describe('API endpoints', () => {
  it('returns an array of colors', () => {
    return request(app)
      .get('/api/v1/colors')
      .then(res => {
        expect(res.text).toEqual(JSON.stringify(colors));
      });
  });
});
