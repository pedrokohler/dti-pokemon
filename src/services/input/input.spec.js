const path = require('path');
const loadInput = require('.');

const example = path.join('src', 'services', 'input', 'example.txt');

describe('INPUT', () => {
  it('Should load the input with the correct format', () => loadInput(example)
    .then((input) => expect(input).toEqual([
      {
        name: 'Pikachu',
        level: 81,
        attributes: {
          healthPoints: {
            baseAttribute: 35,
            effortValue: 22850,
            individualValue: 7,
          },
          attack: {
            baseAttribute: 55,
            effortValue: 23140,
            individualValue: 8,
          },
          defense: {
            baseAttribute: 30,
            effortValue: 17280,
            individualValue: 13,
          },
          speed: {
            baseAttribute: 90,
            effortValue: 24795,
            individualValue: 5,
          },
        },
      },
      {
        name: 'Bulbasaur',
        level: 50,
        attributes: {
          healthPoints: {
            baseAttribute: 45,
            effortValue: 20000,
            individualValue: 9,
          },
          attack: {
            baseAttribute: 49,
            effortValue: 40000,
            individualValue: 12,
          },
          defense: {
            baseAttribute: 49,
            effortValue: 60000,
            individualValue: 3,
          },
          speed: {
            baseAttribute: 45,
            effortValue: 10000,
            individualValue: 8,
          },
        },
      },
    ])));
});
