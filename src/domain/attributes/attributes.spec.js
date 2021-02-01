const { computeHealthPoints, computeAttribute } = require('.');

describe('ATTRIBUTES', () => {
  describe('HEALTH POINTS', () => {
    it('Should compute the health points', () => {
      const pikachu = {
        baseAttribute: 35,
        effortValue: 22850,
        individualValue: 7,
        level: 81,
      };
      expect(computeHealthPoints(pikachu)).toBe(189);
      const bulbasaur = {
        baseAttribute: 45,
        effortValue: 20000,
        individualValue: 9,
        level: 50,
      };
      expect(computeHealthPoints(bulbasaur)).toBe(131);
    });
  });

  describe('OTHERS', () => {
    it('Should compute the attack', () => {
      const pikachu = {
        baseAttribute: 55,
        effortValue: 23140,
        individualValue: 8,
        level: 81,
      };
      expect(computeAttribute(pikachu)).toBe(137);
      const bulbasaur = {
        baseAttribute: 49,
        effortValue: 40000,
        individualValue: 12,
        level: 50,
      };
      expect(computeAttribute(bulbasaur)).toBe(91);
    });

    it('Should compute the defense', () => {
      const pikachu = {
        baseAttribute: 30,
        effortValue: 17280,
        individualValue: 13,
        level: 81,
      };
      expect(computeAttribute(pikachu)).toBe(101);
      const bulbasaur = {
        baseAttribute: 49,
        effortValue: 60000,
        individualValue: 3,
        level: 50,
      };
      expect(computeAttribute(bulbasaur)).toBe(87);
    });

    it('Should compute the speed', () => {
      const pikachu = {
        baseAttribute: 90,
        effortValue: 24795,
        individualValue: 5,
        level: 81,
      };
      expect(computeAttribute(pikachu)).toBe(190);
      const bulbasaur = {
        baseAttribute: 45,
        effortValue: 10000,
        individualValue: 8,
        level: 50,
      };
      expect(computeAttribute(bulbasaur)).toBe(70);
    });
  });
});
