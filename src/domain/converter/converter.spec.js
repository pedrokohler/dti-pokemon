const { convertInputIntoPokemon } = require('.');

describe('CONVERTER', () => {
  it('Should convert a pokemon input into pokemon attributes', () => {
    const input = {
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
    };
    expect(convertInputIntoPokemon(input)).toEqual({
      name: 'Pikachu',
      level: 81,
      healthPoints: 189,
      attack: 137,
      defense: 101,
      speed: 190,
    });
  });
});
