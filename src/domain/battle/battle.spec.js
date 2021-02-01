const { computeDamage, computeTurnsNeededToWin, computeWinner } = require('.');

describe('BATTLE', () => {
  describe('DAMAGE', () => {
    it('Should compute the damage', () => {
      expect(computeDamage(50, 20)).toBe(30);
    });

    it('Should not allow damages below 1', () => {
      expect(computeDamage(10, 20)).toBe(1);
    });
  });

  describe('TURNS NEEDED TO WIN', () => {
    it('Should compute the amount of turns a pokemon can survive against another', () => {
      const pikachu = {
        attack: 137,
      };
      const bulbasaur = {
        healthPoints: 131,
        defense: 87,
      };
      expect(computeTurnsNeededToWin(pikachu, bulbasaur)).toBe(3);
    });
  });

  describe('WINNER', () => {
    it('Should compute the winner in a simple match', () => {
      const pikachu = {
        name: 'Pikachu',
        healthPoints: 189,
        attack: 137,
        defense: 101,
      };
      const bulbasaur = {
        name: 'Bulbasaur',
        healthPoints: 131,
        attack: 91,
        defense: 87,
      };

      const { winner, turns } = computeWinner(pikachu, bulbasaur);

      expect(winner).toBe('Pikachu');
      expect(turns).toBe(3);
    });

    it('Should compute the winner in a tied match', () => {
      const pikachu = {
        name: 'Pikachu',
        healthPoints: 189,
        attack: 137,
        defense: 101,
        speed: 100,
      };
      const bulbasaur = {
        name: 'Bulbasaur',
        healthPoints: 189,
        attack: 137,
        defense: 101,
        speed: 150,
      };

      const { winner } = computeWinner(pikachu, bulbasaur);

      expect(winner).toBe('Bulbasaur');
    });
  });
});
