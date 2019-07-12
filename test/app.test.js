const request = require('supertest');
const app = require('../lib/app');

const { colors } = require('../lib/colors.json');

describe('Static Express Server', () => {
  it('returns an html home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('<h1>Colors</h1>'));
      });
  });

  it('returns an html color page', () => {
    return request(app)
      .get('/color.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('<h1>Color</h1>'));
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

  it('returns a color', () => {
    return request(app)
      .get('/api/v1/colors/red')
      .then(res => {
        expect(res.text).toEqual(JSON.stringify({
          'name': 'red',
          'hex': 'FF0000',
          'r': 255,
          'g': 0,
          'b': 0
        }));
      });
  });
});
